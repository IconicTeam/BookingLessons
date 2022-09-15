import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {COLORS, PADDINGS} from '../../constants';

const {width, height} = Dimensions.get('screen');

const Loading = () => {
  return (
    <View style={styles.loaderContainer}>
      <View style={[styles.loaderView, {backgroundColor: COLORS.white}]}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0003',
  },
  loaderView: {
    padding: PADDINGS.mdPadding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Loading;
