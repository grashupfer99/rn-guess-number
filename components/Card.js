import React from 'react';
import { View, StyleSheet } from 'react-native';


export default function Card({ style, children }) {
  return (
    <View style={{ ...styles.card, ...style }}>{children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 5,
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
})
