import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const products = [
  {
    id: 1,
    name: 'Alley Palace',
    image: require('../Assets/img2.png'),
    rating: '4.1',
    reviews: '355 Reviews',
    description: 'Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and...',
    price: '$199',
    facilities: [
      { name: 'Heater', icon: 'radiator' },
      { name: 'Dinner', icon: 'silverware-fork-knife' },
      { name: 'Tub', icon: 'bathtub' },
      { name: 'Pool', icon: 'pool' },
    ],
  },
  {
    id: 2,
    name: 'Courdes Alpes',
    image: require('../Assets/img1.png'),
    rating: '4.5',
    reviews: '500 Reviews',
    description: 'Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and...',
    price: '$299',
    facilities: [
      { name: 'Heater', icon: 'radiator' },
      { name: 'Dinner', icon: 'silverware-fork-knife' },
      { name: 'Tub', icon: 'bathtub' },
      { name: 'Pool', icon: 'pool' },
    ],
  },
  {
    id: 3,
    name: 'Luxurious Aspen',
    image: require('../Assets/hero1.png'),
    rating: '4.8',
    reviews: '150 Reviews',
    description: 'Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and...',
    price: '$399',
    facilities: [
      { name: 'Heater', icon: 'radiator' },
      { name: 'Dinner', icon: 'silverware-fork-knife' },
      { name: 'Tub', icon: 'bathtub' },
      { name: 'Pool', icon: 'pool' },
    ],
  },
  // Add more products as needed
];

const Home = ({ navigation }) => {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <Text style={styles.headerSubtitle}>Aspen</Text>

      <View style={styles.location}>
      <Icon name="map-marker-outline" size={20} color="blue" />
        <Text>Aspen,USA</Text>
        <Icon name="menu-down" size={20} color="blue" />
      </View>


      </View>

      <Searchbar style={styles.schbr} placeholder="Find things to do" />

      <View style={styles.tabs}>
        {['Location', 'Hotels', 'Food', 'Adventure'].map((tab, index) => (
          <Pressable
            key={index}
            onPressIn={() => setHoveredTab(index)}
            onPressOut={() => setHoveredTab(null)}
          >
            <Text style={[styles.tab, hoveredTab === index && styles.hoverTab]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => navigation.navigate('Details', { product })}
          >
            <View style={styles.card}>
              <Image style={styles.cardImage} source={product.image} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{product.name}</Text>
                <Text style={styles.cardRating}>{product.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Recommended</Text>
      <ScrollView horizontal>
        {products.map((product) => (
          <View key={product.id} style={styles.recommendCard}>
            <Image style={styles.recommendImage} source={product.image} />
            <View style={styles.rcardContent}>
              <Text style={styles.recommendTitle}>{product.name}</Text>
              <Text style={styles.recommendDetails}>2N/5D</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
 
  headerTitle: {
    fontSize: 20,
    color:'black'
  },
  headerSubtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color:'black'
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginRight: 30,
    marginLeft: 10,
  },
  hoverTab: {
    color: '#007BFF',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color:'black'
  },
  seeAll: {
    color: '#007BFF',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 16,
    width: 170,
    height: 240,
    overflow: 'hidden',
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardRating: {
    color: '#fff',
  },
  recommended: {
    flexDirection: 'row',
  },
  recommendCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 25,
    width: 170,
    height: 120,
    overflow: 'hidden',
  },
  recommendImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  recommendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  recommendDetails: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rcardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  schbr: {
    height: '8%',
    marginBottom: 20,
  },
  location:{
    display:'flex',
    flexDirection:'row',
    left:250,
    top:-50
  }
});

export default Home;
