# 🚀 START HERE - NoteSphere Quick Start

## ⚡ Quick Setup

### Step 1: Create a PostgreSQL database
Use a local PostgreSQL instance or a provider such as Neon through the Vercel Marketplace.

### Step 2: Configure Environment (1 minute)
```bash
# Copy the example file
Copy-Item .env.example .env

# Edit .env and set:
# DATABASE_URL=your pooled PostgreSQL URL
# DIRECT_URL=your direct PostgreSQL URL
```

### Step 3: Initialize and run

```bash
# Emit the Prisma 8 contract and initialize PostgreSQL
npm run contract:emit
npm run db:init

# Optional: seed a new, empty development database
npm --prefix server run seed

# Start the app
npm run dev
```

**Done!** Open http://localhost:3000

---

## 🔑 Demo Login

The demo accounts are available only after running the optional development seed above. The seed refuses to run in production or against a non-empty database.

**Admin:**
- Email: `admin@notesphere.com`
- Password: `admin123`

**Student:**
- Email: `student1@example.com`
- Password: `password123`

---

## ❓ Having Issues?

### "Cannot connect to database"
- Verify `DATABASE_URL` and `DIRECT_URL` are correct and reachable.

### "Port already in use"
- Change PORT in `.env` file

### Need detailed help?
- See `SETUP_GUIDE.md` for full instructions
- See `FIXES_APPLIED.md` for what was fixed

---

## 📁 Important Files

- `.env` - Your configuration (create from `.env.example`)
- `SETUP_GUIDE.md` - Detailed setup instructions
- `FIXES_APPLIED.md` - List of all fixes applied
- `README.md` - Full documentation

---

**Ready to start? Run `npm run dev` from the root directory!** 🎉
