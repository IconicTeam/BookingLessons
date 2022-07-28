import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

import screens from './src/screens'; // get all pages in screens folder
import auth from './src/screens/auth';
// native base
import {NativeBaseProvider} from 'native-base';


import ConfirmPasswordScreen from './src/screens/auth/ConfirmPasswordScreen';

class App extends Component {
  render() {
    return (
      // <NativeBaseProvider>
      //   <auth.ConfirmPasswordScreen />
      // </NativeBaseProvider>
      // <ConfirmPasswordScreen />
      <NativeBaseProvider>
        <screens.OneTimePassword />
      </NativeBaseProvider>
    );
  }
}

export default App;
