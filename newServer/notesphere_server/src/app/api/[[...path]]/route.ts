import { or } from "@prisma/orm-postgres/orm-client";
import {
  createToken,
  hashPassword,
  requireAdmin,
  requirePremium,
  requireUser,
  verifyLoginPassword,
} from "../_lib/auth.ts";
import {
  ApiError,
  downloadResponse,
  handleApi,
  optionsResponse,
  parsePage,
  parseUuid,
  readJson,
  stringField,
  stringOrNull,
} from "../_lib/http.ts";
import { withDatabase } from "../../../prisma/db.ts";

const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const MAX_REQUEST_BYTES = 4_500_000;
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

function getPath(request: Request): string[] {
  const parts = new URL(request.url).pathname.split("/").filter(Boolean);
  if (parts.shift() !== "api") {
    throw new ApiError(404, "Route not found");
  }

  try {
    return parts.map((part) => decodeURIComponent(part));
  } catch {
    throw new ApiError(400, "Invalid URL path");
  }
}

function isUniqueViolation(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "sqlState" in error &&
    error.sqlState === "23505"
  );
}

function getContentType(fileType: string): string {
  switch (fileType.toLowerCase()) {
    case ".pdf":
    case "pdf":
      return "application/pdf";
    case ".doc":
    case "doc":
      return "application/msword";
    case ".docx":
    case "docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    default:
      return "application/octet-stream";
  }
}

function hasExpectedFileSignature(extension: string, data: Uint8Array): boolean {
  const startsWith = (...bytes: number[]) =>
    bytes.every((byte, index) => data[index] === byte);

  switch (extension) {
    case ".pdf":
      return data.length >= 5 && new TextDecoder().decode(data.subarray(0, 5)) === "%PDF-";
    case ".doc":
      return startsWith(0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1);
    case ".docx":
      return startsWith(0x50, 0x4b, 0x03, 0x04);
    default:
      return false;
  }
}

function getClientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  const address = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip");
  return address?.slice(0, 128) || null;
}

async function register(request: Request): Promise<Response> {
  const body = await readJson(request);
  const name = stringField(body.name);
  const email = stringField(body.email)?.toLowerCase() ?? null;
  const password = typeof body.password === "string" ? body.password : null;
  const institution = stringField(body.institution);
  const level = stringField(body.level);

  if (!name || !email || !password || !institution || !level) {
    throw new ApiError(400, "Please provide all required fields");
  }
  if (
    name.length > 120 ||
    email.length > 320 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    institution.length > 200 ||
    level.length > 80
  ) {
    throw new ApiError(400, "Please provide valid registration details");
  }
  if (password.length < 6 || password.length > 128) {
    throw new ApiError(400, "Password must be between 6 and 128 characters");
  }

  const passwordHash = await hashPassword(password);
  try {
    return await withDatabase(async (database) => {
      const existing = await database.orm.public.User
        .where({ email })
        .select("id")
        .first();
      if (existing) {
        throw new ApiError(409, "User already exists with this email");
      }

      const user = await database.orm.public.User
        .select(
          "id",
          "name",
          "email",
          "institution",
          "level",
          "role",
          "isPremium",
        )
        .create({
          name,
          email,
          password: passwordHash,
          institution,
          level,
          role: "student",
        });

      return Response.json(
        { ...user, token: createToken(user.id) },
        { status: 201 },
      );
    });
  } catch (error) {
    if (isUniqueViolation(error)) {
      throw new ApiError(409, "User already exists with this email");
    }
    throw error;
  }
}

