import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/constants';

const NoteCard = ({ note, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>{note.title}</Text>
        {note.verified ? <Text style={styles.verified}>Verified</Text> : null}
      </View>
      <Text style={styles.course}>{note.course}</Text>
      <View style={styles.meta}>
        <Text style={styles.metaText}>By {note?.uploader?.name || 'Unknown'}</Text>
        <Text style={styles.metaText}>{note.downloads || 0} downloads</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 16, fontWeight: '700', color: COLORS.text, flex: 1, marginRight: 10 },
  verified: { fontSize: 12, color: '#10b981', fontWeight: '600' },
  course: { marginTop: 6, color: COLORS.muted },
  meta: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' },
  metaText: { color: COLORS.muted, fontSize: 12 }
});

export default NoteCard;
