import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Star, User, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NoteCard = ({ note }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card hover:shadow-xl transition-shadow"
    >
      <Link to={`/notes/${note.id}`}>
        <div className="flex items-start gap-4">
          {/* File Icon */}
          <div className="bg-primary-100 p-3 rounded-lg">
            <FileText className="w-8 h-8 text-primary-600" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {note.title}
              </h3>
              {note.verified && (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              )}
            </div>

            <p className="text-sm text-primary-600 font-medium mt-1">
              {note.course} {note.courseCode && `(${note.courseCode})`}
            </p>

            {note.description && (
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {note.description}
              </p>
            )}

            {/* Tags */}
            {note.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {note.tags.split(',').slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{note.uploader?.name || 'Anonymous'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>{note.downloads} downloads</span>
              </div>
              {note.rating > 0 && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{note.rating.toFixed(1)}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(note.createdAt)}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="text-sm text-gray-600">
                <span className="font-medium">{note.institution}</span>
                {note.lecturer && <span> • {note.lecturer}</span>}
              </div>
              <div className="text-xs text-gray-500">
                {formatFileSize(note.fileSize)} • {note.fileType.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NoteCard;
