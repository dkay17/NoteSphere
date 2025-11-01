# 📱 Mobile App Setup Guide - React Native

This guide explains how to structure and set up the React Native mobile version of NoteSphere.

## ✅ Answer: Yes, Use the Same Backend!

**The backend API is platform-agnostic** - it's a REST API that doesn't care if requests come from:
- Web (React)
- Mobile (React Native)
- Desktop app
- Any other HTTP client

You only need to build the **frontend** for mobile. The backend in `server/` will handle both web and mobile requests.

---

## 📁 Recommended Folder Structure

You have **two good options**:

### Option 1: Mobile at Root Level (Recommended)

```
NoteSphere/
├── server/                    # Backend API (shared by web & mobile)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── client/
│   └── notesphere/           # React web app (current)
│       ├── src/
│       └── ...
└── mobile/                    # React Native app (NEW)
    ├── android/
    ├── ios/
    ├── src/
    │   ├── screens/           # Equivalent to pages/
    │   ├── components/
    │   ├── context/
    │   ├── navigation/
    │   ├── services/          # API calls (like utils/api.js)
    │   └── utils/
    ├── App.js
    ├── package.json
    └── ...
```

**Pros:**
- Clear separation of concerns
- Easy to find mobile-specific files
- Root level makes it obvious it's a separate app

### Option 2: Mobile Inside Client Folder

```
NoteSphere/
├── server/
├── client/
│   ├── notesphere/            # React web app
│   └── mobile/                # React Native app (NEW)
│       ├── android/
│       ├── ios/
│       ├── src/
│       └── ...
```

**Pros:**
- All frontends grouped together
- Consistent with existing structure

**Recommendation:** Go with **Option 1** (mobile at root level) - it's clearer and more scalable.

---

## 🔌 Backend Connection

### Current Web API Setup
Your web app uses: `http://localhost:5000/api` (from `client/notesphere/src/utils/api.js`)

### Mobile API Setup
Your mobile app will connect to the **exact same endpoints**:
- Base URL: `http://localhost:5000/api` (development)
- Production: Your deployed backend URL

The mobile app will make the same API calls:
- `POST /api/auth/login`
- `GET /api/notes`
- `POST /api/notes/upload`
- etc.

### Differences Between Web and Mobile

| Aspect | Web (React) | Mobile (React Native) |
|--------|------------|----------------------|
| **Storage** | `localStorage` | `AsyncStorage` or `SecureStore` |
| **Navigation** | React Router | React Navigation |
| **HTTP Client** | Axios | Axios or Fetch |
| **File Upload** | HTML file input | `react-native-document-picker` or `expo-document-picker` |
| **File Download** | Browser download | `react-native-fs` or `expo-file-system` |
| **Styling** | CSS/Tailwind | StyleSheet / styled-components |
| **Authentication** | localStorage | AsyncStorage / SecureStore |

---

## 🚀 Setting Up React Native

### Prerequisites

Install React Native CLI and dependencies:

```bash
# Install React Native CLI globally
npm install -g react-native-cli

# Or use npx (recommended - no global install needed)
npx react-native@latest init NoteSphereMobile
```

### For Expo (Easier - Recommended for Beginners)

```bash
# Install Expo CLI
npm install -g expo-cli

# Or use npx
npx create-expo-app NoteSphereMobile

cd NoteSphereMobile
```

**Expo Benefits:**
- Easier setup (no need for Android Studio / Xcode initially)
- Built-in file system and document picker
- Over-the-air updates
- Easier deployment

### For React Native CLI (More Control)

```bash
# Create React Native app
npx react-native init NoteSphereMobile --version latest

cd NoteSphereMobile
```

**CLI Benefits:**
- Full native control
- Custom native modules
- No limitations

---

## 📦 Essential Dependencies for Mobile

### Core Dependencies

```bash
# Navigation
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs

# Navigation dependencies
npm install react-native-screens react-native-safe-area-context

# State Management (if using Context API like web version)
# No extra package needed - React Context works the same

# HTTP Client
npm install axios

# Storage (instead of localStorage)
npm install @react-native-async-storage/async-storage

# For Expo users:
expo install expo-secure-store
```

### File Handling

```bash
# Document picker (for file uploads)
npm install react-native-document-picker

# File system (for downloads)
npm install react-native-fs

# For Expo:
expo install expo-document-picker expo-file-system
```

### UI Components (Optional - but recommended)

```bash
# React Native Elements or NativeBase
npm install react-native-elements react-native-vector-icons
# OR
npm install native-base

# For Expo:
expo install @expo/vector-icons
```

---

## 🏗️ Project Structure Example

