import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import {buttonsStyles, textStyles} from '../../styles';

const MainButton = ({
  title,
  onPress,
  type = 'primary',
  width,
  disabled,
  resStyle,
  loading,
  loadingColor,
  loadingSize,
}) => {
  return (
    <TouchableOpacity
      style={[
        buttonsStyles.mainButtonStyle,
        disabled
          ? buttonsStyles.disabledButtonStyle
          : buttonsStyles[`${type}ButtonStyle`],
        {width: width, ...resStyle},
      ]}
      onPress={onPress}
      activeOpacity={0.4}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size={loadingSize} color={loadingColor} />
      ) : (
        <Text
          style={[
            textStyles.mdTextStyle,
            textStyles.whiteTextStyle,
            textStyles.boldTextStyle,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;
