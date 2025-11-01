import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Home, Upload, FileText, User, LogOut, Menu, X, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/browse', label: 'Browse', icon: BookOpen },
    ...(isAuthenticated ? [
      { to: '/upload', label: 'Upload', icon: Upload },
      { to: '/my-notes', label: 'My Notes', icon: FileText },
    ] : []),
    ...(isAdmin ? [
      { to: '/admin', label: 'Admin', icon: Shield },
    ] : []),
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">NoteSphere</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <link.icon className="w-4 h-4" />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">{user?.name}</span>
                  {user?.isPremium && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      Premium
                    </span>
                  )}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-primary-600 py-2"
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-primary-600 py-2"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Profile</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-red-600 hover:text-red-700 py-2 w-full"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </>
            ) : (
              <div className="space-y-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full btn-secondary text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full btn-primary text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
