import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    width: 322,
height: 21,
fontFamily: "SF Pro",
fontSize: 18,
fontWeight: "700",
fontStyle: "normal",
lineHeight: 18,
textAlign: "center",
color: "#FFFFFF",
marginBottom:20,
    
   
  },
})
