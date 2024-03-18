import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import de la navigation pour React Navigation
import Back from '../components/Back';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../components/BackButton'
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation(); // Initialisation de la navigation

  const onLoginPressed = () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      return;
    }

    axios.post('http://127.0.0.1:8000/api/register', {
      email: email,
      password: password,
    })
    .then(response => {
      console.log(response.data);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <Back>
      <Image
        style={styles.image}
        source={require('../assets/bleu.png')}
      />
      <Logo/>
      <Header>Sign into your account</Header>
      <Text style={styles.subtitle}>Enter your login credentials</Text> 

      
      <View style={styles.inputContainer}>
      <Text>Email</Text>
      <TextInput
      style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        error={!!emailError}
      />  
      <Icon name="mail" size={24} color="black" style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
      <Text>Password</Text>
      <TextInput
      style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        error={!!passwordError}
        secureTextEntry
      />
       <Icon name="lock-closed" size={24} color="black" style={styles.icon} />
       <Icon name="eye-off" size={24} color="black" style={styles.icon1} />
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.remember}>Forgot your password?</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}>Remember me</Text>
      </View>
      
      <Button mode="contained" onPress={onLoginPressed} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text> 
      </Button>
      
      <Text style={{marginTop:15}}> <BackButton goBack={navigation.goBack} />
      Choose another workspace</Text>
    </Back>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    width: '100%',
    fontFamily: "SF Pro",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 14,
    textAlign: "center",
    color: "#878787",
    marginTop: -80
  },
  forgotPassword: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: '#010E5D',
  },
  remember: {
    fontSize: 13,
    color: '#010E5D',
  },
  image: {
    top: -150,
    width: 455,
    height: 328,
  },
  button: {
    width: 175,
    height: 39,
    borderRadius: 21.7,
    backgroundColor: "#010E5D66",
  },
  buttonText: {
    fontFamily: "SF Pro",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 14,
    color: "#FFFFFF",
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  icon1: {
    position: 'absolute',
    right: 10,
  },
  inputContainer: {
    justifyContent: 'center',
  },
  input: {
    width: 300,
  },
});
