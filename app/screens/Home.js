import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

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
    console.log('App State: todos', this.props.state.todos);

    console.log('results', this.getVisibleTodos(todos, visibilityFilter));

    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <TodoList todos={this.getVisibleTodos(todos, visibilityFilter)} />
        <AddTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'gray',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    // height: '100%',
    justifyContent: 'flex-start',
  },
});

const mapStateToProps = ({...state }) => {
  return {
    state
  };
}

export default connect(mapStateToProps, null)(Home);