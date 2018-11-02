import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Todo from '../Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <View styles={styles.container}>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onPress={() => onTodoClick(todo.id)} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 400,
    backgroundColor: 'black',
    color: '#fff',
    marginBottom: 30,
  },
});

export default TodoList;