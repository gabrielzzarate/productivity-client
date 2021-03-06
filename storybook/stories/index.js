import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { EditState } from './components/EditState';
import { Input } from './components/TextInput';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF'
};

const CenteredView = ({ children }) => (
  <View style={style}>
    {children}
  </View>
);

storiesOf('TextInput', module)
  .add('default text field', () => (
    <CenteredView>
      <Input />
    </CenteredView>
  ));

storiesOf('EditState', module)
  .add('default view', () => (
    <CenteredView>
      <EditState />
    </CenteredView>
  ));

storiesOf('CenteredView', module)
  .add('default view', () => (
    <CenteredView>
      <Text>Hello Storybook</Text>
    </CenteredView>
  ));
