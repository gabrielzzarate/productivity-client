import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Checkbox from 'react-native-checkbox';
import EditTodo from '../EditTodo';

const Todo = ({ text, id, completed, editState, toggleTodo, toggleEditState, editTodo, deleteTodo }) => {
  if (!id) {
    return null;
  }

  const renderTodo = () => {
    if (editState) {
      return (<EditTodo id={id} text={text} editTodo={editTodo} deleteTodo={deleteTodo} />);
    } else {
      return (
        <View>
          <Checkbox
            label={null}
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
          <Text>{text}</Text>
        </View>
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => toggleEditState(id)}>
      {renderTodo()}
    </TouchableWithoutFeedback> 
  );
};

export default Todo;