async function login(request: Request): Promise<Response> {
  const body = await readJson(request);
  const email = stringField(body.email)?.toLowerCase() ?? null;
  const password = typeof body.password === "string" ? body.password : null;
  if (!email || !password || password.length > 128) {
    throw new ApiError(400, "Please provide a valid email and password");
  }

  return await withDatabase(async (database) => {
    const user = await database.orm.public.User
      .where({ email })
      .select(
        "id",
        "name",
        "email",
        "password",
        "institution",
        "level",
        "role",
        "isPremium",
        "subscriptionExpiry",
        "bio",
        "isActive",
        "weeklyDownloads",
        "lastDownloadReset",
      )
      .first();

    const passwordMatches = await verifyLoginPassword(password, user?.password);
    if (!user || !passwordMatches) {
      throw new ApiError(401, "Invalid credentials");
    }
    if (!user.isActive) {
      throw new ApiError(401, "Account is deactivated. Contact admin.");
    }

    if (Date.now() - user.lastDownloadReset.getTime() >= WEEK_IN_MS) {
      await database.orm.public.User.where({ id: user.id }).update({
        weeklyDownloads: 0,
        lastDownloadReset: new Date(),
      });
    }

    return Response.json({
      id: user.id,
      name: user.name,
      email: user.email,
      institution: user.institution,
      level: user.level,
      role: user.role,
      isPremium: user.isPremium,
      subscriptionExpiry: user.subscriptionExpiry,
      bio: user.bio,
      token: createToken(user.id),
    });
  });
}

async function getMe(request: Request): Promise<Response> {
  return await withDatabase(async (database) => {
    const user = await requireUser(request, database);
    const profile = await database.orm.public.User
      .where({ id: user.id })
      .select(
        "id",
        "name",
        "email",
        "institution",
        "level",
        "role",
        "isPremium",
        "subscriptionExpiry",
        "bio",
        "isActive",
        "weeklyDownloads",
        "lastDownloadReset",
        "createdAt",
        "updatedAt",
      )
      .include("notes", (notes) =>
        notes.select("id", "title", "course", "downloads", "verified", "createdAt"),
      )
      .first();

    if (!profile) {
      throw new ApiError(404, "User not found");
    }
    return Response.json(profile);
  });
}

async function updateProfile(request: Request): Promise<Response> {
  const body = await readJson(request);
  return await withDatabase(async (database) => {
    const user = await requireUser(request, database);
    const update: {
      name?: string;
      institution?: string;
      level?: string;
      bio?: string | null;
    } = {};

    for (const field of ["name", "institution", "level"] as const) {
      if (body[field] !== undefined) {
        const value = stringField(body[field]);
        if (!value || value.length > (field === "name" ? 120 : 200)) {
          throw new ApiError(400, `Invalid ${field}`);
        }
        update[field] = value;
      }
    }
    if (body.bio !== undefined) {
      if (body.bio !== null && typeof body.bio !== "string") {
        throw new ApiError(400, "Invalid bio");
      }
      update.bio = stringOrNull(body.bio);
    }
    if (Object.keys(update).length === 0) {
      throw new ApiError(400, "No profile fields provided to update");
    }

    const updatedUser = await database.orm.public.User
      .where({ id: user.id })
      .select(
        "id",
        "name",
        "email",
        "institution",
        "level",
        "role",
        "bio",
        "isPremium",
        "subscriptionExpiry",
      )
      .update(update);
    if (!updatedUser) {
      throw new ApiError(404, "User not found");
    }
    return Response.json(updatedUser);
  });
}

