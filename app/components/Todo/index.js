import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Checkbox from 'react-native-checkbox';
import EditTodo from '../EditTodo';

const Todo = ({ text, id, completed, toggleTodo, toggleEditState, editState }) => {
  if (!id) {
    return;
  }

  const renderTodo = () => {
    if (id === editState) {
      return (<EditTodo />);
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
