import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import { dispatch } from 'redux';

export default class Home extends React.Component {
  // getVisibleTodos(todos, filter) {
  //   switch (filter) {
  //     case 'SHOW_ALL':
  //       return todos;
  //     case 'SHOW_COMPLETED':
  //       return todos.filter(t => t.completed);
  //     case 'SHOW_ACTIVE':
  //       return todos.filter(t => !t.completed);
  //     default:
  //       return todos;
  //   }
  // }
  render() { 
    return (
      <View style={styles.container}>
        <AddTodo
          onAddClick={text => store.dispatch({ type: ADD_TODO, id: nextTodoId++, text })}
        />

        <Text>Home</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});