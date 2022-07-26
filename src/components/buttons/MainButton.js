import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {buttonsStyles, textStyles} from '../../styles';

const MainButton = ({
  navigation,
  title,
  onPress,
  type = 'primary',
  width,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        buttonsStyles.mainButtonStyle,
        buttonsStyles[`${type}ButtonStyle`],
        {width: width},
      ]}
      onPress={onPress}
      activeOpacity={0.4}
      disabled={disabled}>
      <Text
        style={[
          textStyles.mdTextStyle,
          textStyles.whiteTextStyle,
          textStyles.boldTextStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;
