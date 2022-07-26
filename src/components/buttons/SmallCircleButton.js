import React from 'react';
import {View, Pressable} from 'react-native';

import {buttonsStyles, generalStyles} from '../../styles';

import {COLORS} from '../../constants';

import {RFValue} from 'react-native-responsive-fontsize';

const SmallCircleButton = ({children, onPress, disabled, haveRipple}) => {
  return (
    <View style={buttonsStyles.smCircleStyle}>
      <Pressable
        style={buttonsStyles.smCircleButtonStyle}
        android_ripple={{
          color: haveRipple ? COLORS.white_gray : 'transparent',
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
