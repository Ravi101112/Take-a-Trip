import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: '#F0F0F0' },
        mode === 'contained' && { backgroundColor: '#000000' },
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
  
    width: '50%',
    marginVertical: 10,
    paddingVertical: 1,
   
  },
  text: {
    color : '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
