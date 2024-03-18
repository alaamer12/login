import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    
    width: 348,
    height: 26,
    fontFamily: "SF Pro",
    fontSize: 22,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 22,
    color: "#101010",
    textAlign:'center',
    marginBottom:98
  },
})
