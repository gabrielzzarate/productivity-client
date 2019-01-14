import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddTodo extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.container}>
        <Icon 
          name="plus"
          size={25}
          style={styles.button}
          color='#F9AA33'
          onPress={() => { 
            this.props.addTodo();
          }}
        />
      </TouchableHighlight> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 30,
  },
  button: {
    borderRadius: 50,
    padding: 30,
  }

});

export default connect(null, { addTodo })(AddTodo);