import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableHightlight } from 'react-native';
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
          title="+" 
          style={styles.button}
          color='#F9AA33'
          onPress={() => { 
            this.props.addTodo(this.state.text);
            this.setState({ text : ''});
          }}
        />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 250,
    alignSelf: 'center',
    paddingLeft: 5,
    marginBottom: 10,
    backgroundColor: '#344955',
    borderRadius: 3,
  },
  button: {
    width: 80,
    height: 80,
    color: 'black',
    backgroundColor: '#F9AA33',
    borderRadius: 50,
  }

});

export default connect(null, { addTodo })(AddTodo);