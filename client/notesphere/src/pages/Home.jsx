import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Download, Star, TrendingUp, ArrowRight } from 'lucide-react';
import api from '../utils/api';
import NoteCard from '../components/NoteCard';
import Loader from '../components/Loader';

const Home = () => {
  const [latestNotes, setLatestNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalNotes: 0, totalDownloads: 0 });

  useEffect(() => {
    fetchLatestNotes();
  }, []);

  const fetchLatestNotes = async () => {
    try {
      const response = await api.get('/notes?limit=6&sortBy=createdAt');
      setLatestNotes(response.data.notes);
      setStats({
        totalNotes: response.data.totalNotes,
        totalDownloads: response.data.notes.reduce((sum, note) => sum + note.downloads, 0),
      });
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: Upload,
      title: 'Share Notes',
      description: 'Upload and share your lecture notes with fellow students',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Download,
      title: 'Access Materials',
      description: 'Download notes, past questions, and study materials',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Star,
      title: 'AI Summaries',
      description: 'Get AI-generated summaries for quick revision',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Premium Access',
      description: 'Unlimited downloads and exclusive features',
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to NoteSphere
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Your collaborative platform for sharing and accessing academic materials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/browse" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Browse Notes
              </Link>
              <Link to="/register" className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white">
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold">{stats.totalNotes}+</div>
              <div className="text-primary-200 mt-1">Notes Shared</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">{stats.totalDownloads}+</div>
              <div className="text-primary-200 mt-1">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-primary-200 mt-1">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-primary-200 mt-1">Free to Join</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NoteSphere?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Notes</h2>
            <Link to="/browse" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of students sharing and accessing quality academic materials
          </p>
          <Link to="/register" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
