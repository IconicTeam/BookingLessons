//! Add here all auth screens ==> login, signup, ...

import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import screens
import screens from '../../screens';
import ConfirmPasswordScreen from '../../screens/auth/ConfirmPasswordScreen';

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureEnabled: true,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // for animations
        ...TransitionPresets.SlideFromRightIOS, // for animations
        transitionSpec: {
          open: {
            animation: 'timing',
          },
          close: {
            animation: 'timing',
          },
        },
      }}>
      <Stack.Screen name="SignupScreen" component={screens.SignupScreen} />
      <Stack.Screen
        name="ConfirmPasswordScreen"
        component={ConfirmPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
