# 🚀 Deployment Guide - Render

This guide covers deploying your NoteSphere backend to Render and connecting both web and mobile frontends.

---

## 📋 Part 1: Deploy Backend to Render

### Step 1: Prepare Your Repository

1. Push your code to GitHub (if not already):
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
   - **Root Directory**: repository root (the backend imports the Prisma runtime from `src/prisma`)
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm --prefix server install`
   - **Start Command**: `npm --prefix server start`

4. **Environment Variables** (Click "Add Environment Variable"):
   
   ```env
   DATABASE_URL=your-pooled-postgresql-url
   DIRECT_URL=your-direct-postgresql-url
   JWT_SECRET=your-super-secret-random-value
   PORT=10000
   NODE_ENV=production
   CLIENT_URL=https://your-frontend-url.onrender.com
   ```

   **Important Notes:**
   - Use a **strong, random** JWT_SECRET (generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
   - PORT should be `10000` (Render's default, or use `process.env.PORT`)
   - CLIENT_URL will be your frontend URL

5. **Click "Create Web Service"**

### Step 4: Database Setup

Provision a PostgreSQL database with Render or a provider available through the Vercel Marketplace (such as Neon). Set `DATABASE_URL` to the pooled URL and `DIRECT_URL` to the direct/unpooled URL. Before starting the API for the first time, initialize the schema from the repository root with `npm run contract:emit` and `npm run db:init`, using the direct URL. For later schema changes, review a Prisma migration plan before applying it.

### Step 5: Confirm the server settings

The server listens on `process.env.PORT` and checks database connectivity before accepting requests. It does not create or alter the schema at startup. Ensure both database URLs and `JWT_SECRET` are set before deployment.

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
DATABASE_URL=your-pooled-postgresql-url
DIRECT_URL=your-direct-postgresql-url

JWT_SECRET=your_random_secret_key_here

PORT=10000
NODE_ENV=production

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

Initialize a new production database from the repository root after configuring its direct connection URL:

```bash
npm run contract:emit
npm run db:init
```

For future schema changes, use `npm run migration:plan`, review the generated plan, then apply it with `npm run db:migrate`. Never use the development `db:update` command against production. To migrate existing MySQL records, follow [DATABASE_SWITCH_GUIDE.md](./DATABASE_SWITCH_GUIDE.md); keep both backups until the imported data and API have been verified. Do not run the development seed against production.

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
