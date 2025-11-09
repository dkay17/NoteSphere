# 📚 NoteSphere

A comprehensive full-stack platform for students to share and access academic materials including lecture notes, past questions, and study summaries. Built with React and Node.js.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange)

## ✨ Features

### 👥 User Management
- **Authentication System**: Secure JWT-based authentication with role-based access control
- **User Roles**: Student, Admin, and Guest roles with different permissions
- **User Profiles**: Customizable profiles with bio, institution, and academic level
- **Account Management**: Admin can activate/deactivate users and manage subscriptions

### 📄 Note Management
- **File Upload**: Support for PDF, DOC, and DOCX files (max 10MB)
- **Smart Search**: Advanced search and filtering by institution, course, lecturer, tags, and keywords
- **Note Verification**: Admin verification system to ensure quality content
- **Download Tracking**: Track downloads and popular content
- **My Notes**: Users can view and manage their uploaded notes

### 💎 Premium Features
- **Subscription Tiers**: Free and Premium user tiers
- **Download Limits**: 
  - Free users: 3 downloads per week
  - Premium users: Unlimited downloads
- **AI Summaries**: Generate AI-powered summaries for premium users (placeholder ready for integration)
- **Auto-Reset**: Weekly download limits automatically reset every 7 days

### 🔐 Admin Dashboard
- **Analytics Dashboard**: View platform statistics, user counts, and trends
- **User Management**: View all users, update roles, activate/deactivate accounts
- **Content Moderation**: Verify or unverify uploaded notes
- **Charts & Reports**: Visual analytics with Chart.js
- **Top Content**: View most downloaded notes and popular institutions/courses

### 🎨 User Experience
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- **Toast Notifications**: User-friendly notifications for actions and errors
- **Protected Routes**: Secure route protection for authenticated users
- **Loading States**: Smooth loading indicators throughout the app

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI framework
- **React Router DOM 6.27.0** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.23.22** - Animation library
- **Axios 1.12.2** - HTTP client
- **Chart.js 4.4.1** & **react-chartjs-2 5.2.0** - Data visualization
- **Lucide React 0.545.0** - Icon library
- **class-variance-authority 0.7.1** - Component variant management

### Backend
- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **MySQL 8.0+** - Database
- **Sequelize 6.37.7** - ORM for database operations
- **JWT (jsonwebtoken 9.0.2)** - Authentication tokens
- **bcryptjs 3.0.2** - Password hashing
- **Multer 2.0.2** - File upload handling
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 17.2.3** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **MySQL** (v8.0 or higher)
- **npm** or **yarn** package manager
- **Git** (optional, for version control)

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd NoteSphere
```

Or if you already have the project files, navigate to the project directory.

### Step 2: Install Dependencies

Install dependencies for root, server, and client:

```bash
# Install all dependencies at once
npm run install-all

# Or install individually:
# Root dependencies
npm install

# Server dependencies
cd server
npm install

# Client dependencies
cd ../client/notesphere
npm install
```

### Step 3: Database Setup

1. **Create MySQL Database**:

```sql
CREATE DATABASE notesphere_db;
```

2. **Verify database exists**:

```sql
SHOW DATABASES;
```

### Step 4: Environment Configuration

1. **Create `.env` file** in the root directory:

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Or manually create .env file
```

2. **Configure your `.env` file**:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD_HERE
DB_NAME=notesphere_db
DB_PORT=3306

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_change_in_production

# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# File Upload Configuration (optional)
MAX_FILE_SIZE=10485760
```

**⚠️ Important**: Replace `YOUR_MYSQL_PASSWORD_HERE` with your actual MySQL password!

### Step 5: Seed the Database

Populate the database with sample data:

```bash
cd server
npm run seed
```

This creates:
- ✅ 1 Admin user (admin@notesphere.com / admin123)
- ✅ 5 Test students (2 premium, 3 free)
- ✅ 10 Sample notes

### Step 6: Start the Application

From the **root directory**, run:

```bash
# Start both frontend and backend
npm run dev
```

Or run them separately:

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🔑 Demo Credentials

After seeding, you can log in with these accounts:

### Admin Account
- **Email**: `admin@notesphere.com`
- **Password**: `admin123`

### Premium Student
- **Email**: `student1@example.com`
- **Password**: `password123`

### Free Student
- **Email**: `student3@example.com`
- **Password**: `password123`

## 👨‍💼 Adding Admin Users

To add additional admin users, use the `create-admin` script:

```bash
cd server
npm run create-admin "Admin Name" "admin@example.com" "password123" "Institution Name"
```

**Example**:
```bash
npm run create-admin "Jane Doe" "jane@notesphere.com" "securepass123" "University of Ghana"
```

**Note**: If a user with that email already exists, they will be upgraded to admin automatically.

Alternatively, you can use the Admin Dashboard API to update an existing user's role (requires admin authentication).

## 📁 Project Structure

```
NoteSphere/
├── .env                      # Environment variables (create this!)
├── .env.example              # Example environment file
├── package.json              # Root package.json with dev scripts
├── README.md                 # This file
├── SETUP_GUIDE.md            # Detailed setup instructions
├── START_HERE.md             # Quick start guide
│
├── client/
│   └── notesphere/           # React frontend
│       ├── public/           # Public assets
│       ├── src/
│       │   ├── components/   # Reusable components
│       │   │   ├── Navbar.jsx
│       │   │   ├── NoteCard.jsx
│       │   │   ├── SearchBar.jsx
│       │   │   ├── ProtectedRoute.jsx
│       │   │   ├── Loader.jsx
│       │   │   └── Toast.jsx
│       │   ├── pages/        # Page components
│       │   │   ├── Home.jsx
│       │   │   ├── Login.jsx
│       │   │   ├── Register.jsx
│       │   │   ├── Browse.jsx
│       │   │   ├── Upload.jsx
│       │   │   ├── NoteDetail.jsx
│       │   │   ├── MyNotes.jsx
│       │   │   ├── Profile.jsx
│       │   │   └── AdminDashboard.jsx
│       │   ├── context/      # React contexts
│       │   │   ├── AuthContext.jsx
│       │   │   └── ToastContext.jsx
│       │   ├── hooks/        # Custom React hooks
│       │   │   └── useToast.js
│       │   ├── utils/        # Utility functions
│       │   │   ├── api.js    # Axios instance
│       │   │   └── cn.js     # Class name utility
│       │   ├── App.js        # Main app component
│       │   └── index.js      # Entry point
│       └── package.json
│
└── server/                   # Express backend
    ├── config/
    │   └── database.js       # Database connection
    ├── models/               # Sequelize models
    │   ├── User.js
    │   ├── Note.js
    │   ├── DownloadLog.js
    │   └── index.js          # Model associations
    ├── controllers/          # Route controllers
    │   ├── authController.js
    │   ├── noteController.js
    │   └── adminController.js
    ├── routes/                # API routes
    │   ├── authRoutes.js
    │   ├── noteRoutes.js
    │   └── adminRoutes.js
    ├── middleware/            # Express middleware
    │   ├── auth.js           # JWT verification
    │   └── upload.js         # File upload (Multer)
    ├── seeders/               # Database seeders
    │   └── seed.js
    ├── scripts/               # Utility scripts
    │   └── createAdmin.js    # Admin creation script
    ├── uploads/               # File storage (auto-created)
    │   └── notes/
    ├── server.js             # Entry point
    └── package.json
```

## 🔌 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/me` | Get current user profile | Required |
| PUT | `/api/auth/profile` | Update user profile | Required |

### Notes (`/api/notes`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/notes` | Get all notes (with filters) | Public |
| GET | `/api/notes/:id` | Get single note details | Public |
| POST | `/api/notes/upload` | Upload new note | Required |
| GET | `/api/notes/download/:id` | Download note file | Required |
| GET | `/api/notes/my-notes` | Get user's uploaded notes | Required |
| DELETE | `/api/notes/:id` | Delete note (owner or admin) | Required |
| POST | `/api/notes/:id/summary` | Generate AI summary | Premium |

### Admin (`/api/admin`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/admin/dashboard` | Get analytics dashboard | Admin |
| GET | `/api/admin/users` | Get all users (paginated) | Admin |
| PUT | `/api/admin/users/:id` | Update user (role, premium, etc.) | Admin |
| DELETE | `/api/admin/users/:id` | Delete user | Admin |
| PUT | `/api/admin/notes/:id/verify` | Verify/unverify note | Admin |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health status |

## 📜 Available Scripts

### Root Directory

```bash
npm run dev          # Start both client and server concurrently
npm run server       # Start only the backend server
npm run client       # Start only the frontend client
npm run install-all  # Install dependencies for root, server, and client
```

### Server Directory

```bash
npm start            # Start production server
npm run dev          # Start development server with nodemon
npm run seed         # Seed database with sample data
npm run create-admin # Create new admin user
```

### Client Directory

```bash
npm start            # Start development server
npm run build        # Build for production
npm test             # Run tests
```

## 🎯 Key Features Explained

