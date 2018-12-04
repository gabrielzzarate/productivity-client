import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducer from './app/reducers';
import Home from './app/screens/Home';

export const store = createStore(reducer, applyMiddleware(reduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
});
