import React from 'react';
import {View, Pressable} from 'react-native';

import {generalStyles} from '../../styles';

import {COLORS} from '../../constants';

import {RFValue} from 'react-native-responsive-fontsize';

const SmallCircleButton = ({children, onPress, disabled}) => {
  return (
    <View style={generalStyles.smCircleStyle}>
      <Pressable
        style={generalStyles.smCircleButtonStyle}
        android_ripple={{
          color: COLORS.white_gray,
          radius: RFValue(40) / 2,
        }}
        onPress={onPress}
        disabled={disabled}>
        {children}
      </Pressable>
    </View>
  );
};

export default SmallCircleButton;
