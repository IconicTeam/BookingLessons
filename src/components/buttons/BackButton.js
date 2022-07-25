import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {buttonsStyles} from '../../styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, ICONS} from '../../constants';

import {RFValue} from 'react-native-responsive-fontsize';

const BackButton = ({onPress}) => {
  return (
    <View style={buttonsStyles.backButtonContainerStyle}>
      <Pressable
        style={buttonsStyles.backButtonStyle}
        android_ripple={{color: COLORS.white_gray, radius: RFValue(40) / 2}}
        onPress={onPress}>
        <Icon name="arrow-right" size={ICONS.lgIcon} color={COLORS.black} />
      </Pressable>
    </View>
  );
};

export default BackButton;
