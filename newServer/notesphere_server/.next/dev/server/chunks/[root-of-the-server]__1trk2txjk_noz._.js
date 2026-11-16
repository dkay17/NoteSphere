module.exports = [
(()=>{"use strict";return[
"[project]/newServer/notesphere_server/src/app/api/[[...path]]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/orm-client.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/src/app/api/_lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/src/app/api/_lib/http.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/src/prisma/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const MAX_REQUEST_BYTES = 4_500_000;
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;
function getPath(request) {
    const parts = new URL(request.url).pathname.split("/").filter(Boolean);
    if (parts.shift() !== "api") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "Route not found");
    }
    try {
        return parts.map((part)=>decodeURIComponent(part));
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid URL path");
    }
}
function isUniqueViolation(error) {
    return typeof error === "object" && error !== null && "sqlState" in error && error.sqlState === "23505";
}
function getContentType(fileType) {
    switch(fileType.toLowerCase()){
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
function hasExpectedFileSignature(extension, data) {
    const startsWith = (...bytes)=>bytes.every((byte, index)=>data[index] === byte);
    switch(extension){
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
function getClientIp(request) {
    const forwarded = request.headers.get("x-forwarded-for");
    const address = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip");
    return address?.slice(0, 128) || null;
}
async function register(request) {
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJson"])(request);
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(body.name);
    const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(body.email)?.toLowerCase() ?? null;
    const password = typeof body.password === "string" ? body.password : null;
    const institution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(body.institution);
    const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(body.level);
    if (!name || !email || !password || !institution || !level) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Please provide all required fields");
    }
    if (name.length > 120 || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || institution.length > 200 || level.length > 80) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Please provide valid registration details");
    }
    if (password.length < 6 || password.length > 128) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Password must be between 6 and 128 characters");
    }
    const passwordHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(password);
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
            const existing = await database.orm.public.User.where({
                email
            }).select("id").first();
            if (existing) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](409, "User already exists with this email");
            }
            const user = await database.orm.public.User.select("id", "name", "email", "institution", "level", "role", "isPremium").create({
                name,
                email,
                password: passwordHash,
                institution,
                level,
                role: "student"
            });
            return Response.json({
                ...user,
                token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createToken"])(user.id)
            }, {
                status: 201
            });
        });
    } catch (error) {
        if (isUniqueViolation(error)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](409, "User already exists with this email");
        }
        throw error;
    }
}
async function login(request) {
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJson"])(request);
    const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(body.email)?.toLowerCase() ?? null;
    const password = typeof body.password === "string" ? body.password : null;
    if (!email || !password || password.length > 128) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Please provide a valid email and password");
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await database.orm.public.User.where({
            email
        }).select("id", "name", "email", "password", "institution", "level", "role", "isPremium", "subscriptionExpiry", "bio", "isActive", "weeklyDownloads", "lastDownloadReset").first();
        const passwordMatches = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyLoginPassword"])(password, user?.password);
        if (!user || !passwordMatches) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Invalid credentials");
        }
        if (!user.isActive) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Account is deactivated. Contact admin.");
        }
        if (Date.now() - user.lastDownloadReset.getTime() >= WEEK_IN_MS) {
            await database.orm.public.User.where({
                id: user.id
            }).update({
                weeklyDownloads: 0,
                lastDownloadReset: new Date()
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
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createToken"])(user.id)
        });
    });
}
async function getMe(request) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        const profile = await database.orm.public.User.where({
            id: user.id
        }).select("id", "name", "email", "institution", "level", "role", "isPremium", "subscriptionExpiry", "bio", "isActive", "weeklyDownloads", "lastDownloadReset", "createdAt", "updatedAt").include("notes", (notes)=>notes.select("id", "title", "course", "downloads", "verified", "createdAt")).first();
        if (!profile) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "User not found");
        }
        return Response.json(profile);
    });
}
async function updateProfile(request) {
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJson"])(request);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        const update = {};
        for (const field of [
            "name",
            "institution",
            "level"
        ]){
            if (body[field] !== undefined) {
                const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(body[field]);
                if (!value || value.length > (field === "name" ? 120 : 200)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, `Invalid ${field}`);
                }
                update[field] = value;
            }
        }
        if (body.bio !== undefined) {
            if (body.bio !== null && typeof body.bio !== "string") {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid bio");
            }
            update.bio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringOrNull"])(body.bio);
        }
        if (Object.keys(update).length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "No profile fields provided to update");
        }
        const updatedUser = await database.orm.public.User.where({
            id: user.id
        }).select("id", "name", "email", "institution", "level", "role", "bio", "isPremium", "subscriptionExpiry").update(update);
        if (!updatedUser) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "User not found");
        }
        return Response.json(updatedUser);
    });
}
async function getNotes(request) {
    const searchParams = new URL(request.url).searchParams;
    const search = searchParams.get("search")?.trim();
    const institution = searchParams.get("institution")?.trim();
    const course = searchParams.get("course")?.trim();
    const lecturer = searchParams.get("lecturer")?.trim();
    const tags = searchParams.get("tags")?.trim();
    const sortBy = searchParams.get("sortBy") ?? "createdAt";
    const direction = searchParams.get("order")?.toLowerCase() === "asc" ? "asc" : "desc";
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePage"])(searchParams.get("page"), 1, 100_000);
    const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePage"])(searchParams.get("limit"), 20, 100);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        let filtered = database.orm.public.Note;
        if (search) {
            const term = `%${search}%`;
            filtered = filtered.where((note)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["or"])(note.title.ilike(term), note.course.ilike(term), note.courseCode.ilike(term), note.description.ilike(term)));
        }
        if (institution) {
            filtered = filtered.where((note)=>note.institution.ilike(`%${institution}%`));
        }
        if (course) {
            filtered = filtered.where((note)=>note.course.ilike(`%${course}%`));
        }
        if (lecturer) {
            filtered = filtered.where((note)=>note.lecturer.ilike(`%${lecturer}%`));
        }
        if (tags) {
            filtered = filtered.where((note)=>note.tags.ilike(`%${tags}%`));
        }
        const totals = await filtered.aggregate((aggregate)=>({
                count: aggregate.count()
            }));
        const selection = filtered.select("id", "title", "course", "courseCode", "lecturer", "institution", "fileName", "fileSize", "fileType", "uploaderId", "tags", "description", "summary", "downloads", "verified", "rating", "ratingCount", "createdAt", "updatedAt").include("uploader", (uploader)=>uploader.select("id", "name", "institution"));
        let notes;
        if (sortBy === "downloads") {
            notes = await (direction === "asc" ? selection.orderBy((note)=>note.downloads.asc()) : selection.orderBy((note)=>note.downloads.desc())).limit(limit).offset((page - 1) * limit).all();
        } else if (sortBy === "rating") {
            notes = await (direction === "asc" ? selection.orderBy((note)=>note.rating.asc()) : selection.orderBy((note)=>note.rating.desc())).limit(limit).offset((page - 1) * limit).all();
        } else {
            notes = await (direction === "asc" ? selection.orderBy((note)=>note.createdAt.asc()) : selection.orderBy((note)=>note.createdAt.desc())).limit(limit).offset((page - 1) * limit).all();
        }
        return Response.json({
            notes,
            totalPages: Math.max(1, Math.ceil(totals.count / limit)),
            currentPage: page,
            totalNotes: totals.count
        });
    });
}
async function getNoteById(request, value) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUuid"])(value);
    if (!id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid note ID");
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const note = await database.orm.public.Note.where({
            id
        }).select("id", "title", "course", "courseCode", "lecturer", "institution", "fileName", "fileSize", "fileType", "uploaderId", "tags", "description", "summary", "downloads", "verified", "rating", "ratingCount", "createdAt", "updatedAt").include("uploader", (uploader)=>uploader.select("id", "name", "institution", "level")).first();
        if (!note) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "Note not found");
        return Response.json(note);
    });
}
async function uploadNote(request) {
    const contentLength = Number(request.headers.get("content-length"));
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](413, "Upload exceeds Vercel's request size limit");
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        let form;
        try {
            form = await request.formData();
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Expected a multipart form upload");
        }
        const files = form.getAll("file");
        const file = files[0];
        if (files.length !== 1 || !(file instanceof File)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, 'Upload exactly one file using the "file" field');
        }
        if (file.size === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Please upload a non-empty file");
        }
        if (file.size > MAX_UPLOAD_BYTES) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](413, "Files must be 4 MB or smaller on this deployment");
        }
        const originalName = file.name.replace(/\\/g, "/").split("/").pop()?.trim() ?? "";
        const extension = originalName.slice(originalName.lastIndexOf(".")).toLowerCase();
        if (!originalName || ![
            ".pdf",
            ".doc",
            ".docx"
        ].includes(extension)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Only PDF, DOC, and DOCX files are allowed");
        }
        if (originalName.length > 255) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "File name must be 255 characters or fewer");
        }
        const fileData = new Uint8Array(await file.arrayBuffer());
        if (!hasExpectedFileSignature(extension, fileData)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "The file contents do not match its file type");
        }
        const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(form.get("title"));
        const course = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(form.get("course"));
        const institution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringField"])(form.get("institution"));
        if (!title || !course || !institution) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Please provide title, course, and institution");
        }
        if (title.length > 200 || course.length > 200 || institution.length > 200) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Title, course, and institution must be 200 characters or fewer");
        }
        const note = await database.orm.public.Note.select("id", "title", "course", "institution", "fileName", "verified").create({
            title,
            course,
            courseCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringOrNull"])(form.get("courseCode")),
            lecturer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringOrNull"])(form.get("lecturer")),
            institution,
            fileUrl: null,
            fileData,
            fileName: originalName,
            fileSize: file.size,
            fileType: extension,
            uploaderId: user.id,
            tags: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringOrNull"])(form.get("tags")),
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringOrNull"])(form.get("description"))
        });
        return Response.json({
            message: "Note uploaded successfully",
            note
        }, {
            status: 201
        });
    });
}
async function downloadNote(request, value) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUuid"])(value);
    if (!id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid note ID");
    const outcome = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        return await database.transaction(async (transaction)=>{
            const currentUser = await transaction.orm.public.User.where({
                id: user.id
            }).select("id", "role", "isPremium", "weeklyDownloads", "lastDownloadReset").first();
            if (!currentUser) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "User not found");
            }
            const note = await transaction.orm.public.Note.where({
                id
            }).select("id", "fileData", "fileName", "fileType", "downloads").first();
            if (!note) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "Note not found");
            if (!note.fileData) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "File is not stored for this note");
            const resetDue = Date.now() - currentUser.lastDownloadReset.getTime() >= WEEK_IN_MS;
            let weeklyDownloads = resetDue ? 0 : currentUser.weeklyDownloads;
            const isFreeUser = !currentUser.isPremium && currentUser.role !== "admin";
            if (isFreeUser && weeklyDownloads >= 3) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](403, "Weekly download limit reached. Upgrade to premium for unlimited downloads.");
            }
            if (resetDue) {
                await transaction.orm.public.User.where({
                    id: user.id
                }).update({
                    weeklyDownloads: 0,
                    lastDownloadReset: new Date()
                });
            }
            await transaction.orm.public.Note.where({
                id
            }).update({
                downloads: note.downloads + 1
            });
            await transaction.orm.public.DownloadLog.create({
                userId: user.id,
                noteId: id,
                ipAddress: getClientIp(request)
            });
            if (isFreeUser) {
                weeklyDownloads += 1;
                await transaction.orm.public.User.where({
                    id: user.id
                }).update({
                    weeklyDownloads
                });
            }
            return {
                data: note.fileData,
                fileName: note.fileName,
                fileType: note.fileType
            };
        });
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["downloadResponse"])(outcome.data, outcome.fileName, getContentType(outcome.fileType));
}
async function getMyNotes(request) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        const notes = await database.orm.public.Note.where({
            uploaderId: user.id
        }).select("id", "title", "course", "courseCode", "lecturer", "institution", "fileName", "fileSize", "fileType", "uploaderId", "tags", "description", "summary", "downloads", "verified", "rating", "ratingCount", "createdAt", "updatedAt").include("uploader", (uploader)=>uploader.select("id", "name", "institution")).orderBy((note)=>note.createdAt.desc()).all();
        return Response.json(notes);
    });
}
async function deleteNote(request, value) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUuid"])(value);
    if (!id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid note ID");
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        const note = await database.orm.public.Note.where({
            id
        }).select("id", "uploaderId").first();
        if (!note) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "Note not found");
        if (note.uploaderId !== user.id && user.role !== "admin") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](403, "Not authorized to delete this note");
        }
        await database.orm.public.Note.where({
            id
        }).delete();
        return Response.json({
            message: "Note deleted successfully"
        });
    });
}
async function generateSummary(request, value) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUuid"])(value);
    if (!id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid note ID");
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePremium"])(user);
        const note = await database.orm.public.Note.where({
            id
        }).select("id", "title", "course", "institution", "summary").first();
        if (!note) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "Note not found");
        if (note.summary) return Response.json({
            summary: note.summary
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](501, "Summary generation is not configured");
    });
}
async function getAdminDashboard(request) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAdmin"])(user);
        const monthStart = new Date();
        monthStart.setDate(1);
        monthStart.setHours(0, 0, 0, 0);
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const [userTotals, activeUsers, premiumUsers, noteTotals, verifiedNotes, pendingNotes, downloadTotals, downloadsThisMonth, topNotes, institutionGroups, courseGroups, recentUploads, recentDates] = await Promise.all([
            database.orm.public.User.aggregate((aggregate)=>({
                    count: aggregate.count()
                })),
            database.orm.public.User.where({
                isActive: true
            }).aggregate((aggregate)=>({
                    count: aggregate.count()
                })),
            database.orm.public.User.where({
                isPremium: true
            }).aggregate((aggregate)=>({
                    count: aggregate.count()
                })),
            database.orm.public.Note.aggregate((aggregate)=>({
                    count: aggregate.count()
                })),
            database.orm.public.Note.where({
                verified: true
            }).aggregate((aggregate)=>({
                    count: aggregate.count()
                })),
            database.orm.public.Note.where({
                verified: false
            }).aggregate((aggregate)=>({
                    count: aggregate.count()
                })),
            database.orm.public.DownloadLog.aggregate((aggregate)=>({
                    count: aggregate.count()
                })),
            database.orm.public.DownloadLog.where((log)=>log.downloadDate.gte(monthStart)).aggregate((aggregate)=>({
                    count: aggregate.count()
                })),
            database.orm.public.Note.select("id", "title", "course", "downloads", "verified", "createdAt").orderBy((note)=>note.downloads.desc()).limit(5).include("uploader", (uploader)=>uploader.select("name")).all(),
            database.orm.public.Note.groupBy("institution").aggregate((aggregate)=>({
                    noteCount: aggregate.count()
                })),
            database.orm.public.Note.groupBy("course").aggregate((aggregate)=>({
                    noteCount: aggregate.count()
                })),
            database.orm.public.Note.select("id", "title", "verified", "createdAt").orderBy((note)=>note.createdAt.desc()).limit(10).include("uploader", (uploader)=>uploader.select("name", "email")).all(),
            database.orm.public.Note.where((note)=>note.createdAt.gte(sixMonthsAgo)).select("createdAt").all()
        ]);
        const uploadsByMonth = new Map();
        for (const row of recentDates){
            const month = row.createdAt.toISOString().slice(0, 7);
            uploadsByMonth.set(month, (uploadsByMonth.get(month) ?? 0) + 1);
        }
        const topInstitutions = institutionGroups.map((row)=>({
                institution: row.institution,
                noteCount: row.noteCount
            })).sort((left, right)=>right.noteCount - left.noteCount).slice(0, 5);
        const topCourses = courseGroups.map((row)=>({
                course: row.course,
                noteCount: row.noteCount
            })).sort((left, right)=>right.noteCount - left.noteCount).slice(0, 5);
        const monthlyUploads = [
            ...uploadsByMonth
        ].sort(([left], [right])=>left.localeCompare(right)).map(([month, count])=>({
                month,
                count
            }));
        return Response.json({
            stats: {
                totalUsers: userTotals.count,
                activeUsers: activeUsers.count,
                premiumUsers: premiumUsers.count,
                totalNotes: noteTotals.count,
                verifiedNotes: verifiedNotes.count,
                pendingNotes: pendingNotes.count,
                totalDownloads: downloadTotals.count,
                downloadsThisMonth: downloadsThisMonth.count
            },
            topNotes,
            topInstitutions,
            topCourses,
            recentUploads,
            monthlyUploads
        });
    });
}
async function getAllUsers(request) {
    const searchParams = new URL(request.url).searchParams;
    const search = searchParams.get("search")?.trim();
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePage"])(searchParams.get("page"), 1, 100_000);
    const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePage"])(searchParams.get("limit"), 20, 100);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAdmin"])(admin);
        let filtered = database.orm.public.User;
        if (search) {
            const term = `%${search}%`;
            filtered = filtered.where((user)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["or"])(user.name.ilike(term), user.email.ilike(term), user.institution.ilike(term)));
        }
        const totals = await filtered.aggregate((aggregate)=>({
                count: aggregate.count()
            }));
        const users = await filtered.select("id", "name", "email", "institution", "level", "role", "isPremium", "subscriptionExpiry", "bio", "isActive", "weeklyDownloads", "lastDownloadReset", "createdAt", "updatedAt").orderBy((user)=>user.createdAt.desc()).limit(limit).offset((page - 1) * limit).all();
        return Response.json({
            users,
            totalPages: Math.max(1, Math.ceil(totals.count / limit)),
            currentPage: page,
            totalUsers: totals.count
        });
    });
}
async function updateUser(request, value) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUuid"])(value);
    if (!id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid user ID");
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJson"])(request);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAdmin"])(admin);
        const update = {};
        for (const field of [
            "isActive",
            "isPremium"
        ]){
            if (body[field] !== undefined) {
                if (typeof body[field] !== "boolean") {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, `${field} must be a boolean`);
                }
                update[field] = body[field];
            }
        }
        if (body.role !== undefined) {
            if (![
                "student",
                "admin",
                "guest"
            ].includes(String(body.role))) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid user role");
            }
            update.role = String(body.role);
        }
        if (body.subscriptionExpiry !== undefined) {
            if (body.subscriptionExpiry === null || body.subscriptionExpiry === "") {
                update.subscriptionExpiry = null;
            } else if (typeof body.subscriptionExpiry === "string") {
                const expiry = new Date(body.subscriptionExpiry);
                if (Number.isNaN(expiry.getTime())) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid subscription expiry date");
                }
                update.subscriptionExpiry = expiry;
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid subscription expiry date");
            }
        }
        if (Object.keys(update).length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "No user fields provided to update");
        }
        const updatedUser = await database.orm.public.User.where({
            id
        }).select("id", "name", "email", "isActive", "isPremium", "role").update(update);
        if (!updatedUser) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "User not found");
        return Response.json({
            message: "User updated successfully",
            user: updatedUser
        });
    });
}
async function deleteUser(request, value) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUuid"])(value);
    if (!id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid user ID");
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAdmin"])(admin);
        const target = await database.orm.public.User.where({
            id
        }).select("id", "role").first();
        if (!target) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "User not found");
        if (target.role === "admin") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](403, "Cannot delete admin accounts");
        }
        await database.orm.public.User.where({
            id
        }).delete();
        return Response.json({
            message: "User deleted successfully"
        });
    });
}
async function verifyNote(request, value) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUuid"])(value);
    if (!id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "Invalid note ID");
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJson"])(request);
    if (typeof body.verified !== "boolean") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](400, "verified must be a boolean");
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDatabase"])(async (database)=>{
        const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])(request, database);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAdmin"])(admin);
        const note = await database.orm.public.Note.where({
            id
        }).select("id", "title", "verified").update({
            verified: body.verified
        });
        if (!note) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "Note not found");
        return Response.json({
            message: `Note ${body.verified ? "verified" : "unverified"} successfully`,
            note
        });
    });
}
async function dispatch(request) {
    const method = request.method.toUpperCase();
    const path = getPath(request);
    if (method === "GET" && path.length === 1 && path[0] === "health") {
        return Response.json({
            status: "OK",
            message: "NoteSphere API is running"
        });
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
    if (path.length === 3 && path[0] === "admin" && path[1] === "users" && method === "PUT") {
        return await updateUser(request, path[2]);
    }
    if (path.length === 3 && path[0] === "admin" && path[1] === "users" && method === "DELETE") {
        return await deleteUser(request, path[2]);
    }
    if (path.length === 4 && path[0] === "admin" && path[1] === "notes" && path[3] === "verify" && method === "PUT") {
        return await verifyNote(request, path[2]);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](404, "Route not found");
}
const runtime = "nodejs";
const dynamic = "force-dynamic";
function GET(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApi"])(request, ()=>dispatch(request));
}
function POST(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApi"])(request, ()=>dispatch(request));
}
function PUT(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApi"])(request, ()=>dispatch(request));
}
function DELETE(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApi"])(request, ()=>dispatch(request));
}
function OPTIONS(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionsResponse"])(request);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/newServer/notesphere_server/src/app/api/_lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createToken",
    ()=>createToken,
    "hashPassword",
    ()=>hashPassword,
    "requireAdmin",
    ()=>requireAdmin,
    "requirePremium",
    ()=>requirePremium,
    "requireUser",
    ()=>requireUser,
    "verifyLoginPassword",
    ()=>verifyLoginPassword,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/src/app/api/_lib/http.ts [app-route] (ecmascript)");
;
;
const PASSWORD_COST = 16_384;
const PASSWORD_BLOCK_SIZE = 8;
const PASSWORD_PARALLELISM = 1;
const PASSWORD_KEY_LENGTH = 64;
const TOKEN_LIFETIME_SECONDS = 30 * 24 * 60 * 60;
const dummyPasswordHash = [
    "scrypt",
    PASSWORD_COST,
    PASSWORD_BLOCK_SIZE,
    PASSWORD_PARALLELISM,
    Buffer.alloc(16).toString("base64url"),
    Buffer.alloc(PASSWORD_KEY_LENGTH).toString("base64url")
].join("$");
function jwtSecret() {
    const secret = process.env.JWT_SECRET;
    if (!secret || Buffer.byteLength(secret) < 32) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](500, "JWT_SECRET must be set to at least 32 characters");
    }
    return secret;
}
function derivePasswordKey(password, salt) {
    return new Promise((resolve, reject)=>{
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scrypt"])(password, salt, PASSWORD_KEY_LENGTH, {
            N: PASSWORD_COST,
            r: PASSWORD_BLOCK_SIZE,
            p: PASSWORD_PARALLELISM,
            maxmem: 64 * 1024 * 1024
        }, (error, key)=>{
            if (error) {
                reject(error);
                return;
            }
            resolve(key);
        });
    });
}
async function hashPassword(password) {
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(16);
    const key = await derivePasswordKey(password, salt);
    return [
        "scrypt",
        PASSWORD_COST,
        PASSWORD_BLOCK_SIZE,
        PASSWORD_PARALLELISM,
        salt.toString("base64url"),
        key.toString("base64url")
    ].join("$");
}
async function verifyPassword(password, encoded) {
    const parts = encoded.split("$");
    if (parts.length !== 6 || parts[0] !== "scrypt" || parts[1] !== String(PASSWORD_COST) || parts[2] !== String(PASSWORD_BLOCK_SIZE) || parts[3] !== String(PASSWORD_PARALLELISM)) {
        await derivePasswordKey(password, Buffer.alloc(16));
        return false;
    }
    let salt;
    let expected;
    try {
        salt = Buffer.from(parts[4], "base64url");
        expected = Buffer.from(parts[5], "base64url");
    } catch  {
        await derivePasswordKey(password, Buffer.alloc(16));
        return false;
    }
    if (salt.length !== 16 || expected.length !== PASSWORD_KEY_LENGTH) {
        await derivePasswordKey(password, Buffer.alloc(16));
        return false;
    }
    const actual = await derivePasswordKey(password, salt);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(actual, expected);
}
function createToken(id) {
    const now = Math.floor(Date.now() / 1000);
    const header = Buffer.from(JSON.stringify({
        alg: "HS256",
        typ: "JWT"
    })).toString("base64url");
    const payload = Buffer.from(JSON.stringify({
        id,
        iat: now,
        exp: now + TOKEN_LIFETIME_SECONDS
    })).toString("base64url");
    const signingInput = `${header}.${payload}`;
    const signature = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"])("sha256", jwtSecret()).update(signingInput).digest("base64url");
    return `${signingInput}.${signature}`;
}
function readToken(token) {
    const parts = token.split(".");
    if (parts.length !== 3) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Not authorized, token failed");
    }
    let header;
    let claims;
    let actualSignature;
    try {
        header = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
        claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
        actualSignature = Buffer.from(parts[2], "base64url");
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Not authorized, token failed");
    }
    if (typeof header !== "object" || header === null || !("alg" in header) || header.alg !== "HS256") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Not authorized, token failed");
    }
    const expectedSignature = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"])("sha256", jwtSecret()).update(`${parts[0]}.${parts[1]}`).digest();
    if (actualSignature.length !== expectedSignature.length || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(actualSignature, expectedSignature)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Not authorized, token failed");
    }
    if (typeof claims !== "object" || claims === null || !("id" in claims) || !("iat" in claims) || !("exp" in claims) || typeof claims.id !== "string" || typeof claims.iat !== "number" || typeof claims.exp !== "number" || claims.exp <= Math.floor(Date.now() / 1000) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUuid"])(claims.id)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Not authorized, token failed");
    }
    return {
        id: claims.id,
        iat: claims.iat,
        exp: claims.exp
    };
}
async function requireUser(request, database) {
    const authorization = request.headers.get("authorization");
    if (!authorization?.startsWith("Bearer ")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Not authorized, no token");
    }
    const claims = readToken(authorization.slice("Bearer ".length).trim());
    const user = await database.orm.public.User.where({
        id: claims.id
    }).select("id", "name", "email", "role", "isPremium", "isActive", "weeklyDownloads", "lastDownloadReset").first();
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "User not found");
    }
    if (!user.isActive) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](401, "Account is deactivated");
    }
    return user;
}
function requireAdmin(user) {
    if (user.role !== "admin") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](403, "Access denied. Admin only.");
    }
}
function requirePremium(user) {
    if (!user.isPremium && user.role !== "admin") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$app$2f$api$2f$_lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](403, "Premium subscription required");
    }
}
async function verifyLoginPassword(password, storedHash) {
    return await verifyPassword(password, storedHash ?? dummyPasswordHash);
}
}),
"[project]/newServer/notesphere_server/src/app/api/_lib/http.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "downloadResponse",
    ()=>downloadResponse,
    "handleApi",
    ()=>handleApi,
    "optionsResponse",
    ()=>optionsResponse,
    "parsePage",
    ()=>parsePage,
    "parseUuid",
    ()=>parseUuid,
    "readJson",
    ()=>readJson,
    "stringField",
    ()=>stringField,
    "stringOrNull",
    ()=>stringOrNull
]);
class ApiError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
    }
}
function addCors(request, response) {
    const headers = new Headers(response.headers);
    const origin = request.headers.get("origin");
    const allowedOrigins = new Set([
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        ...(process.env.CLIENT_URL ?? "").split(",").map((value)=>value.trim()).filter(Boolean)
    ]);
    headers.set("Vary", "Origin");
    if (origin && allowedOrigins.has(origin)) {
        headers.set("Access-Control-Allow-Origin", origin);
        headers.set("Access-Control-Allow-Credentials", "true");
    }
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept");
    headers.set("Access-Control-Expose-Headers", "Content-Disposition");
    headers.set("Access-Control-Max-Age", "86400");
    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
    });
}
async function handleApi(request, action) {
    try {
        return addCors(request, await action());
    } catch (error) {
        const status = error instanceof ApiError ? error.status : 500;
        if (status >= 500) {
            console.error("API request failed:", error);
        }
        const message = error instanceof ApiError ? error.message : "Internal server error";
        return addCors(request, Response.json({
            message
        }, {
            status
        }));
    }
}
function optionsResponse(request) {
    return addCors(request, new Response(null, {
        status: 204
    }));
}
async function readJson(request) {
    const contentLength = Number(request.headers.get("content-length"));
    if (Number.isFinite(contentLength) && contentLength > 1024 * 1024) {
        throw new ApiError(413, "Request body is too large");
    }
    let value;
    try {
        value = await request.json();
    } catch  {
        throw new ApiError(400, "Invalid JSON body");
    }
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        throw new ApiError(400, "Request body must be a JSON object");
    }
    return value;
}
function parseUuid(value) {
    return value && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value) ? value : null;
}
function parsePage(value, fallback, maximum) {
    if (!value || !/^\d+$/.test(value)) return fallback;
    const parsed = Number(value);
    return Number.isSafeInteger(parsed) && parsed > 0 ? Math.min(parsed, maximum) : fallback;
}
function stringField(value) {
    return typeof value === "string" ? value.trim() : null;
}
function stringOrNull(value) {
    if (value === undefined || value === null) return null;
    return typeof value === "string" ? value.trim() || null : null;
}
function downloadResponse(data, fileName, mimeType) {
    const safeName = fileName.replace(/[\r\n"\\/]/g, "_");
    const asciiName = safeName.replace(/[^\x20-\x7e]/g, "_");
    const body = new Uint8Array(data.byteLength);
    body.set(data);
    return new Response(body.buffer, {
        headers: {
            "Content-Type": mimeType,
            "Content-Length": String(body.byteLength),
            "Content-Disposition": `attachment; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(safeName)}`,
            "Cache-Control": "private, no-store"
        }
    });
}
}),
"[project]/newServer/notesphere_server/src/prisma/contract.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contract",
    ()=>contract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$contract$2d$builder$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/contract-builder.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__m__as__now$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export m as now>");
