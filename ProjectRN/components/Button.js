import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: 175,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF"
  },
  text: {
    width: '80 px',
    height: ' 18 px',
    fontFamily: "SF Pro",
    fontSize: 15,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 15,
    color: "#010E5D"
  },
})
