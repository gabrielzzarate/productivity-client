import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class AddTodo extends Component {
  state = {
    text: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type todo"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <Button 
          title="Add Todo" 
          style={styles.button}
          onPress={() => { 
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

const styles = StyleSheet.create({
  container: {
    height: 100,
    maxWidth: 400,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 250,
    alignSelf: 'center',
    paddingLeft: 5,
    marginBottom: 10,
  },
  button: {
    width: 80,
    backgroundColor: 'blue',
    color: '#fff',

  }

});

export default connect(null, { addTodo })(AddTodo);