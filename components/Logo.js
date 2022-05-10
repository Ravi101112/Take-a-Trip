import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/front.jpeg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 330,
    marginBottom: 8,
  },
})