```
mobile/
├── android/                    # Android native code
├── ios/                        # iOS native code
├── src/
│   ├── screens/                # Screen components (like pages/)
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── BrowseScreen.js
│   │   ├── UploadScreen.js
│   │   ├── NoteDetailScreen.js
│   │   ├── ProfileScreen.js
│   │   └── AdminDashboardScreen.js
│   ├── components/             # Reusable components
│   │   ├── NoteCard.js
│   │   ├── SearchBar.js
│   │   ├── Loader.js
│   │   └── Toast.js
│   ├── navigation/             # Navigation configuration
│   │   └── AppNavigator.js
│   ├── context/                # React Context (same as web)
│   │   ├── AuthContext.js
│   │   └── ToastContext.js
│   ├── services/               # API services
│   │   └── api.js             # Similar to web utils/api.js
│   ├── utils/                  # Utility functions
│   │   └── storage.js         # AsyncStorage wrapper
│   └── hooks/                  # Custom hooks
│       └── useToast.js
├── App.js                      # Root component
├── app.json                    # App configuration
├── package.json
└── ...
```

---

## 🔧 API Service Setup (Mobile Version)

Create `mobile/src/services/api.js`:

```javascript
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// For development, use your local IP address
// On Android emulator: use 10.0.2.2 instead of localhost
// On iOS simulator: use localhost or your Mac's IP
// For production: use your deployed backend URL
const API_URL = __DEV__ 
  ? 'http://YOUR_LOCAL_IP:5000/api'  // Change to your IP
  : 'https://your-production-api.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests (using AsyncStorage instead of localStorage)
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      // Navigate to login screen (you'll handle this with navigation)
    }
    return Promise.reject(error);
  }
);

export default api;
```

**Important:** Replace `YOUR_LOCAL_IP` with your actual local IP address:
- Windows: Run `ipconfig` and find your IPv4 address
- Mac/Linux: Run `ifconfig` or `ip addr`

---

## 📱 Auth Context (Mobile Version)

Create `mobile/src/context/AuthContext.js` (similar to web version):

```javascript
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const savedUser = await AsyncStorage.getItem('user');
      
      if (token && savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    const { token, ...userData } = response.data;
    
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    
    return userData;
  };

  const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    const { token, ...user } = response.data;
    
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    
    return user;
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  const updateUser = async (userData) => {
    setUser(userData);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isPremium: user?.isPremium || user?.role === 'admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
```

---

## 🚀 Development Workflow

### 1. Start Backend (if not running)
```bash
cd server
npm run dev
```

### 2. Start Mobile App

**For Expo:**
```bash
cd mobile
npm start
# Then press 'i' for iOS or 'a' for Android
```

**For React Native CLI:**
```bash
cd mobile
# iOS
npm run ios

# Android
npm run android
```

### 3. Development Tips

1. **Use same backend** - Your `server/` runs on port 5000
2. **Update API URL** - Change `YOUR_LOCAL_IP` in mobile API config
3. **Test on real device** - Sometimes easier than emulator
4. **Hot Reload** - Both Expo and RN CLI support fast refresh

---

## 📝 Key Differences to Remember

### 1. Storage
- **Web**: `localStorage.setItem('token', value)`
- **Mobile**: `await AsyncStorage.setItem('token', value)`

### 2. File Upload
- **Web**: `<input type="file">`
- **Mobile**: Use `react-native-document-picker`:
```javascript
import DocumentPicker from 'react-native-document-picker';

const pickFile = async () => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf, DocumentPicker.types.doc],
    });
    return res;
  } catch (err) {
    // User cancelled
  }
};
```

### 3. File Download
- **Web**: Browser download
- **Mobile**: Save to device storage:
```javascript
import RNFS from 'react-native-fs';
import { Platform, PermissionsAndroid } from 'react-native';

const downloadFile = async (url, fileName) => {
  // Request permissions (Android)
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
  }
  
  const downloadDest = `${RNFS.DownloadDirectoryPath}/${fileName}`;
  const result = await RNFS.downloadFile({
    fromUrl: url,
    toFile: downloadDest,
  }).promise;
  
  return downloadDest;
};
```

### 4. Navigation
- **Web**: `<Link to="/login">` (React Router)
- **Mobile**: `navigation.navigate('Login')` (React Navigation)

---

## 🎯 Next Steps

1. **Choose Expo or React Native CLI** (I recommend Expo for easier start)
2. **Create mobile folder** at root level
3. **Initialize React Native app** in that folder
4. **Set up API service** with your backend URL
5. **Implement Auth Context** (similar to web version)
6. **Create screens** matching your web pages
7. **Test connection** to your backend
8. **Build and test** on device

---

## 📚 Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

---

## ✅ Summary

- ✅ **Use same backend** (`server/` folder)
- ✅ **Create mobile folder** at root level (recommended)
- ✅ **Only build frontend** for mobile
- ✅ **Reuse same API endpoints**
- ✅ **Adapt storage** (AsyncStorage instead of localStorage)
- ✅ **Use React Navigation** instead of React Router

The backend doesn't need any changes - it's already ready to handle mobile requests! 🎉

