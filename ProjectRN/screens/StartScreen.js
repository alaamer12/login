import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Group27 from '../components/Group27';
import Vector from '../components/Vector';
export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Paragraph>
        Choose your workspace:
      </Paragraph>
      <View style={styles.buttonContainer}>
      
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.button}
          
        >
           <Image
        style={styles.image1}
        source={require('../assets/pc.jpg')}
      />
          Monitoring
          </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          style={styles.button}
        >
         <Image
        style={styles.image}
        source={require('../assets/Vector.png')}/>
          Energy
        </Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 20,
    
  },
  button: {
    marginBottom: 8,
  },
  container:{
    width: 17.5,
   height: 16.87506103515625,
   
  },
  image:{
    width: 11.847716331481934,
   height: 17.97443962097168,
   backgroundColor: "#010E5D",
   
  }, image1:{
    width: 17.5,
   height: 16.87506103515625,

  }
});
