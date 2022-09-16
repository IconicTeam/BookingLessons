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
      <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
      <Stack.Screen name="SignupScreen" component={screens.SignupScreen} />
      <Stack.Screen
        name="PhoneConfirmScreen"
        component={screens.PhoneConfirmScreen}
      />
      <Stack.Screen
        name="OneTimePasswordScreen"
        component={screens.OneTimePasswordScreen}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={screens.ForgetPasswordScreen}
      />
      {/* <Stack.Screen
        name="ConfirmPasswordScreen"
        component={screens.ConfirmPasswordScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
