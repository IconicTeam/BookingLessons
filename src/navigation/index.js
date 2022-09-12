//! navigation container

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import ContainerStack from './ContainerStack';

import components from '../components';

const ContainerNavigation = () => {
  return (
    <NavigationContainer>
      {/* general StatusBar */}
      <components.GeneralStatusBar />
      <ContainerStack />
    </NavigationContainer>
  );
};

export default ContainerNavigation;
