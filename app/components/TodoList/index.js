import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Todo from '../Todo';

class TodoList extends React.Component {

  render() {
    const { todos, toggleTodo, toggleEditState } = this.props;
    return (
      <View styles={styles.container}>
        {todos.map(todo => (
          <Todo
            key={todo.id} 
            {...todo}  
            toggleTodo={toggleTodo}
            toggleEditState={toggleEditState}
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