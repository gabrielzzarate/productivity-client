import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Todo from '../Todo';
import { isEmpty } from '../../utils';

class TodoList extends React.Component {

  render() {
    const { todos, toggleTodo, toggleEditState, editTodo, deleteTodo } = this.props;
    if (isEmpty(todos)) {
      return null;
    }
    return (
      <View styles={styles.container}>
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
    height: 400,
    width: 400,
    color: '#fff',
    marginBottom: 30,
  },
});

export default TodoList;