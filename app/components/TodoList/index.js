import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Todo from '../Todo';
import { isEmpty } from '../../utils';

class TodoList extends React.Component {

  render() {
    const { todos, toggleTodo, toggleEditState, editTodo, deleteTodo } = this.props;
    if (isEmpty(todos)) {
      return <View style={styles.container}><Text>You have no more todos for today!</Text></View>;
    }
    return (
      <View style={styles.container}>
        {todos.map(todo => (
          <Todo
            key={todo.id} 
            {...todo}  
            toggleTodo={toggleTodo}
            toggleEditState={toggleEditState}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoList;