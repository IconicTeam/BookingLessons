import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import {COLORS} from '../../constants';

const GeneralStatusBar = () => {
  return (
    <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
  );
};

export default GeneralStatusBar;
