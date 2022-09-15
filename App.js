import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// native base
import {NativeBaseProvider} from 'native-base';

import {SafeAreaProvider} from 'react-native-safe-area-context';

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
