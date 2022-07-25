import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {generalStyles} from '../../styles';

const Container = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={generalStyles.containerStyle}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