async function getNotes(request: Request): Promise<Response> {
  const searchParams = new URL(request.url).searchParams;
  const search = searchParams.get("search")?.trim();
  const institution = searchParams.get("institution")?.trim();
  const course = searchParams.get("course")?.trim();
  const lecturer = searchParams.get("lecturer")?.trim();
  const tags = searchParams.get("tags")?.trim();
  const sortBy = searchParams.get("sortBy") ?? "createdAt";
  const direction = searchParams.get("order")?.toLowerCase() === "asc" ? "asc" : "desc";
  const page = parsePage(searchParams.get("page"), 1, 100_000);
  const limit = parsePage(searchParams.get("limit"), 20, 100);

  return await withDatabase(async (database) => {
    let filtered = database.orm.public.Note;
    if (search) {
      const term = `%${search}%`;
      filtered = filtered.where((note) =>
        or(
          note.title.ilike(term),
          note.course.ilike(term),
          note.courseCode.ilike(term),
          note.description.ilike(term),
        ),
      );
    }
    if (institution) {
      filtered = filtered.where((note) => note.institution.ilike(`%${institution}%`));
    }
    if (course) {
      filtered = filtered.where((note) => note.course.ilike(`%${course}%`));
    }
    if (lecturer) {
      filtered = filtered.where((note) => note.lecturer.ilike(`%${lecturer}%`));
    }
    if (tags) {
      filtered = filtered.where((note) => note.tags.ilike(`%${tags}%`));
    }

    const totals = await filtered.aggregate((aggregate) => ({
      count: aggregate.count(),
    }));
    const selection = filtered
      .select(
        "id",
        "title",
        "course",
        "courseCode",
        "lecturer",
        "institution",
        "fileName",
        "fileSize",
        "fileType",
        "uploaderId",
        "tags",
        "description",
        "summary",
        "downloads",
        "verified",
        "rating",
        "ratingCount",
        "createdAt",
        "updatedAt",
      )
      .include("uploader", (uploader) =>
        uploader.select("id", "name", "institution"),
      );

    let notes;
    if (sortBy === "downloads") {
      notes = await (direction === "asc"
        ? selection.orderBy((note) => note.downloads.asc())
        : selection.orderBy((note) => note.downloads.desc()))
        .limit(limit)
        .offset((page - 1) * limit)
        .all();
    } else if (sortBy === "rating") {
      notes = await (direction === "asc"
        ? selection.orderBy((note) => note.rating.asc())
        : selection.orderBy((note) => note.rating.desc()))
        .limit(limit)
        .offset((page - 1) * limit)
        .all();
    } else {
      notes = await (direction === "asc"
        ? selection.orderBy((note) => note.createdAt.asc())
        : selection.orderBy((note) => note.createdAt.desc()))
        .limit(limit)
        .offset((page - 1) * limit)
        .all();
    }

    return Response.json({
      notes,
      totalPages: Math.max(1, Math.ceil(totals.count / limit)),
      currentPage: page,
      totalNotes: totals.count,
    });
  });
}

async function getNoteById(request: Request, value: string): Promise<Response> {
  const id = parseUuid(value);
  if (!id) throw new ApiError(400, "Invalid note ID");

  return await withDatabase(async (database) => {
    const note = await database.orm.public.Note
      .where({ id })
      .select(
        "id",
        "title",
        "course",
        "courseCode",
        "lecturer",
        "institution",
        "fileName",
        "fileSize",
        "fileType",
        "uploaderId",
        "tags",
        "description",
        "summary",
        "downloads",
        "verified",
        "rating",
        "ratingCount",
        "createdAt",
        "updatedAt",
      )
      .include("uploader", (uploader) =>
        uploader.select("id", "name", "institution", "level"),
      )
      .first();

    if (!note) throw new ApiError(404, "Note not found");
    return Response.json(note);
  });
}

async function uploadNote(request: Request): Promise<Response> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    throw new ApiError(413, "Upload exceeds Vercel's request size limit");
  }

  return await withDatabase(async (database) => {
    const user = await requireUser(request, database);
    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      throw new ApiError(400, "Expected a multipart form upload");
    }

    const files = form.getAll("file");
    const file = files[0];
    if (files.length !== 1 || !(file instanceof File)) {
      throw new ApiError(400, 'Upload exactly one file using the "file" field');
    }
    if (file.size === 0) {
      throw new ApiError(400, "Please upload a non-empty file");
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      throw new ApiError(413, "Files must be 4 MB or smaller on this deployment");
    }

    const originalName = file.name.replace(/\\/g, "/").split("/").pop()?.trim() ?? "";
    const extension = originalName.slice(originalName.lastIndexOf(".")).toLowerCase();
    if (!originalName || ![".pdf", ".doc", ".docx"].includes(extension)) {
      throw new ApiError(400, "Only PDF, DOC, and DOCX files are allowed");
    }
    if (originalName.length > 255) {
      throw new ApiError(400, "File name must be 255 characters or fewer");
    }

    const fileData = new Uint8Array(await file.arrayBuffer());
    if (!hasExpectedFileSignature(extension, fileData)) {
      throw new ApiError(400, "The file contents do not match its file type");
    }

    const title = stringField(form.get("title"));
    const course = stringField(form.get("course"));
    const institution = stringField(form.get("institution"));
    if (!title || !course || !institution) {
      throw new ApiError(400, "Please provide title, course, and institution");
    }
    if (title.length > 200 || course.length > 200 || institution.length > 200) {
      throw new ApiError(400, "Title, course, and institution must be 200 characters or fewer");
    }

    const note = await database.orm.public.Note
      .select(
        "id",
        "title",
        "course",
        "institution",
        "fileName",
        "verified",
      )
      .create({
        title,
        course,
        courseCode: stringOrNull(form.get("courseCode")),
        lecturer: stringOrNull(form.get("lecturer")),
        institution,
        fileUrl: null,
        fileData,
        fileName: originalName,
        fileSize: file.size,
        fileType: extension,
        uploaderId: user.id,
        tags: stringOrNull(form.get("tags")),
        description: stringOrNull(form.get("description")),
      });

    return Response.json(
      { message: "Note uploaded successfully", note },
      { status: 201 },
    );
  });
}

