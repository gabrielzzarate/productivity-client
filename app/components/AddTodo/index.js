import React from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTodo = ({ onAddClick }) => {
  let input;
  return (
    <View>
      <TextInput ref={node => { this.text = node; }} />
      <Button title="Add Todo" onPress={() => { 
          onAddClick(this.text);
          this.text = '';
        }}
      >
      Add Todo
      </Button>
    </View> 
  );
}

export default AddTodo;