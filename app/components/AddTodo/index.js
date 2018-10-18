import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class AddTodo extends Component {
  state = {
    text: '',
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Type todo"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <Button title="Add Todo" onPress={() => { 
            this.props.addTodo(this.state.text);
            this.setState({ text : ''});
          }}
        >
        Add Todo
        </Button>
      </View> 
    );
  }
}

export default connect(null, { addTodo })(AddTodo);