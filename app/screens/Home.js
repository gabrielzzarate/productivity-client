import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from '../components/AddTodo';

import { ADD_TODO } from '../actions/types';
import store from '../../App';

const nextTodoId = 0;

class Home extends React.Component {
  getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }

  render() {
    const { todos, visibilityFilter } = this.props.state; 
    return (
      <View style={styles.container}>
        <AddTodo />
        {/* <TodoList todos={this.getVisibileTodos(todos, visibilityFilter)} /> */}
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

const mapStateToProps = ({...state }) => {
  return {
    state
  };
}

export default connect(mapStateToProps, null)(Home);