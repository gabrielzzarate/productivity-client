import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import EditTodo from '../EditTodo';

const Todo = ({ text, id, completed, editState, toggleTodo, toggleEditState, editTodo, deleteTodo }) => {
  if (!id) {
    return null;
  }

  const renderTodo = () => {
    if (editState || !text) {
      return (<EditTodo id={id} text={text} editTodo={editTodo} deleteTodo={deleteTodo} />);
    } else {
      return (
        <View style={styles.container}>
          <CheckBox
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            iconLeft
            size={18}
            wrapperStyle={styles.checkboxWrapper}
            onPress={() => toggleTodo(id)}
            checked={completed}
            style={styles.checkbox}
          />
          <Text style={styles.text}>{text}</Text>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkboxWrapper: {
    width: 5,
  },
  checkbox: {
    padding: 0,
    margin: 0,
    alignSelf: 'flex-start',
  },
  text: {
    padding: 0,
    color: '#F9AA33',
    fontWeight: 'bold',
  }
});

export default Todo;
