import React from 'react';
import {View, Text} from 'react-native';

import {generalStyles} from '../../styles';

const Section = ({children, resStyle, type, onLayout}) => {
  return (
    <View
      style={[
        generalStyles.sectionStyle,
        generalStyles[`${type}`],
        {...resStyle},
      ]}
      onLayout={onLayout}>
      {children}
    </View>
  );
};

export default Section;
