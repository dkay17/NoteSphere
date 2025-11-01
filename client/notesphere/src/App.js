import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider, useToast } from './context/ToastContext';
import { ToastContainer } from './components/Toast';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Browse from './pages/Browse';
import Upload from './pages/Upload';
import NoteDetail from './pages/NoteDetail';
import MyNotes from './pages/MyNotes';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';

function AppContent() {
  const { toasts, removeToast } = useToast();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          
          <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
          <Route path="/my-notes" element={<ProtectedRoute><MyNotes /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
