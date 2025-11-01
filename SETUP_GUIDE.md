# NoteSphere Setup Guide

## 🚀 Quick Start Guide

### Prerequisites
- Node.js v16+ installed
- MySQL v8+ installed and running
- Git (optional)

### Step 1: Database Setup

1. **Start MySQL** (if not already running)
2. **Create the database:**

```sql
CREATE DATABASE notesphere_db;
```

3. **Verify database exists:**

```sql
SHOW DATABASES;
```

### Step 2: Environment Configuration

1. **Copy the example environment file:**

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Or manually create .env file in the root directory
```

2. **Update `.env` with your MySQL credentials:**

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD_HERE
DB_NAME=notesphere_db
DB_PORT=3300

# JWT Secret (change this to a random string)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:3000

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads/notes
```

**Important:** Replace `YOUR_MYSQL_PASSWORD_HERE` with your actual MySQL password!

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

### Step 4: Seed the Database (Optional but Recommended)

This creates test users and sample notes:

```bash
cd server
npm run seed
```

**Demo accounts created:**
- Admin: `admin@notesphere.com` / `admin123`
- Premium Student: `student1@example.com` / `password123`
- Free Student: `student3@example.com` / `password123`

### Step 5: Run the Application

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

### Step 6: Test the Application

1. Open browser to http://localhost:3000
2. Click "Login" and use demo credentials
3. Try uploading a note (any PDF or DOCX file)
4. Browse and download notes

---

## 🐛 Troubleshooting

### Error: "Cannot connect to database"

**Solution:**
1. Verify MySQL is running
2. Check `.env` file has correct credentials
3. Ensure database `notesphere_db` exists
4. Check port 3300 (or 3306) is correct

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
│   ├── models/
│   │   ├── User.js            # User model
│   │   ├── Note.js            # Note model
│   │   ├── DownloadLog.js     # Download tracking
│   │   └── index.js           # Model associations
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
DB_HOST=your_production_db_host
DB_USER=your_production_db_user
DB_PASSWORD=your_production_db_password
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

**Database (PlanetScale/Neon):**
1. Create production MySQL database
2. Update `DB_HOST`, `DB_USER`, `DB_PASSWORD` in production environment

---

## 📞 Support

If you encounter issues:

1. Check this guide first
2. Verify all environment variables are set correctly
3. Ensure MySQL is running and accessible
4. Check console logs for error messages
5. Try restarting the development servers

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Sequelize ORM](https://sequelize.org)
- [Tailwind CSS](https://tailwindcss.com)
- [MySQL Documentation](https://dev.mysql.com/doc/)

---

**Happy Coding! 🚀**
