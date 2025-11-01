import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { COLORS } from '../../utils/constants';

const NoteDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params || {};
  const { isAuthenticated, isPremium } = useAuth();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [generatingSummary, setGeneratingSummary] = useState(false);

  useEffect(() => {
    if (id) {
      fetchNote();
    } else {
      Alert.alert('Error', 'Note ID not provided');
      navigation.goBack();
    }
  }, [id]);

  const fetchNote = async () => {
    try {
      const response = await api.get(`/notes/${id}`);
      setNote(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load note');
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!isAuthenticated) {
      Alert.alert('Login Required', 'Please login to download notes', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
      return;
    }

    setDownloading(true);
    try {
      // Get the token for authorization
      const token = await AsyncStorage.getItem('token');
      
      // Construct full download URL - backend serves files from /api/notes/download/:id
      const baseUrl = api.defaults.baseURL.replace('/api', '');
      const downloadUrl = `${baseUrl}/api/notes/download/${id}`;
      
      // Create file path
      const fileUri = FileSystem.documentDirectory + note.fileName;

      // Download file directly using FileSystem with auth header
      const downloadResult = await FileSystem.downloadAsync(downloadUrl, fileUri, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (downloadResult.status === 200) {
        // Check if sharing is available and share the file
        const isAvailable = await Sharing.isAvailableAsync();
        if (isAvailable) {
          await Sharing.shareAsync(downloadResult.uri, {
            mimeType: note.fileType === '.pdf' ? 'application/pdf' : 'application/msword',
            dialogTitle: 'Share Note',
          });
          Alert.alert('Success', 'Note downloaded and opened!');
        } else {
          Alert.alert('Success', `Note saved to: ${downloadResult.uri}`);
        }
      } else {
        throw new Error('Download failed');
      }
    } catch (error) {
      console.error('Download error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Download failed';
      if (errorMessage.includes('limit')) {
        Alert.alert('Download Limit', errorMessage);
      } else {
        Alert.alert('Error', errorMessage);
      }
    } finally {
      setDownloading(false);
    }
  };

  const generateSummary = async () => {
    if (!isPremium) {
      Alert.alert('Premium Required', 'Premium subscription is required to generate AI summaries');
      return;
    }

    setGeneratingSummary(true);
    try {
      const response = await api.post(`/notes/${id}/summary`);
      setNote({ ...note, summary: response.data.summary });
      Alert.alert('Success', 'AI summary generated!');
    } catch (error) {
      Alert.alert('Error', 'Failed to generate summary');
    } finally {
      setGeneratingSummary(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading note...</Text>
      </View>
    );
  }

  if (!note) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Note not found</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>{note.title}</Text>
        {note.courseCode && (
          <Text style={styles.courseCode}>{note.courseCode}</Text>
        )}
        <Text style={styles.course}>{note.course}</Text>
      </View>

      {note.description && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{note.description}</Text>
        </View>
      )}

      <View style={styles.infoGrid}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Uploader</Text>
          <Text style={styles.infoValue}>{note.uploader?.name || 'Unknown'}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Institution</Text>
          <Text style={styles.infoValue}>{note.institution}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Downloads</Text>
          <Text style={styles.infoValue}>{note.downloads || 0}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Rating</Text>
          <Text style={styles.infoValue}>⭐ {note.rating?.toFixed(1) || '0.0'}</Text>
        </View>
      </View>

      {note.summary && (
        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>✨ AI Summary</Text>
          <Text style={styles.summary}>{note.summary}</Text>
        </View>
      )}

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.downloadButton]}
          onPress={handleDownload}
          disabled={downloading}
        >
          {downloading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>📥 Download</Text>
          )}
        </TouchableOpacity>

        {isPremium && !note.summary && (
          <TouchableOpacity
            style={[styles.button, styles.summaryButton]}
            onPress={generateSummary}
            disabled={generatingSummary}
          >
            {generatingSummary ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>✨ Generate Summary</Text>
            )}
          </TouchableOpacity>
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
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
  },
  loadingText: {
    marginTop: 12,
    color: COLORS.muted,
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 8,
  },
  courseCode: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  course: {
    fontSize: 18,
    color: COLORS.muted,
    fontWeight: '500',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 24,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoItem: {
    width: '50%',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: COLORS.muted,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  summarySection: {
    backgroundColor: '#f3e8ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e9d5ff',
  },
  summary: {
    fontSize: 15,
    color: COLORS.text,
    lineHeight: 22,
  },
  actions: {
    marginTop: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  downloadButton: {
    backgroundColor: COLORS.primary,
  },
  summaryButton: {
    backgroundColor: '#9333ea',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  errorText: {
    fontSize: 16,
    color: COLORS.muted,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default NoteDetailScreen;

