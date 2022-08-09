//! Add here all stacks ==> auth stack, home stack, intro slider stack

import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import all stacks
import {AuthStack} from './navigators';

const ContainerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
      }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

export default ContainerStack;
