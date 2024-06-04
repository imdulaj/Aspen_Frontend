import React,{useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  // Function to navigate to the Signin screen
  const goregister = () => {
    navigation.navigate('Register');
  };

  // State variables for email and password input fields
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Function to check if a user is logged in based on stored credentials
  const checkLoggedIn = async () => {

    // Retrieve stored email and password from AsyncStorage
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPassword = await AsyncStorage.getItem('password');

    // Check if both email and password are stored, then navigate to the 'BottomTabs' screen
    if (storedEmail && storedPassword) {
        navigation.navigate('BottomTabs');
    }
};


// Effect hook to check if the user is logged in when the component mounts

useEffect(() => {
    checkLoggedIn();  // Call the checkLoggedIn function
}, [])


// Function to handle user login
const handleLogin = async () => {
    try {
        if (!email || !password) {
            Alert.alert('Login Failed', 'Please fill in all fields.');
            return;
        }

        const response = await axios.post('http://172.20.10.3:3000/login/', {
            email: email,
            password: password,
        });

        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);

        console.log(response.data);
        navigation.navigate('BottomTabs');
    } catch (err) {
        console.error('Error logging in:', err);
        Alert.alert(
            'Login Failed',
            'An error occurred while logging in. Please try again.',
        );
    }
};


  return (
    <ImageBackground
      source={require('../Assets/hero1.png')}
      resizeMode="cover"
      blurRadius={5}
      style={styles.bgimage}>
      <ScrollView style={styles.container}>
        <Text style={styles.txt1}>Login</Text>

        <View style={styles.inputs}>
          <TextInput style={styles.email} label="Email" mode="contained" value={email} onChangeText={text => setEmail(text)}/>

          <TextInput secureTextEntry={true} style={styles.ps} label="Password" mode="contained" value={password} onChangeText={password => setPassword(password)}/>

          <Button buttonColor="#0652DD" style={styles.btnreg} mode="contained" onPress={handleLogin}>
            Login
          </Button>

          <Text onPress={goregister} style={styles.txt2}>
            If You Don't Have an Account? Register here
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgimage: {
    flex: 1,
  },
  txt1: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    left: 100,
    top: 40,
    transform: [{translateX: 50}, {translateY: 50}],
    color: '#fff',
  },
  email: {
    width: '80%',
    marginTop: 10,
  },
  ps: {
    width: '80%',
    marginTop: 20,
  },
  inputs: {
    alignItems: 'center',
    marginTop: 200,
  },
  btnreg: {
    width: '60%',
    marginTop: 70,
    marginBottom: 20,
    color: '',
  },
  txt2: {
    color: '#fff',
    fontSize: 15,
  },
});
