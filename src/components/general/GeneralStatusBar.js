import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import {COLORS} from '../../constants';

const GeneralStatusBar = () => {
  return (
    <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
  );
};

export default GeneralStatusBar;
