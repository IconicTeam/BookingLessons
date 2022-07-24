import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

import {COLORS} from './src/constants';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.error,
    flex: 1,
  },
});

export default App;
