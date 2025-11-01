import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import api from '../services/api';
import { COLORS } from '../utils/constants';

const AdminScreen = () => {
  const [users, setUsers] = useState([]);

  const load = async () => {
    try {
      const res = await api.get('/admin/users');
      // Backend returns { users: [...], totalPages: X, totalUsers: Y }
      setUsers(res.data.users || res.data || []);
    } catch (e) {
      Alert.alert('Error', e.response?.data?.message || 'Failed to fetch users');
    }
  };

  useEffect(() => { load(); }, []);

  const deactivate = async (id) => {
    try {
      await api.put(`/admin/users/${id}`, { isActive: false });
      load();
    } catch (e) {
      Alert.alert('Error', e.response?.data?.message || 'Failed to update user');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin - Users</Text>
      <FlatList
        data={users}
        keyExtractor={(u) => String(u.id)}
        renderItem={({ item }) => (
          <View style={styles.userRow}>
            <Text style={styles.userName}>{item.name} ({item.email})</Text>
            <TouchableOpacity style={styles.deactivateBtn} onPress={() => deactivate(item.id)}>
              <Text style={styles.deactivateText}>Deactivate</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No users found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.bg },
  title: { fontSize: 20, fontWeight: '800', marginBottom: 10, color: COLORS.text },
  userRow: { backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: COLORS.border, padding: 12, marginBottom: 10 },
  userName: { color: COLORS.text, marginBottom: 8 },
  deactivateBtn: { backgroundColor: '#ef4444', padding: 10, borderRadius: 8, alignItems: 'center' },
  deactivateText: { color: '#fff', fontWeight: '700' },
  empty: { textAlign: 'center', color: COLORS.muted, marginTop: 20 },
});

export default AdminScreen;
