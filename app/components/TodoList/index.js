import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Todo from '../Todo';

class TodoList extends React.Component {
  state = {
    editState: null,
  }

  toggleEditState(id) {
    console.log('id', id);
    this.setState({ editState: id });
  }

  render() {
    const { todos, toggleTodo } = this.props;
    console.log('edit state', this.toggleEditState)
    return (
      <View styles={styles.container}>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} toggleEditState={() => this.toggleEditState.bind(this)} />
        ))}
      </View>
    );
  }
};

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