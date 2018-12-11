import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { toggleTodo, toggleEditState, editTodo, deleteTodo } from '../actions';

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
    const { state, toggleTodo, toggleEditState, editTodo, deleteTodo } = this.props;
    const { todos, visibilityFilter } = state; 

    console.log('App State: todos', this.props.state);

    return (
      <View style={styles.container}>
        <TodoList 
          todos={this.getVisibleTodos(todos, visibilityFilter)} 
          toggleTodo={toggleTodo} 
          toggleEditState={toggleEditState}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
        <AddTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A6572',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});


const mapStateToProps = ({ ...state }) => {
  return {
    state
  };
}

export default connect(mapStateToProps, { toggleTodo, toggleEditState, editTodo, deleteTodo })(Home);
