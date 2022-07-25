import {Text, View} from 'react-native';
import React, {Component} from 'react';

import {COLORS} from './src/constants';

import OneTimePassword from './auth/OneTimePassword';

class App extends Component {
  render() {
    return (
      // <View style={{height: '50%', width: '100%'}}>
        <OneTimePassword />
      // </View>
    );
  }
}

export default App;
