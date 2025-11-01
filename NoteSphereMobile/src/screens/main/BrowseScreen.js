import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import NoteCard from '../../components/NoteCard';
import { COLORS } from '../../utils/constants';

const BrowseScreen = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [query, setQuery] = useState('');
  const [institution, setInstitution] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchNotes = async (page = 1) => {
    try {
      const params = {
        page,
        limit: 20,
        search: query || undefined,
        institution: institution || undefined,
        sortBy: sortBy || 'createdAt',
        order: 'DESC',
      };
      
      // Remove undefined params
      Object.keys(params).forEach(key => params[key] === undefined && delete params[key]);
      
      const res = await api.get('/notes', { params });
      // Backend returns { notes: [...], totalNotes: X, currentPage: Y, totalPages: Z }
      setNotes(res.data.notes || []);
      setTotalPages(res.data.totalPages || 1);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setNotes([]);
    }
  };

  useEffect(() => {
    fetchNotes(1);
  }, [sortBy, institution]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchNotes(1);
    } finally {
      setRefreshing(false);
    }
  }, [query, institution, sortBy]);

  const handleSearch = () => {
    fetchNotes(1);
  };

  const filtered = notes.filter((n) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      n.title?.toLowerCase().includes(q) ||
      n.course?.toLowerCase().includes(q) ||
      n.courseCode?.toLowerCase().includes(q) ||
      n.description?.toLowerCase().includes(q)
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search by title, course, or description..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
      </View>

      <View style={styles.filterContainer}>
        <TextInput
          style={styles.filterInput}
          placeholder="Institution (optional)"
          value={institution}
          onChangeText={setInstitution}
        />
        <View style={styles.sortContainer}>
          <Text style={styles.sortLabel}>Sort:</Text>
          <View style={styles.sortButtons}>
            <TouchableOpacity
              style={[styles.sortBtn, sortBy === 'createdAt' && styles.sortBtnActive]}
              onPress={() => setSortBy('createdAt')}
            >
              <Text style={[styles.sortBtnText, sortBy === 'createdAt' && styles.sortBtnTextActive]}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sortBtn, sortBy === 'downloads' && styles.sortBtnActive]}
              onPress={() => setSortBy('downloads')}
            >
              <Text style={[styles.sortBtnText, sortBy === 'downloads' && styles.sortBtnTextActive]}>Popular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <NoteCard 
            note={item} 
            onPress={() => navigation.navigate('NoteDetail', { id: item.id })} 
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={{ paddingVertical: 10 }}
        ListEmptyComponent={<Text style={styles.empty}>No notes found</Text>}
      />

      {totalPages > 1 && (
        <View style={styles.pagination}>
          <TouchableOpacity
            style={[styles.pageBtn, currentPage === 1 && styles.pageBtnDisabled]}
            onPress={() => currentPage > 1 && fetchNotes(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Text style={styles.pageBtnText}>← Prev</Text>
          </TouchableOpacity>
          <Text style={styles.pageText}>Page {currentPage} of {totalPages}</Text>
          <TouchableOpacity
            style={[styles.pageBtn, currentPage === totalPages && styles.pageBtnDisabled]}
            onPress={() => currentPage < totalPages && fetchNotes(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <Text style={styles.pageBtnText}>Next →</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.bg,
  },
  searchContainer: {
    marginBottom: 12,
  },
  search: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
  },
  filterContainer: {
    marginBottom: 12,
  },
  filterInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sortLabel: {
    fontSize: 14,
    color: COLORS.muted,
    marginRight: 8,
    fontWeight: '600',
  },
  sortButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  sortBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: '#fff',
  },
  sortBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  sortBtnText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: '600',
  },
  sortBtnTextActive: {
    color: '#fff',
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 20,
    paddingVertical: 40,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: '#fff',
  },
  pageBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
  },
  pageBtnDisabled: {
    backgroundColor: COLORS.border,
    opacity: 0.5,
  },
  pageBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  pageText: {
    color: COLORS.text,
    fontWeight: '600',
  },
});

export default BrowseScreen;
