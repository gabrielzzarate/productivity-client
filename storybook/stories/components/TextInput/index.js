import React from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';

export const Input = () => (
  <View>
    <Text>Input</Text>
    <TextInput style={styles.field} autofocus={true} />
  </View>
)

const styles = StyleSheet.create({
  field: {
    backgroundColor: 'transparent',
  },
});