;
const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$contract$2d$builder$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineContract"])({}, ({ field, model, rel, gen, type })=>{
    // USER MODEL
    const User = model('User', {
        fields: {
            id: field.column(type.Uuid()).id().onCreate(gen.uuid(7)),
            name: field.column(type.String()),
            email: field.column(type.String()).unique(),
            password: field.column(type.String()),
            institution: field.column(type.String()),
            level: field.column(type.String()),
            role: field.column(type.String()).default('student'),
            isPremium: field.column(type.Boolean()).default(false),
            subscriptionExpiry: field.column(type.DateTime()).optional(),
            bio: field.column(type.String()).optional(),
            isActive: field.column(type.Boolean()).default(true),
            weeklyDownloads: field.column(type.Int()).default(0),
            lastDownloadReset: field.column(type.DateTime()).default((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__m__as__now$3e$__["now"])()).onCreate(gen.now()),
            createdAt: field.column(type.DateTime()).default((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__m__as__now$3e$__["now"])()).onCreate(gen.now()),
            updatedAt: field.column(type.temporal.UpdatedAt())
        }
    });
    // NOTE MODEL
    const Note = model('Note', {
        fields: {
            id: field.column(type.Uuid()).id().onCreate(gen.uuid(7)),
            title: field.column(type.String()),
            course: field.column(type.String()),
            courseCode: field.column(type.String()).optional(),
            lecturer: field.column(type.String()).optional(),
            institution: field.column(type.String()),
            fileUrl: field.column(type.String()).optional(),
            fileData: field.column(type.Bytes()).optional(),
            fileName: field.column(type.String()),
            fileSize: field.column(type.Int()),
            fileType: field.column(type.String()),
            uploaderId: field.column(type.Uuid()),
            tags: field.column(type.String()).optional(),
            description: field.column(type.String()).optional(),
            summary: field.column(type.String()).optional(),
            downloads: field.column(type.Int()).default(0),
            verified: field.column(type.Boolean()).default(false),
            rating: field.column(type.Float()).default(0),
            ratingCount: field.column(type.Int()).default(0),
            createdAt: field.column(type.DateTime()).default((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__m__as__now$3e$__["now"])()).onCreate(gen.now()),
            updatedAt: field.column(type.temporal.UpdatedAt())
        }
    });
    // DOWNLOAD LOG MODEL
    const DownloadLog = model('DownloadLog', {
        fields: {
            id: field.column(type.Uuid()).id().onCreate(gen.uuid(7)),
            userId: field.column(type.Uuid()),
            noteId: field.column(type.Uuid()),
            downloadDate: field.column(type.DateTime()).default((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__m__as__now$3e$__["now"])()).onCreate(gen.now()),
            ipAddress: field.column(type.String()).optional(),
            createdAt: field.column(type.DateTime()).default((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__m__as__now$3e$__["now"])()).onCreate(gen.now()),
            updatedAt: field.column(type.temporal.UpdatedAt())
        }
    });
    return {
        models: {
            User: User.relations({
                notes: rel.hasMany(Note, {
                    by: 'uploaderId'
                }),
                downloadLogs: rel.hasMany(DownloadLog, {
                    by: 'userId'
                })
            }).sql(({ cols, constraints })=>({
                    table: 'Users',
                    indexes: [
                        constraints.index([
                            cols.institution
                        ]),
                        constraints.index([
                            cols.role
                        ])
                    ]
                })),
            Note: Note.relations({
                uploader: rel.belongsTo(User, {
                    from: 'uploaderId',
                    to: 'id'
                }).sql({
                    fk: {
                        onDelete: 'cascade'
                    }
                }),
                downloadLogs: rel.hasMany(DownloadLog, {
                    by: 'noteId'
                })
            }).sql(({ cols, constraints })=>({
                    table: 'Notes',
                    indexes: [
                        constraints.index([
                            cols.institution
                        ]),
                        constraints.index([
                            cols.uploaderId
                        ]),
                        constraints.index([
                            cols.createdAt
                        ])
                    ]
                })),
            DownloadLog: DownloadLog.relations({
                user: rel.belongsTo(User, {
                    from: 'userId',
                    to: 'id'
                }).sql({
                    fk: {
                        onDelete: 'cascade'
                    }
                }),
                note: rel.belongsTo(Note, {
                    from: 'noteId',
                    to: 'id'
                }).sql({
                    fk: {
                        onDelete: 'cascade'
                    }
                })
            }).sql(({ cols, constraints })=>({
                    table: 'DownloadLogs',
                    indexes: [
                        constraints.index([
                            cols.userId
                        ]),
                        constraints.index([
                            cols.noteId
                        ]),
                        constraints.index([
                            cols.downloadDate
                        ])
                    ]
                }))
        }
    };
});
}),
"[project]/newServer/notesphere_server/src/prisma/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "postgres",
    ()=>postgres,
    "withDatabase",
    ()=>withDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$_addDisposableResource__as__$5f3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript) <export __addDisposableResource as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$_disposeResources__as__$5f3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript) <export __disposeResources as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$serverless$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/serverless.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$global$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/global.esm.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$contract$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/src/prisma/contract.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$serverless$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$serverless$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const postgres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$serverless$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
    contract: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$src$2f$prisma$2f$contract$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contract"]
});
async function withDatabase(operation) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const url = process.env.DATABASE_URL;
        if (!url) {
            throw new Error("DATABASE_URL must be configured");
        }
        const database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$_addDisposableResource__as__$5f3e$__["_"])(env, await postgres.connect({
            url
        }), true);
        return await operation(database);
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$_disposeResources__as__$5f3e$__["_"])(env);
        if (result) await result;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1trk2txjk_noz._.js.map