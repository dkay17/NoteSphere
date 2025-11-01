import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Download, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import api from '../utils/api';
import Loader from '../components/Loader';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get('/admin/dashboard');
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const verifyNote = async (noteId, verified) => {
    try {
      await api.put(`/admin/notes/${noteId}/verify`, { verified });
      fetchDashboard();
    } catch (error) {
      console.error('Error verifying note:', error);
    }
  };

  if (loading) return <Loader fullScreen />;

  const statCards = [
    { title: 'Total Users', value: stats?.stats.totalUsers, icon: Users, color: 'bg-blue-500' },
    { title: 'Total Notes', value: stats?.stats.totalNotes, icon: FileText, color: 'bg-green-500' },
    { title: 'Total Downloads', value: stats?.stats.totalDownloads, icon: Download, color: 'bg-purple-500' },
    { title: 'Premium Users', value: stats?.stats.premiumUsers, icon: TrendingUp, color: 'bg-yellow-500' },
  ];

  const monthlyData = {
    labels: stats?.monthlyUploads.map(m => m.month) || [],
    datasets: [{
      label: 'Monthly Uploads',
      data: stats?.monthlyUploads.map(m => m.count) || [],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
    }]
  };

  const institutionData = {
    labels: stats?.topInstitutions.map(i => i.institution) || [],
    datasets: [{
      label: 'Notes by Institution',
      data: stats?.topInstitutions.map(i => i.noteCount) || [],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
    }]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Platform analytics and management</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="card">
              <div className="flex items-center gap-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Upload Trend</h3>
            <Line data={monthlyData} options={{ responsive: true, maintainAspectRatio: true }} />
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Institutions</h3>
            <Pie data={institutionData} options={{ responsive: true, maintainAspectRatio: true }} />
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Uploads</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Title</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Uploader</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {stats?.recentUploads.map((note) => (
                  <tr key={note.id}>
                    <td className="px-4 py-3 text-sm">{note.title}</td>
                    <td className="px-4 py-3 text-sm">{note.uploader?.name}</td>
                    <td className="px-4 py-3">
                      {note.verified ? (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Verified</span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => verifyNote(note.id, true)} className="text-green-600 hover:text-green-700">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button onClick={() => verifyNote(note.id, false)} className="text-red-600 hover:text-red-700">
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
