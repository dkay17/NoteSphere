import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import Loader from '../components/Loader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Browse = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchNotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const params = { page: currentPage, limit: 12, search: searchTerm, ...filters };
      const response = await api.get('/notes', { params });
      setNotes(response.data.notes);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term, searchFilters) => {
    setSearchTerm(term);
    setFilters(searchFilters);
    setCurrentPage(1);
    fetchNotes();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse Notes</h1>
          <p className="text-gray-600">Discover and download study materials</p>
        </motion.div>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} onFilter={setFilters} />
        </div>

        {loading ? (
          <Loader />
        ) : notes.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {notes.map((note, index) => (
                <motion.div key={note.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <NoteCard note={note} />
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="btn-secondary disabled:opacity-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="btn-secondary disabled:opacity-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No notes found. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
