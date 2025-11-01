import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import api from '../utils/api';
import NoteCard from '../components/NoteCard';
import Loader from '../components/Loader';
import { useToast } from '../hooks/useToast';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    fetchMyNotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMyNotes = async () => {
    try {
      const response = await api.get('/notes/my-notes');
      setNotes(response.data);
    } catch (error) {
      addToast('Failed to load notes', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter(note => note.id !== id));
      addToast('Note deleted successfully', 'success');
    } catch (error) {
      addToast('Failed to delete note', 'error');
    }
  };

  if (loading) return <Loader fullScreen />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Notes</h1>
          <p className="text-gray-600">Manage your uploaded notes</p>
        </motion.div>

        {notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div key={note.id} className="relative">
                <NoteCard note={note} />
                <button onClick={() => handleDelete(note.id)} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">You haven't uploaded any notes yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNotes;
