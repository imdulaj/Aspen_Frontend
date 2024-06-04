// src/components/BookmarkPage.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Bookmark = ({navigation}) => {
  const [bookmarks, setBookmarks] = useState([
    { id: '1', title: 'Eiffel Tower, Paris, France', description: 'The Eiffel Tower, an iconic symbol of Paris and France, was constructed in 1889 for the World.' },
    { id: '2', title: 'Great Wall of China, China', description: 'The Great Wall of China is a series of fortifications made of various materials' },
    { id: '3', title: 'Taj Mahal, Agra, India', description: 'The Taj Mahal is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. ' },
    { id: '4', title: 'Statue of Liberty, New York, USA', description: 'The Statue of Liberty, a gift from France to the United States, was dedicated on October 28, 1886. ' },
    { id: '5', title: 'Colosseum, Rome, Italy', description: 'The Colosseum is an ancient amphitheater in Rome, Italy, and is the largest ever built. Completed in AD 80, it could hold up to 80,000 spectators.' },
  ]);

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.bookmarkItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity onPress={() => removeBookmark(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookmarks</Text>
      <FlatList
        data={bookmarks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#000'
  },
  bookmarkItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000'
  },
  description: {
    fontSize: 14,
    color: '#000',
    marginVertical: 8,
  },
  removeButton: {
    marginTop: 8,
    backgroundColor: '#0652DD',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Bookmark;
