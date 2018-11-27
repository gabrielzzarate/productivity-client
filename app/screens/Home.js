import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { toggleTodo, toggleEditState } from '../actions';

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
    const { state, toggleTodo } = this.props;
    const { todos, visibilityFilter } = state; 

    console.log('App State: todos', toggleTodo);

    return (
      <View style={styles.container}>
        <TodoList 
          todos={this.getVisibleTodos(todos, visibilityFilter)} 
          toggleTodo={toggleTodo} 
          toggleEditState={toggleEditState}
        />
        <AddTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapStateToProps = ({ ...state }) => {
  return {
    state
  };
}

export default connect(mapStateToProps, { toggleTodo, toggleEditState })(Home);
