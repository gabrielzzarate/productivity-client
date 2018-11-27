import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ScrollView, StyleSheet, TextInput } from 'react-native';

let EditTodo = ({ id, text, handleSubmit }) => {
  
  const renderInput = ({ input: { onChange, value, ...restInput }}) => {
    return <TextInput onChangeText={onChange} value={value} style={styles.field} placeholder="Edit Todo" {...restInput} />
  }

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
      <Field
        name={'todo'}
        component={renderInput}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  field: {
    backgroundColor: 'black',
    borderColor: 'red',
  },
});

EditTodo = reduxForm({
  form: 'editTodo'
})(EditTodo);

EditTodo = connect(
  state => ({
    initialValues: state.todos.filter(todo => todo.editState)
  })
)(EditTodo);


export default EditTodo;