# 🚀 Deployment Guide - Render

This guide covers deploying your NoteSphere backend to Render and connecting both web and mobile frontends.

---

## 📋 Part 1: Deploy Backend to Render

### Step 1: Prepare Your Repository

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Make sure `.env` is in `.gitignore`** ✅ (already done)

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up/login with GitHub
3. Connect your GitHub account

### Step 3: Create Web Service on Render

1. **Click "New +" → "Web Service"**
2. **Connect your repository** (select NoteSphere repo)
3. **Configure the service:**

   **Basic Settings:**
   - **Name**: `notesphere-backend` (or any name)
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `server` (important!)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Environment Variables** (Click "Add Environment Variable"):
   
   ```env
   # Database
   DB_HOST=your-db-host.render.com
   DB_USER=your-db-user
   DB_PASSWORD=your-secure-password
   DB_NAME=notesphere_db
   DB_PORT=3306
   
   # JWT
   JWT_SECRET=your_super_secret_jwt_key_change_this_to_random_string
   
   # Server
   PORT=10000
   NODE_ENV=production
   
   # Client URLs (for CORS)
   CLIENT_URL=https://your-frontend-url.onrender.com
   ```

   **Important Notes:**
   - Use a **strong, random** JWT_SECRET (generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
   - PORT should be `10000` (Render's default, or use `process.env.PORT`)
   - CLIENT_URL will be your frontend URL

5. **Click "Create Web Service"**

### Step 4: Database Setup

**Option A: Use Render PostgreSQL (Free Tier)**
1. Click "New +" → "PostgreSQL"
2. Configure:
   - **Name**: `notesphere-db`
   - **Database**: `notesphere_db`
   - **User**: Auto-generated
   - **Region**: Same as backend
3. Get connection details from dashboard
4. Update environment variables in your web service

**Option B: Use External MySQL (PlanetScale, Neon, etc.)**
1. Create database on external service
2. Get connection string
3. Update environment variables

**⚠️ Important:** If using PostgreSQL instead of MySQL, you'll need to:
- Update `server/config/database.js` to use PostgreSQL
- Install PostgreSQL driver: `npm install pg pg-hstore`
- Update Sequelize dialect to `postgres`

### Step 5: Update Server for Render

Your server already uses `process.env.PORT` which works with Render. Just make sure:

1. **Check `server/server.js`** - Should have:
   ```javascript
   const PORT = process.env.PORT || 5000;
   ```

2. **Check `server/package.json`** - Should have:
   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

✅ Your code is already ready!

### Step 6: Deploy and Test

1. Render will automatically build and deploy
2. Check deployment logs for errors
3. Test the health endpoint:
   ```
   https://your-backend.onrender.com/api/health
   ```

---

## 📋 Part 2: Connect Web Frontend

### Step 1: Update Web Frontend API URL

Edit `client/notesphere/src/utils/api.js`:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

Create `.env` file in `client/notesphere/` folder:

```env
REACT_APP_API_URL=https://your-backend.onrender.com/api
```

### Step 2: Deploy Web Frontend to Render (or Vercel)

**Option A: Render (Static Site)**
1. Click "New +" → "Static Site"
2. Connect repository
3. Configure:
   - **Root Directory**: `client/notesphere`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
4. Add environment variable:
   ```
   REACT_APP_API_URL=https://your-backend.onrender.com/api
   ```

**Option B: Vercel (Recommended for React)**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `client/notesphere`
4. Add environment variable:
   ```
   REACT_APP_API_URL=https://your-backend.onrender.com/api
   ```
5. Deploy

After deployment, update your backend's `CLIENT_URL` environment variable with your frontend URL.

---

## 📱 Part 3: Connect Mobile Frontend

### Step 1: Update Mobile API URL

**Option A: Using .env file (Recommended)**

Create/update `.env` file in `NoteSphereMobile/` folder:

```env
EXPO_PUBLIC_API_URL=https://your-backend.onrender.com/api
```

**Option B: Update api.js directly**

Edit `NoteSphereMobile/src/services/api.js`:

Find the production section and update:

```javascript
// For production, use your deployed backend URL
if (__DEV__ === false) {
  return 'https://your-backend.onrender.com/api';
}
```

### Step 2: Test Mobile Connection

1. **For development testing:**
   - Update `.env` with Render URL
   - Restart Expo: `npm start`

2. **For production build:**
   - Set `EXPO_PUBLIC_API_URL` in your build environment
   - Build APK/IPA with Expo EAS or `expo build`

---

## 🔧 Part 4: Environment Variables Summary

### Backend (Render) Environment Variables:

```env
# Database
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=notesphere_db
DB_PORT=3306

# JWT
JWT_SECRET=your_random_secret_key_here

# Server
PORT=10000
NODE_ENV=production

# CORS
CLIENT_URL=https://your-frontend-url.com
```

### Web Frontend (.env in client/notesphere/):

```env
REACT_APP_API_URL=https://your-backend.onrender.com/api
```

### Mobile Frontend (.env in NoteSphereMobile/):

```env
EXPO_PUBLIC_API_URL=https://your-backend.onrender.com/api
```

---

## 🗄️ Part 5: Database Migration

After deploying, you need to run migrations:

### Option 1: SSH into Render and run manually

Render doesn't support SSH directly, but you can:

1. Add a migration script to `server/package.json`:
   ```json
   "scripts": {
     "migrate": "node -e \"require('./config/database').sequelize.sync({ alter: true }).then(() => process.exit(0))\""
   }
   ```

2. Run it via Render Shell (if available) or create a one-time deploy script

### Option 2: Run seed script locally pointing to production DB

1. Temporarily update your local `.env` with production database credentials
2. Run: `cd server && npm run seed`
3. Remove production credentials from local `.env`

### Option 3: Create admin via API

After deployment, create admin user:
```bash
curl -X POST https://your-backend.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "email": "admin@notesphere.com",
    "password": "admin123",
    "institution": "NoteSphere",
    "level": "Admin"
  }'
```

Then manually update role to 'admin' in database.

---

## 🔒 Part 6: Security Checklist

- [ ] Use strong JWT_SECRET (random 32+ characters)
- [ ] Use secure database passwords
- [ ] Update CORS to only allow your frontend domains
- [ ] Enable HTTPS (Render does this automatically)
- [ ] Remove debug logs in production
- [ ] Set NODE_ENV=production
- [ ] Don't commit .env files

---

## 🐛 Part 7: Troubleshooting

### Backend Issues:

**Problem: "Cannot connect to database"**
- ✅ Check database is running
- ✅ Verify environment variables are correct
- ✅ Check database allows connections from Render IPs

**Problem: "Port already in use"**
- ✅ Use `process.env.PORT` (already done)
- ✅ Don't hardcode port

**Problem: CORS errors**
- ✅ Update CLIENT_URL environment variable
- ✅ Check CORS configuration in server.js

### Frontend Issues:

**Problem: "Network error" or "CORS error"**
- ✅ Check API URL is correct (https://)
- ✅ Verify backend is deployed and running
- ✅ Check backend CORS settings

**Problem: Mobile app can't connect**
- ✅ Update `.env` file with Render URL
- ✅ Restart Expo after changing .env
- ✅ Verify EXPO_PUBLIC_ prefix is used

---

## 📝 Part 8: Quick Reference

### Render Backend URL Format:
```
https://your-service-name.onrender.com
```

### API Endpoints:
```
https://your-service-name.onrender.com/api/health
https://your-service-name.onrender.com/api/auth/login
https://your-service-name.onrender.com/api/notes
```

### Update Frequency:
- Backend auto-deploys on git push
- Frontend may need manual rebuild or auto-deploys (depends on platform)

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed to Render
- [ ] Database created and connected
- [ ] Environment variables configured
- [ ] Backend health check works
- [ ] Web frontend deployed
- [ ] Mobile .env updated
- [ ] CORS configured correctly
- [ ] Test login/register on both platforms
- [ ] Database seeded (optional)

---

## 🎯 Next Steps

1. Deploy backend → Get Render URL
2. Update web frontend API URL → Deploy web
3. Update mobile .env → Test mobile
4. Update backend CLIENT_URL → Redeploy backend
5. Test everything!

---

**Need help?** Check Render logs, browser console, or Expo logs for specific error messages.

