import React from 'react';
import { Text } from 'react-native';

const Todo = (todo) => {
  return (
    <Text>
      Get to work: {todo.text}
    </Text>
  );
};
export default Todo;