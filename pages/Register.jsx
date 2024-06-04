import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Alert
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import axios from 'axios';

export default function Register({navigation}) {
  const gologin = () => {
    navigation.navigate('Login');
  };

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [conpassword, setconPassword] = React.useState('');

  // Function to handle user registration
  const handleRegister = async () => {
    // Check if email, password, and confirm password are filled
    if (!email || !password || !conpassword) {
      Alert.alert('Registration Failed', 'Please fill in all fields.');
      return;
    }

    // Check if password and confirm password match
    if (password !== conpassword) {
      Alert.alert('Registration Failed', 'Passwords do not match.');
      return;
    }

    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Registration Failed', 'Invalid email address.');
      return;
    }

    // Check if the email already exists in the database
    try {
      const emailCheckResponse = await axios.get(
        `http://172.20.10.3:3000/register?email=${email}`,
      );

      const existingUser = emailCheckResponse.data.find(
        users => users.email === email,
      );
      if (existingUser) {
        Alert.alert(
          'Registration Failed',
          'An account with this email already exists.',
        );
        return;
      }

      // Register the user by sending a POST request
      const registerResponse = await axios.post(
        'http://172.20.10.3:3000/register/',
        {
          email: email,
          password: password,
        },
      );

      // Display registration success message and navigate to login screen
      Alert.alert('Registration Successful');

      navigation.navigate('Login', {animationEnabled: false});
    } catch (err) {
      console.error('Error registering user:', err);
      Alert.alert(
        'Registration Failed',
        'An error occurred while registering. Please try again.',
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
        <Text style={styles.txt1}>Register</Text>

        <View style={styles.inputs}>
          <TextInput style={styles.email} label="Email" value={email} onChangeText={email => setEmail(email)}/>

          <TextInput secureTextEntry={true} style={styles.ps} label="Password" value={password} onChangeText={password => setPassword(password)} />

          <TextInput secureTextEntry={true} style={styles.conps} label="Confirm Password" value={conpassword} onChangeText={conpassword => setconPassword(conpassword)} />

          <Button buttonColor="#0652DD" style={styles.btnreg} mode="contained" onPress={handleRegister}>
            Register
          </Button>

          <Text onPress={gologin} style={styles.txt2}>
            If You Have an Account? Login here
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
    left: 70,
    top: 20,
    transform: [{translateX: 50}, {translateY: 50}],
    color: '#fff',
  },
  name: {
    width: '80%',
  },
  email: {
    width: '80%',
    marginTop: 20,
  },
  ps: {
    width: '80%',
    marginTop: 20,
  },
  conps: {
    width: '80%',
    marginTop: 20,
  },
  inputs: {
    alignItems: 'center',
    marginTop: 200,
  },
  btnreg: {
    width: '60%',
    marginTop: 50,
    marginBottom: 20,
  },
  txt2: {
    color: '#fff',
    fontSize: 15,
  },
});
