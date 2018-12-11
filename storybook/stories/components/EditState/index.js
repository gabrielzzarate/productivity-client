import React from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';

export const EditState = () => (
  <View style={styles.container}>
    <Text>hello world</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 350,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    padding: 8,

  },
});