async function downloadNote(request: Request, value: string): Promise<Response> {
  const id = parseUuid(value);
  if (!id) throw new ApiError(400, "Invalid note ID");

  const outcome = await withDatabase(async (database) => {
    const user = await requireUser(request, database);
    return await database.transaction(async (transaction) => {
      const currentUser = await transaction.orm.public.User
        .where({ id: user.id })
        .select("id", "role", "isPremium", "weeklyDownloads", "lastDownloadReset")
        .first();
      if (!currentUser) {
        throw new ApiError(401, "User not found");
      }

      const note = await transaction.orm.public.Note
        .where({ id })
        .select("id", "fileData", "fileName", "fileType", "downloads")
        .first();
      if (!note) throw new ApiError(404, "Note not found");
      if (!note.fileData) throw new ApiError(404, "File is not stored for this note");

      const resetDue =
        Date.now() - currentUser.lastDownloadReset.getTime() >= WEEK_IN_MS;
      let weeklyDownloads = resetDue ? 0 : currentUser.weeklyDownloads;
      const isFreeUser = !currentUser.isPremium && currentUser.role !== "admin";
      if (isFreeUser && weeklyDownloads >= 3) {
        throw new ApiError(
          403,
          "Weekly download limit reached. Upgrade to premium for unlimited downloads.",
        );
      }

      if (resetDue) {
        await transaction.orm.public.User.where({ id: user.id }).update({
          weeklyDownloads: 0,
          lastDownloadReset: new Date(),
        });
      }
      await transaction.orm.public.Note.where({ id }).update({
        downloads: note.downloads + 1,
      });
      await transaction.orm.public.DownloadLog.create({
        userId: user.id,
        noteId: id,
        ipAddress: getClientIp(request),
      });

      if (isFreeUser) {
        weeklyDownloads += 1;
        await transaction.orm.public.User.where({ id: user.id }).update({
          weeklyDownloads,
        });
      }

      return {
        data: note.fileData,
        fileName: note.fileName,
        fileType: note.fileType,
      };
    });
  });

  return downloadResponse(
    outcome.data,
    outcome.fileName,
    getContentType(outcome.fileType),
  );
}

async function getMyNotes(request: Request): Promise<Response> {
  return await withDatabase(async (database) => {
    const user = await requireUser(request, database);
    const notes = await database.orm.public.Note
      .where({ uploaderId: user.id })
      .select(
        "id",
        "title",
        "course",
        "courseCode",
        "lecturer",
        "institution",
        "fileName",
        "fileSize",
        "fileType",
        "uploaderId",
        "tags",
        "description",
        "summary",
        "downloads",
        "verified",
        "rating",
        "ratingCount",
        "createdAt",
        "updatedAt",
      )
      .include("uploader", (uploader) =>
        uploader.select("id", "name", "institution"),
      )
      .orderBy((note) => note.createdAt.desc())
      .all();
    return Response.json(notes);
  });
}

