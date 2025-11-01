# 🚀 START HERE - NoteSphere Quick Start

## ⚡ 3-Minute Setup

### Step 1: Create Database (1 minute)
```sql
CREATE DATABASE notesphere_db;
```

### Step 2: Configure Environment (1 minute)
```bash
# Copy the example file
Copy-Item .env.example .env

# Edit .env and change:
# DB_PASSWORD=YOUR_MYSQL_PASSWORD_HERE
```

### Step 3: Seed & Run (1 minute)
```bash
# Seed database
cd server
npm run seed
cd ..

# Start the app
npm run dev
```

**Done!** Open http://localhost:3000

---

## 🔑 Demo Login

**Admin:**
- Email: `admin@notesphere.com`
- Password: `admin123`

**Student:**
- Email: `student1@example.com`
- Password: `password123`

---

## ❓ Having Issues?

### "Cannot connect to database"
- Check MySQL is running
- Verify `.env` has correct password
- Confirm port is 3300 (or 3306)

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
