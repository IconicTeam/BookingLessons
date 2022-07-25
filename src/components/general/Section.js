import React from 'react';
import {View, Text} from 'react-native';

import {generalStyles} from '../../styles';

const Section = ({children, resStyle, type}) => {
  return (
    <View
      style={[
        generalStyles.sectionStyle,
        generalStyles[`${type}`],
        {...resStyle},
      ]}>
      {children}
    </View>
  );
};

export default Section;
