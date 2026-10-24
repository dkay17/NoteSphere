# NoteSphere Setup Guide

## 🚀 Quick Start Guide

### Prerequisites
- Node.js v24+ installed
- A PostgreSQL 15+ database (local or hosted)
- Git (optional)

### Step 1: Database Setup

Create a PostgreSQL database. For Vercel projects, use a provider available through the Vercel Marketplace (for example, Neon); Vercel's former built-in Postgres product is no longer available.

### Step 2: Environment Configuration

1. **Copy the example environment file:**

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Or manually create .env file in the root directory
```

2. **Set the PostgreSQL connection URLs and API secret in `.env`:**

```env
DATABASE_URL=postgresql://...pooled-url...
DIRECT_URL=postgresql://...direct-url...

JWT_SECRET=replace_with_a_long_random_secret

PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
MAX_FILE_SIZE=10485760
```

Do not commit connection URLs or secrets. `MYSQL_DATABASE_URL` is only required when importing legacy records.

### Step 3: Install Dependencies

All dependencies should already be installed, but if not:

```bash
# From root directory
npm install

# Server dependencies
cd server
npm install

# Client dependencies
cd ../client/notesphere
npm install
cd ../..
```

### Step 4: Initialize the PostgreSQL schema

From the repository root, emit the Prisma 8 contract and initialize the schema:

```bash
npm run contract:emit
npm run db:init
```

If you are migrating legacy MySQL records, back up both databases and follow [DATABASE_SWITCH_GUIDE.md](./DATABASE_SWITCH_GUIDE.md) before seeding.

### Step 5: Seed an empty development database (Optional)

The seed command only runs outside production and refuses to seed a non-empty database:

```bash
npm --prefix server run seed
```

**Demo accounts created:**
- Admin: `admin@notesphere.com` / `admin123`
- Premium Student: `student1@example.com` / `password123`
- Free Student: `student3@example.com` / `password123`

### Step 6: Run the Application

From the **root directory**:

```bash
npm run dev
```

This starts both:
- **Backend API**: http://localhost:5000
- **Frontend**: http://localhost:3000

**Or run separately:**

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

### Step 7: Test the Application

1. Open browser to http://localhost:3000
2. Click "Login" and use demo credentials
3. Try uploading a note (any PDF or DOCX file)
4. Browse and download notes

---

## 🐛 Troubleshooting

### Error: "Cannot connect to database"

**Solution:**
1. Verify `DATABASE_URL` is the provider's PostgreSQL pooled URL.
2. Verify `DIRECT_URL` is set for Prisma schema commands.
3. Ensure the backend host can reach the PostgreSQL database.

### Error: "Port 5000 already in use"

**Solution:**
Change PORT in `.env` file:
```env
PORT=5001
```

### Error: "Port 3000 already in use"

**Solution:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Error: Module not found

**Solution:**
```bash
# Reinstall dependencies
cd client/notesphere
npm install

