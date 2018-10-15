import React from 'react';
import { View } from 'react-native';

const AddTodo = ({ onAddClick }) => {
  let input;
  return (
    <View>
      <input ref={node => { input = node; }} />
      <button onClick={() => { 
          onAddClick(input.value);
          input.value = '';
        }}
      >
      Add Todo
      </button>
    </View> 
  );
}

export default AddTodo;