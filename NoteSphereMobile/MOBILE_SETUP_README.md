# 📱 NoteSphere Mobile - Setup & Testing Guide

## ✅ Status: Ready for Testing

The mobile app has been reviewed and fixed. Here's what was corrected and how to test it.

---

## 🔧 Fixes Applied

### 1. **API URL Configuration** ✅
- **Issue**: Using `localhost:5000` doesn't work on mobile emulators/devices
- **Fix**: Updated `src/services/api.js` to detect platform and use appropriate URLs:
  - **Android Emulator**: `http://10.0.2.2:5000/api`
  - **iOS Simulator**: `http://localhost:5000/api`
  - **Physical Devices**: Uses environment variable or localhost (needs manual IP for devices)
  - **Production**: Configurable via `EXPO_PUBLIC_API_URL`

### 2. **BrowseScreen Data Access** ✅
- **Issue**: API response structure mismatch
- **Fix**: Updated to correctly access `res.data.notes` instead of `res.data`

### 3. **AdminScreen Data Access** ✅
- **Issue**: API response structure mismatch
- **Fix**: Updated to correctly access `res.data.users` instead of `res.data`

### 4. **AuthContext Missing Function** ✅
- **Issue**: `updateUser` function was missing from AuthContext
- **Fix**: Added `updateUser` function to sync user data with AsyncStorage

---

## 🚀 Setup Instructions

### Prerequisites

1. **Backend Server Running**
   - Navigate to `server/` folder
   - Run `npm run dev`
   - Server should be running on `http://localhost:5000`

2. **Expo CLI** (if not already installed)
   ```bash
   npm install -g expo-cli
   # OR use npx (no global install needed)
   ```

### Step 1: Install Dependencies

```bash
cd NoteSphereMobile
npm install
```

### Step 2: Configure API URL (For Physical Devices)

If you're testing on a **physical device**, you need to update the API URL:

1. **Find your computer's IP address**:
   - **Windows**: Run `ipconfig` in PowerShell/CMD and find "IPv4 Address"
   - **Mac/Linux**: Run `ifconfig` and find "inet" address

2. **Option A: Use Environment Variable** (Recommended)
   - Create `.env` file in `NoteSphereMobile/` folder:
   ```env
   EXPO_PUBLIC_API_URL=http://YOUR_IP_ADDRESS:5000/api
   ```
   Example: `EXPO_PUBLIC_API_URL=http://192.168.1.100:5000/api`

3. **Option B: Edit `src/services/api.js` directly**
   - Replace the fallback URL with your IP address

### Step 3: Start the App

```bash
npm start
# OR
expo start
```

Then:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on your physical device

---

## 📱 Testing Checklist

### ✅ Authentication
- [ ] **Login**: Test with `admin@notesphere.com` / `admin123`
- [ ] **Register**: Create a new user account
- [ ] **Logout**: Verify logout clears storage

### ✅ Browse Notes
- [ ] **View Notes**: Browse screen shows list of notes
- [ ] **Search**: Search by title or course works
- [ ] **Pull to Refresh**: Refresh updates the list

### ✅ Upload Notes
- [ ] **Select File**: Can pick PDF/DOCX files
- [ ] **Fill Form**: Title, course, description fields work
- [ ] **Upload**: File uploads successfully
- [ ] **Success Message**: Shows success alert

### ✅ My Notes
- [ ] **View My Notes**: Shows user's uploaded notes
- [ ] **Delete Note**: Can delete own notes

### ✅ Profile
- [ ] **View Profile**: Shows user information
- [ ] **Edit Profile**: Can update name, institution, level, bio
- [ ] **Save Profile**: Changes persist after save

### ✅ Admin (if admin user)
- [ ] **Admin Screen**: Admin can access admin screen
- [ ] **View Users**: Shows list of users
- [ ] **Manage Users**: Can deactivate users

---

## 🐛 Known Issues & Solutions

### Issue 1: "Network request failed" or "Cannot connect to backend"

