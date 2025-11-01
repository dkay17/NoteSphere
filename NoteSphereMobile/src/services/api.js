import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

// Determine API URL based on platform and environment
const getApiUrl = () => {
  // Check for explicit environment variable first (highest priority)
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  // For production, use your deployed backend URL
  if (__DEV__ === false) {
    return 'https://your-backend-url.com/api';
  }

  // Check if running in Expo Go (physical device)
  const isPhysicalDevice = Constants.isDevice;
  const isExpoGo = Constants.executionEnvironment === 'storeClient';

  // Development URLs based on platform and device type
  if (Platform.OS === 'android') {
    if (isPhysicalDevice || isExpoGo) {
      // Physical Android device - needs actual IP address
      // Default fallback - USER MUST UPDATE THIS WITH THEIR IP
      // Find your IP: Windows (ipconfig), Mac/Linux (ifconfig)
      // Example: 'http://192.168.1.100:5000/api'
      const YOUR_LOCAL_IP = '10.21.205.167'; // 👈 UPDATE THIS!
      
      if (YOUR_LOCAL_IP === 'YOUR_IP_HERE') {
        console.warn('⚠️ Please update YOUR_LOCAL_IP in src/services/api.js with your computer\'s IP address');
        console.warn('   Windows: Run "ipconfig" and find IPv4 Address');
        console.warn('   Mac/Linux: Run "ifconfig" and find inet address');
      }
      
      return YOUR_LOCAL_IP !== 'YOUR_IP_HERE' 
        ? `http://${YOUR_LOCAL_IP}:5000/api`
        : 'http://10.0.2.2:5000/api'; // Fallback for emulator
    } else {
      // Android emulator uses special IP to access host machine
      return 'http://10.0.2.2:5000/api';
    }
  } else if (Platform.OS === 'ios') {
    if (isPhysicalDevice || isExpoGo) {
      // Physical iOS device - needs actual IP address
      const YOUR_LOCAL_IP = 'YOUR_IP_HERE'; // 👈 UPDATE THIS!
      
      if (YOUR_LOCAL_IP === 'YOUR_IP_HERE') {
        console.warn('⚠️ Please update YOUR_LOCAL_IP in src/services/api.js with your computer\'s IP address');
      }
      
      return YOUR_LOCAL_IP !== 'YOUR_IP_HERE'
        ? `http://${YOUR_LOCAL_IP}:5000/api`
        : 'http://localhost:5000/api'; // Fallback for simulator
    } else {
      // iOS simulator can use localhost
      return 'http://localhost:5000/api';
    }
  }

  // Final fallback
  return 'http://localhost:5000/api';
};

const API_URL = getApiUrl();

// Log API URL for debugging
console.log('🔗 API URL:', API_URL);
console.log('📱 Platform:', Platform.OS);
console.log('🔧 Environment:', __DEV__ ? 'Development' : 'Production');

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

export default api;
