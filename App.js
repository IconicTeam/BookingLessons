import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

import screens from './src/screens'; // get all pages in screens folder

// native base
import {NativeBaseProvider} from 'native-base';

import OneTimePassword from './src/screens/auth/forgetpassword/OneTimePassword';

class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <screens.OneTimePassword />
      </NativeBaseProvider>
    );
  }
}

export default App;
