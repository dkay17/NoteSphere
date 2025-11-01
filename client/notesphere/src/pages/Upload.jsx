import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload as UploadIcon, FileText } from 'lucide-react';
import api from '../utils/api';
import { useToast } from '../hooks/useToast';

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '', course: '', courseCode: '', lecturer: '', institution: '', tags: '', description: ''
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      addToast('Please select a file', 'error');
      return;
    }

    setLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    data.append('file', file);

    try {
      await api.post('/notes/upload', data, { headers: { 'Content-Type': 'multipart/form-data' } });
      addToast('Note uploaded successfully!', 'success');
      navigate('/my-notes');
    } catch (error) {
      addToast(error.response?.data?.message || 'Upload failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Upload Note</h1>
          <p className="text-gray-600 mb-8">Share your notes with fellow students</p>
        </motion.div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
              <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="input-field" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course *</label>
                <input type="text" required value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Code</label>
                <input type="text" value={formData.courseCode} onChange={(e) => setFormData({ ...formData, courseCode: e.target.value })} className="input-field" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lecturer</label>
                <input type="text" value={formData.lecturer} onChange={(e) => setFormData({ ...formData, lecturer: e.target.value })} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Institution *</label>
                <input type="text" required value={formData.institution} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} className="input-field" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
              <input type="text" value={formData.tags} onChange={(e) => setFormData({ ...formData, tags: e.target.value })} placeholder="Lecture Notes, Past Questions, Summary" className="input-field" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows="4" className="input-field" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">File (PDF/DOCX, Max 10MB) *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0])} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer text-primary-600 hover:text-primary-700 font-medium">
                  {file ? file.name : 'Click to upload file'}
                </label>
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50">
              {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><UploadIcon className="w-5 h-5" /><span>Upload Note</span></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
