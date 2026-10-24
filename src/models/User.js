const bcrypt = require('bcryptjs');

// Hash a password before saving it to the database.
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Compare a candidate password with the stored hash.
const comparePassword = async (candidatePassword, hashedPassword) => {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

// Check whether a user's premium subscription is active.
const isSubscriptionActive = (user) => {
  if (!user.isPremium || !user.subscriptionExpiry) {
    return false;
  }

  return new Date() < new Date(user.subscriptionExpiry);
};

// Reset weekly downloads when seven days have elapsed.
const resetWeeklyDownloads = async (prisma, user) => {
  const now = new Date();
  const lastReset = new Date(user.lastDownloadReset);
  const daysDiff =
    (now.getTime() - lastReset.getTime()) / (1000 * 60 * 60 * 24);

  if (daysDiff >= 7) {
    return prisma.user.update({
      where: { id: user.id },
      data: {
        weeklyDownloads: 0,
        lastDownloadReset: now,
      },
    });
  }

  return user;
};

module.exports = {
  hashPassword,
  comparePassword,
  isSubscriptionActive,
  resetWeeklyDownloads,
};
