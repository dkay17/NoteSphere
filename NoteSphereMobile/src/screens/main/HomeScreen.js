import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { COLORS } from '../../utils/constants';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import NoteCard from '../../components/NoteCard';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  const [latestNotes, setLatestNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalNotes: 0, totalDownloads: 0 });

  useEffect(() => {
    fetchLatestNotes();
  }, []);

  const fetchLatestNotes = async () => {
    try {
      const response = await api.get('/notes?limit=6&sortBy=createdAt');
      setLatestNotes(response.data.notes || []);
      setStats({
        totalNotes: response.data.totalNotes || 0,
        totalDownloads: (response.data.notes || []).reduce((sum, note) => sum + (note.downloads || 0), 0),
      });
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to NoteSphere</Text>
        <Text style={styles.subtitle}>Hi {user?.name || 'there'} 👋</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{stats.totalNotes}+</Text>
          <Text style={styles.statLabel}>Notes Shared</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{stats.totalDownloads}+</Text>
          <Text style={styles.statLabel}>Downloads</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Browse')}>
          <Text style={styles.actionText}>Browse Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Upload')}>
          <Text style={styles.actionText}>Upload Note</Text>
        </TouchableOpacity>
      </View>

      {/* Latest Notes Section */}
      <View style={styles.latestSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Latest Notes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Browse')}>
            <Text style={styles.viewAll}>View All →</Text>
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.primary} style={styles.loader} />
        ) : latestNotes.length > 0 ? (
          <View>
            {latestNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onPress={() => navigation.navigate('NoteDetail', { id: note.id })}
              />
            ))}
          </View>
        ) : (
          <Text style={styles.emptyText}>No notes available yet</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 6,
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.muted,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.muted,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  actionBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 10,
    minWidth: 140,
  },
  actionText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  latestSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },
  viewAll: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  loader: {
    marginVertical: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: COLORS.muted,
    marginVertical: 20,
  },
});

export default HomeScreen;
