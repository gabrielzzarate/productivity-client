import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Todo from '../Todo';

class TodoList extends React.Component {
  state = {
    editState: null,
  }

  toggleEditState(id) {
    console.log('EDIT', id);
    this.setState({ editState: id });
  }

  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <View styles={styles.container}>
        {todos.map(todo => (
          <Todo
            key={todo.id} 
            {...todo} 
            editState={this.state.editState} 
            toggleTodo={toggleTodo} 
            toggleEditState={(id) => this.toggleEditState(id)} 
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