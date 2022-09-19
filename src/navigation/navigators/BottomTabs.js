import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import screens from '../../screens';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, PADDINGS} from '../../constants';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
          } else if (route.name === 'Reservation') {
            iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
          } else if (route.name === 'Waiting') {
            iconName = focused
              ? 'clipboard-text-clock'
              : 'clipboard-text-clock-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          display: null,
          height: 60,
          paddingBottom: PADDINGS.xsPadding,
        },
      })}>
      <Tab.Screen name="Dashboard" component={screens.Dashboard} />
      <Tab.Screen name="Reservation" component={screens.Reservation} />
      <Tab.Screen name="Waiting" component={screens.Waiting} />
      <Tab.Screen name="Profile" component={screens.Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
