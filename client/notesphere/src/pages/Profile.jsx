import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Edit2, Save } from 'lucide-react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../hooks/useToast';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '', institution: '', level: '', bio: ''
  });
  const { addToast } = useToast();

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        institution: user.institution || '',
        level: user.level || '',
        bio: user.bio || ''
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put('/auth/profile', formData);
      updateUser(response.data);
      setEditing(false);
      addToast('Profile updated successfully', 'success');
    } catch (error) {
      addToast('Failed to update profile', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information</p>
        </motion.div>

        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary-100 p-4 rounded-full">
                <User className="w-12 h-12 text-primary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
            </div>
            {user?.isPremium && (
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
                Premium Member
              </span>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={!editing} className="input-field disabled:bg-gray-100" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" value={user?.email} disabled className="input-field bg-gray-100" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                <input type="text" value={formData.institution} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} disabled={!editing} className="input-field disabled:bg-gray-100" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <input type="text" value={formData.level} onChange={(e) => setFormData({ ...formData, level: e.target.value })} disabled={!editing} className="input-field disabled:bg-gray-100" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} disabled={!editing} rows="4" className="input-field disabled:bg-gray-100" />
            </div>

            <div className="flex gap-4">
              {editing ? (
                <>
                  <button type="submit" className="btn-primary flex items-center gap-2">
                    <Save className="w-5 h-5" />
                    Save Changes
                  </button>
                  <button type="button" onClick={() => setEditing(false)} className="btn-secondary">
                    Cancel
                  </button>
                </>
              ) : (
                <button type="button" onClick={() => setEditing(true)} className="btn-primary flex items-center gap-2">
                  <Edit2 className="w-5 h-5" />
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
