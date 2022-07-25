import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

import screens from './src/screens'; // get all pages in screens folder

// native base
import {NativeBaseProvider} from 'native-base';

class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <screens.SignupScreen />
      </NativeBaseProvider>
    );
  }
}

export default App;
