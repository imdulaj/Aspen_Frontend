import React from 'react';
import {View, Text, StyleSheet, ImageBackground,Image} from 'react-native';
import {Button} from 'react-native-paper';

export default function Intro({navigation}) {
  const goregister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/hero1.png')}
        resizeMode="cover"
        blurRadius={0}
        style={styles.bgimage}>
        <View style={styles.pt1}>
          <Image
            style={styles.logo}
            source={require('../Assets/aspen.png')}
          />
        </View>

        <View style={styles.pt2}>
          <Text style={styles.txt2}>Plan your</Text>
          <Text style={styles.txt3}>Luxurious</Text>
          <Text style={styles.txt3}>Vacation</Text>
        </View>

        <View style={styles.pt3}>
          <Button
            width="85%"
            height="45%"
            buttonColor="#0652DD"
            mode="contained"
            onPress={goregister}>
            Explore
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgimage: {
    flex: 1,
  },
  logo:{
    width:'80%',
    height:'30%',
    top:70
  },
  pt1: {
    flex: 5,
    alignItems: 'center',
  },
  pt2: {
    flex: 2,
  },
  pt3: {
    flex: 1,
    alignItems: 'center',
  },
  txt1: {
    fontSize: 80,
    fontFamily: 'lucida grande',
    marginTop: '20%',
    color: 'white',
    fontWeight: 'bold',
  },
  txt2: {
    fontSize: 25,
    color: 'white',
    marginLeft: 30,
    marginTop: 50,
  },
  txt3: {
    fontSize: 35,
    color: 'white',
    marginLeft: 30,
    fontWeight: 'bold',
  },
});
