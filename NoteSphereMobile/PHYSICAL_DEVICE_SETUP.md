# 📱 Physical Device Setup Guide

## ❌ The Problem

When testing on a **physical Android phone** using Expo Go, the app can't connect to `localhost` or `10.0.2.2` because:
- `localhost` refers to the phone itself, not your computer
- `10.0.2.2` only works on Android emulator, not physical devices
- Your phone needs your **computer's actual IP address** on the network

---

## ✅ The Solution

### Step 1: Find Your Computer's IP Address

**Windows:**
1. Open PowerShell or Command Prompt
2. Run: `ipconfig`
3. Look for **"IPv4 Address"** under your WiFi adapter
   - Example: `192.168.1.100` or `192.168.0.50`

**Mac/Linux:**
1. Open Terminal
2. Run: `ifconfig` or `ip addr`
3. Look for **"inet"** address (usually starts with `192.168.` or `10.`)

### Step 2: Update API Configuration

Open `src/services/api.js` and find this line:

```javascript
const YOUR_LOCAL_IP = 'YOUR_IP_HERE'; // 👈 UPDATE THIS!
```

Replace `'YOUR_IP_HERE'` with your actual IP address (without `http://`):

```javascript
const YOUR_LOCAL_IP = '192.168.1.100'; // Your actual IP
```

**Example:**
- If your IP is `192.168.1.100`
- Change to: `const YOUR_LOCAL_IP = '192.168.1.100';`

### Step 3: Ensure Backend is Running

Make sure your backend server is running:

```bash
cd server
npm run dev
```

The server should be running on port 5000.

### Step 4: Verify Same WiFi Network

- ✅ Your computer and phone must be on the **same WiFi network**
- ✅ Check both are connected to the same router

### Step 5: Restart Expo

After updating the IP:
1. Stop Expo (Ctrl+C)
2. Restart: `npm start`
3. Scan QR code again with Expo Go

---

## 🔍 How to Verify It's Working

After updating the IP, check the Expo console/logs. You should see:

```
🔗 API URL: http://192.168.1.100:5000/api
📱 Platform: android
🔧 Environment: Development
```

If you still see `YOUR_IP_HERE`, the update didn't work - check the file was saved.

---

## 🐛 Troubleshooting

### Still Getting "Network Error" or "Cannot connect"?

1. **Check IP address is correct**
   - Run `ipconfig` again (IP can change)
   - Verify you updated the correct line in `api.js`

2. **Check backend is running**
   - Server should show: `🚀 Server running on port 5000`
   - Test in browser: `http://localhost:5000/api/health`

3. **Check firewall**
   - Windows Firewall might block port 5000
   - Allow Node.js through firewall or temporarily disable firewall

4. **Check WiFi network**
   - Phone and computer must be on same network
   - Some public WiFi blocks device-to-device connections

5. **Try using environment variable instead**

Create `.env` file in `NoteSphereMobile/` folder:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.100:5000/api
```

Replace `192.168.1.100` with your actual IP.

---

## 💡 Alternative: Use Environment Variable

Instead of editing `api.js`, you can use an environment variable:

1. Create `.env` file in `NoteSphereMobile/` folder:

```env
EXPO_PUBLIC_API_URL=http://YOUR_IP_ADDRESS:5000/api
```

2. Replace `YOUR_IP_ADDRESS` with your actual IP (e.g., `192.168.1.100`)

3. Restart Expo

---

## 📝 Quick Reference

**Find IP (Windows):**
```bash
ipconfig
# Look for IPv4 Address
```

**Find IP (Mac/Linux):**
```bash
ifconfig
# Look for inet address
```

**Update in code:**
- File: `src/services/api.js`
- Line: `const YOUR_LOCAL_IP = 'YOUR_IP_HERE';`
- Change to: `const YOUR_LOCAL_IP = '192.168.1.100';` (your IP)

---

## ✅ After Fixing

Once you update the IP address:
- ✅ Login should work
- ✅ Registration should work
- ✅ All API calls should connect

If it still doesn't work, check the error message - it will now tell you exactly what's wrong!

