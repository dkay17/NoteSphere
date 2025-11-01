import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, FileText, Star, Sparkles, ArrowLeft } from 'lucide-react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../hooks/useToast';
import Loader from '../components/Loader';

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, isPremium } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();

  useEffect(() => {
    fetchNote();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchNote = async () => {
    try {
      const response = await api.get(`/notes/${id}`);
      setNote(response.data);
    } catch (error) {
      addToast('Failed to load note', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!isAuthenticated) {
      addToast('Please login to download', 'warning');
      navigate('/login');
      return;
    }

    try {
      const response = await api.get(`/notes/download/${id}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', note.fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
      addToast('Download started!', 'success');
    } catch (error) {
      addToast(error.response?.data?.message || 'Download failed', 'error');
    }
  };

  const generateSummary = async () => {
    if (!isPremium) {
      addToast('Premium subscription required', 'warning');
      return;
    }

    try {
      const response = await api.post(`/notes/${id}/summary`);
      setNote({ ...note, summary: response.data.summary });
      addToast('Summary generated!', 'success');
    } catch (error) {
      addToast('Failed to generate summary', 'error');
    }
  };

  if (loading) return <Loader fullScreen />;
  if (!note) return <div className="text-center py-12">Note not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary-100 p-4 rounded-lg">
              <FileText className="w-12 h-12 text-primary-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{note.title}</h1>
              <p className="text-xl text-primary-600 font-medium">{note.course} {note.courseCode && `(${note.courseCode})`}</p>
            </div>
          </div>

          {note.description && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700">{note.description}</p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Uploader</p>
              <p className="font-medium">{note.uploader?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Institution</p>
              <p className="font-medium">{note.institution}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Downloads</p>
              <p className="font-medium">{note.downloads}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Rating</p>
              <p className="font-medium flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {note.rating.toFixed(1)}
              </p>
            </div>
          </div>

          {note.summary && (
            <div className="mb-6 p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                AI Summary
              </h3>
              <p className="text-gray-700">{note.summary}</p>
            </div>
          )}

          <div className="flex gap-4">
            <button onClick={handleDownload} className="btn-primary flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download
            </button>
            {isPremium && !note.summary && (
              <button onClick={generateSummary} className="btn-secondary flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Generate Summary
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NoteDetail;