**Solution:**
- ✅ Verify backend server is running on port 5000
- ✅ For Android emulator: API should automatically use `10.0.2.2:5000`
- ✅ For iOS simulator: API should use `localhost:5000`
- ✅ For physical devices: Update API URL with your computer's IP address

**Find your IP:**
```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
# OR
ip addr
```

### Issue 2: "Failed to fetch notes"

**Solution:**
- ✅ Check backend is running
- ✅ Verify API URL in `src/services/api.js`
- ✅ Check console logs for specific error messages

### Issue 3: Upload fails

**Solution:**
- ✅ Ensure file is PDF or DOCX format
- ✅ Check file size (max 10MB)
- ✅ Verify backend is running
- ✅ Check network connectivity

### Issue 4: Can't connect on physical device

**Solution:**
1. Make sure device and computer are on same WiFi network
2. Update API URL with computer's local IP address:
   ```env
   EXPO_PUBLIC_API_URL=http://YOUR_LOCAL_IP:5000/api
   ```
3. Restart Expo server after changing `.env`
4. Check Windows Firewall allows port 5000

---

## 🔍 Debugging

### Check API Connection

Add this to any screen to test API connection:

```javascript
useEffect(() => {
  const testConnection = async () => {
    try {
      const res = await api.get('/health');
      console.log('✅ Backend connected:', res.data);
    } catch (error) {
      console.error('❌ Backend connection failed:', error.message);
      console.error('API URL:', api.defaults.baseURL);
    }
  };
  testConnection();
}, []);
```

### View API URL

The API URL is logged automatically. Check Expo console or React Native debugger.

### Check Network Requests

Use React Native Debugger or Flipper to inspect network requests:
- Request URLs
- Request headers
- Response data
- Error messages

---

## 🌐 Production Deployment

### Step 1: Update Production API URL

In `src/services/api.js`, update the production URL:

```javascript
if (__DEV__ === false) {
  return 'https://your-production-backend.com/api';
}
```

Or use environment variable:
```env
EXPO_PUBLIC_API_URL=https://your-production-backend.com/api
```

### Step 2: Build for Production

**Android:**
```bash
expo build:android
# OR
eas build --platform android
```

**iOS:**
```bash
expo build:ios
# OR
eas build --platform ios
```

### Step 3: Configure App Settings

Update `app.config.js`:
- App name
- Bundle identifier
- Version number
- Icons and splash screens

---

## 📋 Environment Variables

Create `.env` file in `NoteSphereMobile/` folder:

```env
EXPO_PUBLIC_API_URL=http://your-api-url.com/api
```

**Note:** Expo requires `EXPO_PUBLIC_` prefix for environment variables.

---

## 🎯 Next Steps

1. **Test all features** using the checklist above
2. **Test on both iOS and Android** if possible
3. **Test on physical devices** (most important for real-world testing)
4. **Fix any UI/UX issues** you discover
5. **Add missing features** (note detail screen, download functionality, etc.)
6. **Optimize performance** and add error handling improvements

---

## 📝 File Structure Summary

```
NoteSphereMobile/
├── src/
│   ├── components/       # Reusable components (NoteCard, LoadingSpinner)
│   ├── context/          # AuthContext for authentication
│   ├── navigation/       # AppNavigator with routing
│   ├── screens/          # All screen components
│   │   ├── auth/         # Login, Register
│   │   ├── main/         # Home, Browse, Upload, MyNotes, Profile
│   │   └── AdminScreen.js
│   ├── services/         # API service (api.js) ✅ FIXED
│   └── utils/            # Constants and utilities
├── App.js                # Root component
├── app.config.js         # Expo configuration
└── package.json          # Dependencies
```

---

## ✅ Summary

The mobile app is **ready for testing**! The main fixes were:

1. ✅ **API URL configuration** - Now works on emulators and devices
2. ✅ **Data structure access** - Fixed BrowseScreen and AdminScreen
3. ✅ **AuthContext** - Added missing `updateUser` function

**Next**: Start testing and report any issues you find!

---

**Happy Testing! 🚀**

