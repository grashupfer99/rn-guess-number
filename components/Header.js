import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 18
  }
});