### Download Limits System
- Free users are limited to 3 downloads per week
- Premium users and admins have unlimited downloads
- Download counter resets automatically every 7 days
- System tracks weekly downloads per user

### File Upload System
- Supports: PDF, DOC, DOCX formats
- Maximum file size: 10MB (configurable)
- Files stored in `server/uploads/notes/`
- Unique filenames prevent conflicts
- File type validation on upload

### Search & Filter
- Search by: title, course, course code, description
- Filter by: institution, course, lecturer, tags
- Sort by: date, downloads, rating
- Pagination support (20 items per page default)

### Premium Subscription
- Admin can upgrade users to premium
- Premium users get unlimited downloads
- Premium users can generate AI summaries
- Subscription expiry tracking

## 🔒 Security Features

- ✅ **Password Hashing**: bcryptjs with salt rounds of 10
- ✅ **JWT Authentication**: Secure token-based authentication
- ✅ **Protected Routes**: Middleware to protect sensitive endpoints
- ✅ **Role-Based Access**: Admin, Premium, and Free user tiers
- ✅ **File Type Validation**: Only allowed file types accepted
- ✅ **File Size Limits**: Prevents oversized uploads
- ✅ **CORS Protection**: Configured CORS for security
- ✅ **SQL Injection Protection**: Sequelize ORM prevents SQL injection
- ✅ **Input Validation**: Email validation and required field checks

## 🚢 Deployment

### Frontend Deployment (Vercel)

1. Build the production bundle:
```bash
cd client/notesphere
npm run build
```

2. Deploy `build` folder to Vercel or similar platform

3. Set environment variable:
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

### Backend Deployment (Render/Railway)

1. Set start command: `cd server && npm start`

2. Configure environment variables:
   - All database credentials
   - JWT_SECRET
   - CLIENT_URL (your frontend URL)
   - PORT (usually set automatically)

### Database (PlanetScale/Neon)

1. Create production MySQL database
2. Update connection string in production environment
3. Run migrations (Sequelize sync)

## 🐛 Troubleshooting

### "Cannot connect to database"
- ✅ Verify MySQL is running
- ✅ Check `.env` file has correct credentials
- ✅ Ensure database `notesphere_db` exists
- ✅ Verify port (3306 or 3300) is correct

### "Port already in use"
- ✅ Change `PORT` in `.env` file
- ✅ Kill process using that port

### "Module not found"
- ✅ Run `npm install` in the problematic directory
- ✅ Delete `node_modules` and reinstall

### Tailwind styles not working
- ✅ Ensure `postcss.config.js` exists in `client/notesphere`
- ✅ Restart development server
- ✅ Clear browser cache

## 🚧 Future Enhancements

- [ ] Payment integration (Paystack/Flutterwave) for premium subscriptions
- [ ] Real AI summary generation (OpenAI/Claude API integration)
- [ ] Email notifications for note uploads and verifications
- [ ] Note rating and review system
- [ ] Social features (following users, comments)
- [ ] Mobile app (React Native)
- [ ] Advanced analytics and insights
- [ ] Bulk file upload support
- [ ] Note versioning system
- [ ] Export notes as PDF collections

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - feel free to use it for learning or commercial purposes.

## 👥 Authors

- Marvin Idibia - Initial work

## 🙏 Acknowledgments

- Built with ❤️ for students to easily share and access academic materials
- Inspired by the need for accessible educational resources in Ghanaian tertiary institutions

## 📞 Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Check `SETUP_GUIDE.md` for detailed instructions
- Review `FIXES_APPLIED.md` for recent fixes

## 📸 Project Preview

### 🖼️ Screenshots
<p align="center">
  <img src="./media/note 1.png" alt="NoteSphere Home Page" width="700"/>
  <br/>
  <em>NoteSphere - Home Page Interface</em>
</p>

<p align="center">
  <img src="./media/note 2.png" alt="NoteSphere Dashboard" width="700"/>
  <br/>
  <em>NoteSphere - User Dashboard View</em>
</p>

<p align="center">
  <img src="./media/note 3.png" alt="NoteSphere Dashboard" width="700"/>
  <br/>
  <em>NoteSphere - Browse note View</em>
</p>

<p align="center">
  <img src="./media/note 4.png" alt="NoteSphere Dashboard" width="700"/>
  <br/>
  <em>NoteSphere - Admin Dashboard View</em>
</p>

---

### 🎬 Demo Video
<p align="center">
  <video src="./media/NoteSphere video.mp4" controls width="700"></video>
  <br/>
  <em>Watch the full NoteSphere demo</em>
</p>


---

**Happy Coding! 🚀**
