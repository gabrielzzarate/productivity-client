import React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import Todo from '../Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ScrollView styles={styles.container}>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onPress={() => onTodoClick(todo.id)} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    //height: 80,
    //width: 100,
    //flex: 4,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //alignSelf: 'flex-start',
    //width: '100%',
    //height: '100%',
    //justifyContent: 'flex-end',
  },
});

export default TodoList;