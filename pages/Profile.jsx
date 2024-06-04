import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  // Function to handle user logout
  const handleLogOut = async () => {
    try {
      // Remove stored email and password from AsyncStorage
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');

      // Navigate to the 'Login' screen after successful logout
      navigation.navigate('Intro');
      // Handle error if logout fails
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const likedPlaces = [
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
      description:
        'A series of fortifications made of various materials, stretching over 13,000 miles.',
      image: require('../Assets/like2.jpg'),
    },
    {
      id: '3',
      name: 'Taj Mahal',
      location: 'Agra, India',
      description:
        'A stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
      image: require('../Assets/like3.jpg'),
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.placeItem}>
      <Image source={item.image} style={styles.placeImage} />
      <View style={styles.placeInfo}>
        <Text style={styles.placeName}>{item.name}</Text>
        <Text style={styles.placeLocation}>{item.location}</Text>
        <Text style={styles.placeDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../Assets/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Dulaj Indula</Text>
        <Text style={styles.profileBio}>
          Traveller, photographer, and software engineer. Exploring the world
          one place at a time.
        </Text>
        <Text style={styles.profileDetail}>Birthday: September 26, 2001</Text>
        <Text style={styles.profileDetail}>Email: dulaj@gmail.com</Text>
      </View>

      <View style={styles.likedPlacesContainer}>
        <Text style={styles.likedPlacesHeader}>Liked Places</Text>
        <FlatList
          data={likedPlaces}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.settingsHeader}>Settings</Text>
        <TouchableOpacity style={styles.settingsItem}>
          <Icon name="account-edit" size={24} color="#0652DD" />
          <Text style={styles.settingsItemText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Icon name="lock" size={24} color="#0652DD" />
          <Text style={styles.settingsItemText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Icon name="cog" size={24} color="#0652DD" />
          <Text style={styles.settingsItemText}>Preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText} onPress={handleLogOut}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  profileBio: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 8,
  },
  profileDetail: {
    fontSize: 16,
    color: '#0652DD',
    textAlign: 'center',
    marginTop: 4,
  },
  likedPlacesContainer: {
    flex: 1,
    marginBottom: 20,
  },
  likedPlacesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  placeItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  placeImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  placeInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeLocation: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  placeDescription: {
    fontSize: 14,
    color: '#444',
  },
  settingsContainer: {
    marginBottom: 80,
  },
  settingsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  settingsItemText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#0652DD',
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile;
