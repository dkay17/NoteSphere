import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { init(); }, []);

  const init = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const savedUser = await AsyncStorage.getItem('user');
      if (token && savedUser) setUser(JSON.parse(savedUser));
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

  const register = async (payload) => {
    const response = await api.post('/auth/register', payload);
    const { token, ...userData } = response.data;
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return userData;
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