async function deleteNote(request: Request, value: string): Promise<Response> {
  const id = parseUuid(value);
  if (!id) throw new ApiError(400, "Invalid note ID");

  return await withDatabase(async (database) => {
    const user = await requireUser(request, database);
    const note = await database.orm.public.Note
      .where({ id })
      .select("id", "uploaderId")
      .first();
    if (!note) throw new ApiError(404, "Note not found");
    if (note.uploaderId !== user.id && user.role !== "admin") {
      throw new ApiError(403, "Not authorized to delete this note");
    }

    await database.orm.public.Note.where({ id }).delete();
    return Response.json({ message: "Note deleted successfully" });
  });
}

async function generateSummary(request: Request, value: string): Promise<Response> {
  const id = parseUuid(value);
  if (!id) throw new ApiError(400, "Invalid note ID");

  return await withDatabase(async (database) => {
    const user = await requireUser(request, database);
    requirePremium(user);
    const note = await database.orm.public.Note
      .where({ id })
      .select("id", "title", "course", "institution", "summary")
      .first();
    if (!note) throw new ApiError(404, "Note not found");
    if (note.summary) return Response.json({ summary: note.summary });
    throw new ApiError(501, "Summary generation is not configured");
  });
}

async function getAdminDashboard(request: Request): Promise<Response> {
  return await withDatabase(async (database) => {
    const user = await requireUser(request, database);
    requireAdmin(user);

    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const [
      userTotals,
      activeUsers,
      premiumUsers,
      noteTotals,
      verifiedNotes,
      pendingNotes,
      downloadTotals,
      downloadsThisMonth,
      topNotes,
      institutionGroups,
      courseGroups,
      recentUploads,
      recentDates,
    ] = await Promise.all([
      database.orm.public.User.aggregate((aggregate) => ({
        count: aggregate.count(),
      })),
      database.orm.public.User
        .where({ isActive: true })
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      database.orm.public.User
        .where({ isPremium: true })
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      database.orm.public.Note.aggregate((aggregate) => ({
        count: aggregate.count(),
      })),
      database.orm.public.Note
        .where({ verified: true })
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      database.orm.public.Note
        .where({ verified: false })
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      database.orm.public.DownloadLog.aggregate((aggregate) => ({
        count: aggregate.count(),
      })),
      database.orm.public.DownloadLog
        .where((log) => log.downloadDate.gte(monthStart))
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      database.orm.public.Note
        .select(
          "id",
          "title",
          "course",
          "downloads",
          "verified",
          "createdAt",
        )
        .orderBy((note) => note.downloads.desc())
        .limit(5)
        .include("uploader", (uploader) => uploader.select("name"))
        .all(),
      database.orm.public.Note
        .groupBy("institution")
        .aggregate((aggregate) => ({ noteCount: aggregate.count() })),
      database.orm.public.Note
        .groupBy("course")
        .aggregate((aggregate) => ({ noteCount: aggregate.count() })),
      database.orm.public.Note
        .select("id", "title", "verified", "createdAt")
        .orderBy((note) => note.createdAt.desc())
        .limit(10)
        .include("uploader", (uploader) => uploader.select("name", "email"))
        .all(),
      database.orm.public.Note
        .where((note) => note.createdAt.gte(sixMonthsAgo))
        .select("createdAt")
        .all(),
    ]);

    const uploadsByMonth = new Map<string, number>();
    for (const row of recentDates) {
      const month = row.createdAt.toISOString().slice(0, 7);
      uploadsByMonth.set(month, (uploadsByMonth.get(month) ?? 0) + 1);
    }

    const topInstitutions = institutionGroups
      .map((row) => ({ institution: row.institution, noteCount: row.noteCount }))
      .sort((left, right) => right.noteCount - left.noteCount)
      .slice(0, 5);
    const topCourses = courseGroups
      .map((row) => ({ course: row.course, noteCount: row.noteCount }))
      .sort((left, right) => right.noteCount - left.noteCount)
      .slice(0, 5);
    const monthlyUploads = [...uploadsByMonth]
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([month, count]) => ({ month, count }));

    return Response.json({
      stats: {
        totalUsers: userTotals.count,
        activeUsers: activeUsers.count,
        premiumUsers: premiumUsers.count,
        totalNotes: noteTotals.count,
        verifiedNotes: verifiedNotes.count,
        pendingNotes: pendingNotes.count,
        totalDownloads: downloadTotals.count,
        downloadsThisMonth: downloadsThisMonth.count,
      },
      topNotes,
      topInstitutions,
      topCourses,
      recentUploads,
      monthlyUploads,
    });
  });
}

