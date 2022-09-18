//! Add here all stacks ==> auth stack, home stack, intro slider stack

import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import all stacks
import {AuthStack, BottomTabs} from './navigators';

const ContainerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureEnabled: true,
        // cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid, // for animations
        ...TransitionPresets.SlideFromRightIOS, // for animations
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              delay: 0,
              duration: 400,
            },
          },
          close: {
            animation: 'timing',
            config: {
              delay: 0,
              duration: 400,
            },
          },
        },
      }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default ContainerStack;
