import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import api from '../../services/api';
import { COLORS } from '../../utils/constants';

const UploadScreen = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [institution, setInstitution] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const pickFile = async () => {
    const res = await DocumentPicker.getDocumentAsync({ 
      type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      multiple: false 
    });
    if (res.canceled) return;
    const asset = res.assets?.[0];
    if (asset) setFile(asset);
  };

  const upload = async () => {
    if (!file || !title || !course || !institution) {
      Alert.alert('Missing', 'Please select a file and fill title, course, and institution.');
      return;
    }

    const form = new FormData();
    form.append('title', title);
    form.append('course', course);
    if (courseCode) form.append('courseCode', courseCode);
    if (lecturer) form.append('lecturer', lecturer);
    form.append('institution', institution);
    if (description) form.append('description', description);
    if (tags) form.append('tags', tags);
    form.append('file', {
      uri: file.uri,
      name: file.name || 'upload.pdf',
      type: file.mimeType || 'application/pdf',
    });

    try {
      await api.post('/notes/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Alert.alert('Success', 'Note uploaded successfully!');
      // Reset form
      setFile(null);
      setTitle('');
      setCourse('');
      setCourseCode('');
      setLecturer('');
      setInstitution('');
      setDescription('');
      setTags('');
    } catch (e) {
      Alert.alert('Upload failed', e.response?.data?.message || 'Please try again');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Upload a Note</Text>

      <TextInput style={styles.input} placeholder="Title *" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Course *" value={course} onChangeText={setCourse} />
      <TextInput style={styles.input} placeholder="Course Code (optional)" value={courseCode} onChangeText={setCourseCode} />
      <TextInput style={styles.input} placeholder="Lecturer (optional)" value={lecturer} onChangeText={setLecturer} />
      <TextInput style={styles.input} placeholder="Institution *" value={institution} onChangeText={setInstitution} />
      <TextInput style={[styles.input, { height: 90 }]} multiline placeholder="Description (optional)" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Tags (comma-separated, optional)" value={tags} onChangeText={setTags} />

      <TouchableOpacity style={[styles.button, { backgroundColor: '#6b7280' }]} onPress={pickFile}>
        <Text style={styles.buttonText}>{file ? file.name : 'Choose File'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={upload}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
    color: COLORS.text,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default UploadScreen;
