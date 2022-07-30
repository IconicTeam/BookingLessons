import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

import screens from './src/screens'; // get all pages in screens folder
import auth from './src/screens/auth';

// native base
import {NativeBaseProvider} from 'native-base';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import OneTimePassword from './auth/OneTimePassword';
import ConfirmPasswordScreen from './src/screens/auth/ConfirmPasswordScreen';

// navigation
import ContainerNavigation from './src/navigation';

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <ContainerNavigation></ContainerNavigation>
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}

export default App;
