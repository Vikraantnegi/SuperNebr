/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import ForgetPasswordScreen from '../../screens/ForgetPasswordScreen/ForgetPasswordScreen';
import VerifyCodeScreen from '../../screens/VerifyCodeScreen/VerifyCodeScreen';
import ChangePasswordScreen from '../../screens/ChangePasswordScreen/ChangePasswordScreen';
import ChangePasswordSuccessScreen from '../../screens/ChangePasswordSuccessScreen/ChangePasswordSuccessScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import CartScreen from '../../screens/CartScreen/CartScreen';
import WishlistScreen from '../../screens/WishlistScreen/WishlistScreen';
import MyProfileScreen from '../../screens/MyProfileScreen/MyProfileScreen';
import CommunityPageScreen from '../../screens/CommunityPageScreen/CommunityPageScreen';
import AddCommunityPageScreen from '../../screens/AddCommunityPageScreen/AddCommunityPageScreen';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar.js';
import LeaderboardScreen from '../../screens/LeaderboardScreen/LeaderboardScreen';
import ElectronicsScreen from '../../screens/ElectronicsScreen/ElectronicsScreen';
import HistoryScreen from '../../screens/HistoryScreen/HistoryScreen';
import NotificationsScreen from '../../screens/NotificationsScreen/NotificationsScreen';
import ProductDetailScreen from '../../screens/ProductDetailScreen/ProductDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="ChangePasswordSuccess" component={ChangePasswordSuccessScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="My" component={MyProfileScreen} />
        <Stack.Screen name="CommunityPage" component={CommunityPageScreen} />
        <Stack.Screen name="AddCommunityPage" component={AddCommunityPageScreen} />
        <Stack.Screen name="LeftSidebar" component={LeftSidebar} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="Electronics" component={ElectronicsScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
