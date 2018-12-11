import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';

let EditTodo = ({ id, handleSubmit, handleTodoEdit, editTodo, initialValues, deleteTodo }) => {
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
      <Text>Todo Edit</Text>
      <View>
        <Field
          name="text"
          component={renderInput}
        />
        <Button 
          title="Edit Todo" 
          onPress={() => { 
            editTodo(id);
          }}
          >
          Edit Todo
          </Button>
      </View>
      <View>
        <Button
          title="Delete Todo"
          onPress={() => {
            deleteTodo(id)
          }}
        >
          Delete Todo
        </Button>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    padding: 8,
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