import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailsScreen = ({route, navigation}) => {
  const {product} = route.params;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart" size={24} color="#FF0000" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#ffd700" />
          <Text style={styles.rating}>{product.rating}</Text>
          <Text style={styles.reviews}>({product.reviews} Reviews)</Text>
        </View>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.facilitiesTitle}>Facilities</Text>
        <View style={styles.facilities}>
          {product.facilities.map((facility, index) => (
            <View key={index} style={styles.facility}>
              <Icon name={facility.icon} size={35} color="#555" />
              <Text>{facility.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>{product.price}</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    borderRadius: 5, 
    padding: 5,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 15,
  },
  imageFooter: {
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
  content: {
    padding: 5,
    borderRadius: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color:'black',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:20
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
   
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
    color:'black',
  },
  reviews: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    color:'black',
  },
  facilitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black',
  },
  facilities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    color:'black',
  },
  facility: {
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32CD32',
  },
  bookButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