async function getAllUsers(request: Request): Promise<Response> {
  const searchParams = new URL(request.url).searchParams;
  const search = searchParams.get("search")?.trim();
  const page = parsePage(searchParams.get("page"), 1, 100_000);
  const limit = parsePage(searchParams.get("limit"), 20, 100);

  return await withDatabase(async (database) => {
    const admin = await requireUser(request, database);
    requireAdmin(admin);

    let filtered = database.orm.public.User;
    if (search) {
      const term = `%${search}%`;
      filtered = filtered.where((user) =>
        or(
          user.name.ilike(term),
          user.email.ilike(term),
          user.institution.ilike(term),
        ),
      );
    }

    const totals = await filtered.aggregate((aggregate) => ({
      count: aggregate.count(),
    }));
    const users = await filtered
      .select(
        "id",
        "name",
        "email",
        "institution",
        "level",
        "role",
        "isPremium",
        "subscriptionExpiry",
        "bio",
        "isActive",
        "weeklyDownloads",
        "lastDownloadReset",
        "createdAt",
        "updatedAt",
      )
      .orderBy((user) => user.createdAt.desc())
      .limit(limit)
      .offset((page - 1) * limit)
      .all();

    return Response.json({
      users,
      totalPages: Math.max(1, Math.ceil(totals.count / limit)),
      currentPage: page,
      totalUsers: totals.count,
    });
  });
}

async function updateUser(request: Request, value: string): Promise<Response> {
  const id = parseUuid(value);
  if (!id) throw new ApiError(400, "Invalid user ID");
  const body = await readJson(request);

  return await withDatabase(async (database) => {
    const admin = await requireUser(request, database);
    requireAdmin(admin);

    const update: {
      isActive?: boolean;
      isPremium?: boolean;
      role?: string;
      subscriptionExpiry?: Date | null;
    } = {};
    for (const field of ["isActive", "isPremium"] as const) {
      if (body[field] !== undefined) {
        if (typeof body[field] !== "boolean") {
          throw new ApiError(400, `${field} must be a boolean`);
        }
        update[field] = body[field];
      }
    }
    if (body.role !== undefined) {
      if (!["student", "admin", "guest"].includes(String(body.role))) {
        throw new ApiError(400, "Invalid user role");
      }
      update.role = String(body.role);
    }
    if (body.subscriptionExpiry !== undefined) {
      if (body.subscriptionExpiry === null || body.subscriptionExpiry === "") {
        update.subscriptionExpiry = null;
      } else if (typeof body.subscriptionExpiry === "string") {
        const expiry = new Date(body.subscriptionExpiry);
        if (Number.isNaN(expiry.getTime())) {
          throw new ApiError(400, "Invalid subscription expiry date");
        }
        update.subscriptionExpiry = expiry;
      } else {
        throw new ApiError(400, "Invalid subscription expiry date");
      }
    }
    if (Object.keys(update).length === 0) {
      throw new ApiError(400, "No user fields provided to update");
    }

    const updatedUser = await database.orm.public.User
      .where({ id })
      .select("id", "name", "email", "isActive", "isPremium", "role")
      .update(update);
    if (!updatedUser) throw new ApiError(404, "User not found");
    return Response.json({ message: "User updated successfully", user: updatedUser });
  });
}

