import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editTodo } from '../../actions';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';

let EditTodo = ({ id, handleSubmit, handleTodoEdit, initialValues }) => {
  if (initialValues.length < 1) {
    return null;
  }

  const values = initialValues;
  const { text } = values;
  
  const renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput onChangeText={onChange} style={styles.field} placeholder="Edit Todo" {...restInput} />
  }

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Field
        name="text"
        component={renderInput}
      />
      <Button 
        title="Edit Todo" 
        type="submit"
        onPress={() => { 
          handleSubmit(editTodo(id));
        }}
        >
        Edit Todo
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  field: {
    backgroundColor: 'gray',
    borderColor: 'red',
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