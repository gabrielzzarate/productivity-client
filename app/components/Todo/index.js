import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Checkbox from 'react-native-checkbox';

const Todo = ({ text, id, completed, toggleTodo, toggleEditState }) => {
  return (
    <TouchableWithoutFeedback onPress={toggleEditState(id)}>
      <View>
        <Checkbox
          label={text}
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <Text>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Todo;