async function deleteUser(request: Request, value: string): Promise<Response> {
  const id = parseUuid(value);
  if (!id) throw new ApiError(400, "Invalid user ID");

  return await withDatabase(async (database) => {
    const admin = await requireUser(request, database);
    requireAdmin(admin);
    const target = await database.orm.public.User
      .where({ id })
      .select("id", "role")
      .first();
    if (!target) throw new ApiError(404, "User not found");
    if (target.role === "admin") {
      throw new ApiError(403, "Cannot delete admin accounts");
    }

    await database.orm.public.User.where({ id }).delete();
    return Response.json({ message: "User deleted successfully" });
  });
}

async function verifyNote(request: Request, value: string): Promise<Response> {
  const id = parseUuid(value);
  if (!id) throw new ApiError(400, "Invalid note ID");
  const body = await readJson(request);
  if (typeof body.verified !== "boolean") {
    throw new ApiError(400, "verified must be a boolean");
  }

  return await withDatabase(async (database) => {
    const admin = await requireUser(request, database);
    requireAdmin(admin);
    const note = await database.orm.public.Note
      .where({ id })
      .select("id", "title", "verified")
      .update({ verified: body.verified });
    if (!note) throw new ApiError(404, "Note not found");
    return Response.json({
      message: `Note ${body.verified ? "verified" : "unverified"} successfully`,
      note,
    });
  });
}

async function dispatch(request: Request): Promise<Response> {
  const method = request.method.toUpperCase();
  const path = getPath(request);

  if (method === "GET" && path.length === 1 && path[0] === "health") {
    return Response.json({ status: "OK", message: "NoteSphere API is running" });
  }
  if (method === "POST" && path.join("/") === "auth/register") {
    return await register(request);
  }
  if (method === "POST" && path.join("/") === "auth/login") {
    return await login(request);
  }
  if (method === "GET" && path.join("/") === "auth/me") {
    return await getMe(request);
  }
  if (method === "PUT" && path.join("/") === "auth/profile") {
    return await updateProfile(request);
  }
  if (method === "GET" && path.join("/") === "notes") {
    return await getNotes(request);
  }
  if (method === "POST" && path.join("/") === "notes/upload") {
    return await uploadNote(request);
  }
  if (method === "GET" && path.join("/") === "notes/my-notes") {
    return await getMyNotes(request);
  }
  if (method === "GET" && path.length === 3 && path[0] === "notes" && path[1] === "download") {
    return await downloadNote(request, path[2]);
  }
  if (path.length === 3 && path[0] === "notes" && path[2] === "summary" && method === "POST") {
    return await generateSummary(request, path[1]);
  }
  if (path.length === 2 && path[0] === "notes" && method === "GET") {
    return await getNoteById(request, path[1]);
  }
  if (path.length === 2 && path[0] === "notes" && method === "DELETE") {
    return await deleteNote(request, path[1]);
  }
  if (method === "GET" && path.join("/") === "admin/dashboard") {
    return await getAdminDashboard(request);
  }
  if (method === "GET" && path.join("/") === "admin/users") {
    return await getAllUsers(request);
  }
  if (
    path.length === 3 &&
    path[0] === "admin" &&
    path[1] === "users" &&
    method === "PUT"
  ) {
    return await updateUser(request, path[2]);
  }
  if (
    path.length === 3 &&
    path[0] === "admin" &&
    path[1] === "users" &&
    method === "DELETE"
  ) {
    return await deleteUser(request, path[2]);
  }
  if (
    path.length === 4 &&
    path[0] === "admin" &&
    path[1] === "notes" &&
    path[3] === "verify" &&
    method === "PUT"
  ) {
    return await verifyNote(request, path[2]);
  }

  throw new ApiError(404, "Route not found");
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: Request): Promise<Response> {
  return handleApi(request, () => dispatch(request));
}

export function POST(request: Request): Promise<Response> {
  return handleApi(request, () => dispatch(request));
}

export function PUT(request: Request): Promise<Response> {
  return handleApi(request, () => dispatch(request));
}

export function DELETE(request: Request): Promise<Response> {
  return handleApi(request, () => dispatch(request));
}

export function OPTIONS(request: Request): Response {
  return optionsResponse(request);
}
