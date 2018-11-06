import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, TextInput } from 'react-native';

let EditTodo = ({ id, text, handleSubmit }) => {
  
  const renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput onChangeText={onChange} {...restInput} />
  }

  return (
    <View>
      <Field 
        name="text"
        component={renderInput}
        type="text"
      />
    </View>
  );
}

EditTodo = reduxForm({
  form: 'editTodo'
})(EditTodo);

export default EditTodo;