cd ../../server
npm install
```

### Tailwind styles not working

**Solution:**
1. Ensure `postcss.config.js` exists in client/notesphere
2. Restart the development server
3. Clear browser cache

---

## 📁 Project Structure

```
NoteSphere/
├── .env                        # Environment variables (create this!)
├── .env.example                # Example environment file
├── package.json                # Root package file
├── README.md                   # Main documentation
├── SETUP_GUIDE.md             # This file
│
├── server/                     # Backend
│   ├── config/
│   │   └── database.js        # Database connection
│   ├── controllers/
│   │   ├── authController.js  # Auth logic
│   │   ├── noteController.js  # Note logic
│   │   └── adminController.js # Admin logic
│   ├── routes/
│   │   ├── authRoutes.js      # Auth endpoints
│   │   ├── noteRoutes.js      # Note endpoints
│   │   └── adminRoutes.js     # Admin endpoints
│   ├── middleware/
│   │   ├── auth.js            # JWT verification
│   │   └── upload.js          # File upload (Multer)
│   ├── seeders/
│   │   └── seed.js            # Database seeder
│   ├── scripts/
│   │   ├── createAdmin.js
│   │   └── importMysqlData.js # One-time legacy data importer
│   ├── uploads/               # File storage (auto-created)
│   ├── server.js              # Entry point
│   └── package.json
│
└── client/notesphere/          # Frontend
    ├── public/
    ├── src/
    │   ├── components/         # Reusable components
    │   │   ├── Navbar.jsx
    │   │   ├── NoteCard.jsx
    │   │   ├── SearchBar.jsx
    │   │   ├── Toast.jsx
    │   │   ├── Loader.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages/              # Page components
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Browse.jsx
    │   │   ├── Upload.jsx
    │   │   ├── NoteDetail.jsx
    │   │   ├── MyNotes.jsx
    │   │   ├── Profile.jsx
    │   │   └── AdminDashboard.jsx
    │   ├── context/            # React contexts
    │   │   ├── AuthContext.jsx
    │   │   └── ToastContext.jsx
    │   ├── hooks/              # Custom hooks
    │   │   └── useToast.js
    │   ├── utils/              # Utilities
    │   │   ├── api.js          # Axios instance
    │   │   └── cn.js           # Class name utility
    │   ├── App.js              # Main app component
    │   ├── index.js            # Entry point
    │   └── index.css           # Tailwind styles
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json
```

The Prisma 8 contract and generated runtime files are in `src/prisma/` at the repository root.

---

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update profile (protected)

### Notes
- `GET /api/notes` - Get all notes (public)
- `GET /api/notes/:id` - Get single note (public)
- `POST /api/notes/upload` - Upload note (protected)
- `GET /api/notes/download/:id` - Download note (protected)
- `GET /api/notes/my-notes` - Get user's notes (protected)
- `DELETE /api/notes/:id` - Delete note (protected)
- `POST /api/notes/:id/summary` - Generate AI summary (premium only)

### Admin
- `GET /api/admin/dashboard` - Get analytics (admin only)
- `GET /api/admin/users` - Get all users (admin only)
- `PUT /api/admin/users/:id` - Update user (admin only)
- `DELETE /api/admin/users/:id` - Delete user (admin only)
- `PUT /api/admin/notes/:id/verify` - Verify note (admin only)

---

## 🎯 Features Checklist

- ✅ User registration and login
- ✅ JWT authentication
- ✅ File upload (PDF/DOCX, max 10MB)
- ✅ File download with tracking
- ✅ Download limits (3/week for free users)
- ✅ Search and filter notes
- ✅ Premium subscription system
- ✅ Admin dashboard with analytics
- ✅ User management
- ✅ Note verification
- ✅ Responsive design
- ✅ Toast notifications
- ✅ Protected routes
- ⚠️ AI summaries (mocked, needs API integration)
- ⚠️ Payment integration (prepared, not implemented)

---

## 🚢 Production Deployment

### Environment Variables for Production

Update `.env` for production:

```env
NODE_ENV=production
DATABASE_URL=your-pooled-postgresql-url
DIRECT_URL=your-direct-postgresql-url
JWT_SECRET=use_a_very_strong_random_string_here
CLIENT_URL=https://your-frontend-domain.com
```

### Deployment Platforms

**Frontend (Vercel):**
1. Push code to GitHub
2. Connect repository to Vercel
3. Set build command: `cd client/notesphere && npm run build`
4. Set output directory: `client/notesphere/build`
5. Add environment variable: `REACT_APP_API_URL=https://your-backend-url.com/api`

**Backend (Render/Railway):**
1. Push code to GitHub
2. Connect repository to Render/Railway
3. Set start command: `cd server && npm start`
4. Add all environment variables from `.env`

**Database (Vercel Marketplace Postgres):**
1. Provision a PostgreSQL database through a provider such as Neon.
2. Set `DATABASE_URL` (pooled) and `DIRECT_URL` (direct) in the backend environment.
3. Apply reviewed Prisma 8 schema migrations before deploying.

---

## 📞 Support

If you encounter issues:

1. Check this guide first
2. Verify all environment variables are set correctly
3. Ensure PostgreSQL is reachable and the Prisma schema has been initialized
4. Check console logs for error messages
5. Try restarting the development servers

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Prisma ORM](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

**Happy Coding! 🚀**
