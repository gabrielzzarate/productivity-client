import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let EditTodo = ({ id, handleSubmit, handleTodoEdit, editTodo, initialValues, deleteTodo }) => {
  if (initialValues.length < 1) {
    return null;
  }

  const values = initialValues;
  const { text } = values;
  
  const renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput autoFocus onChangeText={onChange} style={styles.field} placeholder="Title" {...restInput} />
  }

  return (
    <View style={styles.container}>
      <View>
        <Field
          name="text"
          component={renderInput}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Icon 
          style={styles.button}
          name="edit" 
          size={18} 
          color="#4A6572"
          onPress={() => { 
            editTodo(id);
          }}
        />
        <Icon
          style={styles.button}
          name="trash"
          size={18}
          color="#4A6572"
          onPress={() => {
            deleteTodo(id)
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 350,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  field: {
  },
  buttonWrapper: {
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  button: {
    paddingLeft: 5,
  },
});

EditTodo = reduxForm({
  form: 'editTodo'
})(EditTodo);



EditTodo = connect(
  state => ({
    initialValues: state.todos.filter(todo => {
      if (todo.editState) {
        return todo;
      } 
    })[0]
  })
)(EditTodo);


export default EditTodo;