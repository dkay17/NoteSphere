import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import { COLORS } from '../../utils/constants';

const ProfileScreen = () => {
  const { user, updateUser, logout } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [institution, setInstitution] = useState(user?.institution || '');
  const [level, setLevel] = useState(user?.level || '');
  const [bio, setBio] = useState(user?.bio || '');

  const save = async () => {
    try {
      const res = await api.put('/auth/profile', { name, institution, level, bio });
      updateUser(res.data);
      Alert.alert('Saved', 'Profile updated');
    } catch (e) {
      Alert.alert('Error', e.response?.data?.message || 'Failed to update');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.role}>{user?.role?.toUpperCase()}</Text>

      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.input} value={institution} onChangeText={setInstitution} placeholder="Institution" />
      <TextInput style={styles.input} value={level} onChangeText={setLevel} placeholder="Level" />
      <TextInput style={[styles.input, { height: 90 }]} multiline value={bio} onChangeText={setBio} placeholder="Bio" />

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#6b7280' }]} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.bg },
  title: { fontSize: 22, fontWeight: '800', color: COLORS.text },
  role: { color: COLORS.muted, marginBottom: 14 },
  input: { backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: COLORS.border, padding: 12, marginTop: 12 },
  button: { backgroundColor: COLORS.primary, padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 14 },
  buttonText: { color: '#fff', fontWeight: '700' },
});

export default ProfileScreen;
