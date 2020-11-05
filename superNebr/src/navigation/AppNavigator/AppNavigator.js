/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
