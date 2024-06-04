// src/components/LikedPlaces.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Like = ({navigation}) => {
  const [likedPlaces, setLikedPlaces] = useState([
    {
      id: '1',
      name: 'Eiffel Tower',
      location: 'Paris, France',
      description: 'An iconic symbol of Paris, standing at 324 meters.',
      image: require('../Assets/like1.jpg'),
    },
    {
      id: '2',
      name: 'Great Wall of China',
      location: 'China',
      description: 'A series of fortifications made of various materials, stretching over 13,000 miles.',
      image: require('../Assets/like2.jpg'),
    },
    {
      id: '3',
      name: 'Taj Mahal',
      location: 'Agra, India',
      description: 'A stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
      image: require('../Assets/like3.jpg'),
    },
    
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.placeItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.placeHeader}>
        <Icon name="map-marker" size={24} color="#0652DD" style={styles.icon} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Liked Places</Text>
      <FlatList
        data={likedPlaces}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  placeItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  placeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
});

export default Like;
