import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    institution: '',
    course: '',
    lecturer: '',
    tags: '',
    sortBy: 'createdAt',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, filters);
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      institution: '',
      course: '',
      lecturer: '',
      tags: '',
      sortBy: 'createdAt',
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search notes by title, course, or description..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="btn-secondary flex items-center gap-2"
        >
          <Filter className="w-5 h-5" />
          <span className="hidden sm:inline">Filters</span>
        </button>
        <button type="submit" className="btn-primary">
          Search
        </button>
      </form>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institution
                </label>
                <input
                  type="text"
                  value={filters.institution}
                  onChange={(e) => handleFilterChange('institution', e.target.value)}
                  placeholder="e.g., University of Ghana"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course
                </label>
                <input
                  type="text"
                  value={filters.course}
                  onChange={(e) => handleFilterChange('course', e.target.value)}
                  placeholder="e.g., Computer Science"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lecturer
                </label>
                <input
                  type="text"
                  value={filters.lecturer}
                  onChange={(e) => handleFilterChange('lecturer', e.target.value)}
                  placeholder="e.g., Dr. Mensah"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="input-field"
                >
                  <option value="createdAt">Most Recent</option>
                  <option value="downloads">Most Downloaded</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
