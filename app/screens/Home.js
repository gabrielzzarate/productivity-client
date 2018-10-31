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
        console.log('showing all', todos);
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

    return (
      <View style={styles.container}>
        <TodoList style={{ width: 100, height: 50, backgroundColor: 'skyblue'}} todos={this.getVisibleTodos(todos, visibilityFilter)} />
        <AddTodo style={{ width: 100, height: 50 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
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