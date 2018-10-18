import React from 'react';
import { FlatList } from 'react-native';
import Todo from '../Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <FlatList>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onPress={() => onTodoClick(todo.id)} />
    ))}
  </FlatList>
);

export default TodoList;