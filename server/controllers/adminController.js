const { getDb } = require('../config/database');

const parseId = (value) => {
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
};

const parsePage = (value, fallback, maximum) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) && parsed > 0
    ? Math.min(parsed, maximum)
    : fallback;
};

const getDashboard = async (req, res) => {
  try {
    const db = await getDb();
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const sixMonthsAgoInstant = Temporal.Instant.from(sixMonthsAgo.toISOString());

    const [
      userTotals,
      activeTotals,
      premiumTotals,
      noteTotals,
      verifiedTotals,
      pendingTotals,
      downloadTotals,
      monthlyDownloadTotals,
      topNotes,
      institutionGroups,
      courseGroups,
      recentUploads,
      recentNoteDates,
    ] = await Promise.all([
      db.orm.public.User.aggregate((aggregate) => ({ count: aggregate.count() })),
      db.orm.public.User.where({ isActive: true })
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      db.orm.public.User.where({ isPremium: true })
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      db.orm.public.Note.aggregate((aggregate) => ({ count: aggregate.count() })),
      db.orm.public.Note.where({ verified: true })
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      db.orm.public.Note.where({ verified: false })
        .aggregate((aggregate) => ({ count: aggregate.count() })),
      db.orm.public.DownloadLog.aggregate((aggregate) => ({ count: aggregate.count() })),
      db.orm.public.DownloadLog.where((log) =>
        log.downloadDate.gte(Temporal.Instant.from(startOfMonth.toISOString())),
      ).aggregate((aggregate) => ({ count: aggregate.count() })),
      db.orm.public.Note
        .orderBy((note) => note.downloads.desc())
        .limit(5)
        .include('uploader', (uploader) => uploader.select('name'))
        .all(),
      db.orm.public.Note
        .groupBy('institution')
        .aggregate((aggregate) => ({ noteCount: aggregate.count() })),
      db.orm.public.Note
        .groupBy('course')
        .aggregate((aggregate) => ({ noteCount: aggregate.count() })),
      db.orm.public.Note
        .orderBy((note) => note.createdAt.desc())
        .limit(10)
        .include('uploader', (uploader) => uploader.select('name', 'email'))
        .all(),
      db.orm.public.Note
        .where((note) => note.createdAt.gte(sixMonthsAgoInstant))
        .select('createdAt')
        .all(),
    ]);

    const uploadsByMonth = new Map();
    for (const row of recentNoteDates) {
      const month = row.createdAt.toString().slice(0, 7);
      uploadsByMonth.set(month, (uploadsByMonth.get(month) || 0) + 1);
    }

    const topInstitutions = institutionGroups
      .map((row) => ({ institution: row.institution, noteCount: row.noteCount }))
      .sort((a, b) => b.noteCount - a.noteCount)
      .slice(0, 5);
    const topCourses = courseGroups
      .map((row) => ({ course: row.course, noteCount: row.noteCount }))
      .sort((a, b) => b.noteCount - a.noteCount)
      .slice(0, 5);
    const monthlyUploads = [...uploadsByMonth]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, count]) => ({ month, count }));

    return res.json({
      stats: {
        totalUsers: userTotals.count,
        activeUsers: activeTotals.count,
        premiumUsers: premiumTotals.count,
        totalNotes: noteTotals.count,
        verifiedNotes: verifiedTotals.count,
        pendingNotes: pendingTotals.count,
        totalDownloads: downloadTotals.count,
        downloadsThisMonth: monthlyDownloadTotals.count,
      },
      topNotes,
      topInstitutions,
      topCourses,
      recentUploads,
      monthlyUploads,
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const page = parsePage(req.query.page, 1, Number.MAX_SAFE_INTEGER);
    const limit = parsePage(req.query.limit, 20, 100);
    const db = await getDb();
    let filtered = db.orm.public.User;
    if (typeof req.query.search === 'string' && req.query.search.trim()) {
      const { or } = await import('@prisma/orm-postgres/orm-client');
      const term = `%${req.query.search.trim()}%`;
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
        'id',
        'name',
        'email',
        'institution',
        'level',
        'role',
        'isPremium',
        'subscriptionExpiry',
        'bio',
        'isActive',
        'weeklyDownloads',
        'lastDownloadReset',
        'createdAt',
        'updatedAt',
      )
      .orderBy((user) => user.createdAt.desc())
      .limit(limit)
      .offset((page - 1) * limit)
      .all();

    return res.json({
      users,
      totalPages: Math.ceil(totals.count / limit),
      currentPage: page,
      totalUsers: totals.count,
    });
  } catch (error) {
    console.error('Get users error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    const { isActive, isPremium, role, subscriptionExpiry } = req.body;
    const update = {};
    if (isActive !== undefined) {
      if (typeof isActive !== 'boolean') {
        return res.status(400).json({ message: 'isActive must be a boolean' });
      }
      update.isActive = isActive;
    }
    if (isPremium !== undefined) {
      if (typeof isPremium !== 'boolean') {
        return res.status(400).json({ message: 'isPremium must be a boolean' });
      }
      update.isPremium = isPremium;
    }
    if (role !== undefined) {
      if (!['student', 'admin', 'guest'].includes(role)) {
        return res.status(400).json({ message: 'Invalid user role' });
      }
      update.role = role;
    }
    if (subscriptionExpiry !== undefined) {
      if (subscriptionExpiry === null || subscriptionExpiry === '') {
        update.subscriptionExpiry = null;
      } else {
        const expiry = new Date(subscriptionExpiry);
        if (Number.isNaN(expiry.getTime())) {
          return res.status(400).json({ message: 'Invalid subscription expiry date' });
        }
        update.subscriptionExpiry = Temporal.Instant.from(expiry.toISOString());
      }
    }
    if (Object.keys(update).length === 0) {
      return res.status(400).json({ message: 'No user fields provided to update' });
    }

    const db = await getDb();
    const user = await db.orm.public.User
      .where({ id })
      .select('id', 'name', 'email', 'isActive', 'isPremium', 'role')
      .update(update);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Update user error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const verifyNote = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Invalid note ID' });
    }
    const { verified } = req.body;
    if (typeof verified !== 'boolean') {
      return res.status(400).json({ message: 'verified must be a boolean' });
    }

    const db = await getDb();
    const note = await db.orm.public.Note.where({ id }).update({ verified });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    return res.json({
      message: `Note ${verified ? 'verified' : 'unverified'} successfully`,
      note,
    });
  } catch (error) {
    console.error('Verify note error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const db = await getDb();
    const user = await db.orm.public.User.where({ id }).select('id', 'role').first();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.role === 'admin') {
      return res.status(403).json({ message: 'Cannot delete admin accounts' });
    }

    await db.orm.public.User.where({ id }).delete();
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getDashboard,
  getAllUsers,
  updateUser,
  verifyNote,
  deleteUser,
};
