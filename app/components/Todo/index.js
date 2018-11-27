import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Checkbox from 'react-native-checkbox';
import EditTodo from '../EditTodo';

const Todo = ({ text, id, completed, editState, toggleTodo, toggleEditState }) => {
  if (!id) {
    return;
  }

  console.log('editState', toggleEditState);

  const renderTodo = () => {
    if (editState) {
      return (<EditTodo id={id} text={text} />);
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
