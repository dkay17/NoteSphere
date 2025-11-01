import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import NoteCard from '../../components/NoteCard';
import { COLORS } from '../../utils/constants';

const MyNotesScreen = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);

  const fetchMyNotes = async () => {
    const res = await api.get('/notes/my-notes');
    setNotes(res.data || []);
  };

  useEffect(() => { fetchMyNotes(); }, []);

  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n.id !== id));
    } catch (e) {
      Alert.alert('Error', e.response?.data?.message || 'Failed to delete');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View>
            <NoteCard 
              note={item} 
              onPress={() => navigation.navigate('NoteDetail', { id: item.id })} 
            />
            <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteNote(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No uploads yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.bg },
  deleteBtn: { backgroundColor: '#ef4444', padding: 10, borderRadius: 8, marginBottom: 12, alignItems: 'center' },
  deleteText: { color: '#fff', fontWeight: '700' },
  empty: { textAlign: 'center', color: COLORS.muted, marginTop: 20 },
});

export default MyNotesScreen;
