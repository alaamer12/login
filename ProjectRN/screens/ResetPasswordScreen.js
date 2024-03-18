import React, { useState } from 'react'
import Back from '../components/Back'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { TouchableOpacity, StyleSheet, View,Image,Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'
export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Back>
      <Image
        style={styles.image}
        source={require('../assets/bleu.png')}
      />
      <Logo />
      <Header>Reset your password</Header>
      <Text style={{marginTop:-70}}>Enter your email address and we’ll send
you instruction to reset your password</Text>
      <Text style={{marginRight:240,}}>Email</Text>
      <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
       
      />  
      <Icon name="mail" size={24} color="black" style={styles.icon} />
      </View>
<Button mode="contained"  style={{width: 199,
height: 40,
borderRadius: 21.699186325073242,
backgroundColor: "#010E5D"}}>
     <Text style={{width: 34,
height: 17,
fontFamily: "SF Pro",
fontSize: 14,
fontWeight: "600",
fontStyle: "normal",
lineHeight: 14,
color: "#FFFFFF"}}>Reset my password</Text> 
      </Button>
    </Back>
  )
}
const styles = StyleSheet.create({
  image:{
    top: -150,
    width: 455,
    height: 328,
 
}, icon: {
  position: 'absolute',
  left: 10,
},
inputContainer: {
  justifyContent: 'center',
},
input: {
  width: 300,
},
 
})
