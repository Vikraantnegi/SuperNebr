/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
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
import ReviewsScreen from '../../screens/ReviewsScreen/ReviewsScreen';
import AddAddressScreen from '../../screens/AddAddressScreen/AddAddressScreen';
import AddNewAddressScreen from '../../screens/AddNewAddressScreen/AddNewAddressScreen';
import EditProfileScreen from '../../screens/EditProfileScreen/EditProfileScreen';
import MyOrdersScreen from '../../screens/MyOrdersScreen/MyOrdersScreen';
import OrderDetailsScreen from '../../screens/OrderDetailsScreen/OrderDetailsScreen';
import OrderDetailsScreen1 from '../../screens/OrderDetailsScreen1/OrderDetailsScreen1';
import RequestCancellationScreen from '../../screens/RequestCancellationScreen/RequestCancellationScreen';
import AddReviewScreen from '../../screens/AddReviewScreen/AddReviewScreen';
import OrderSummaryScreen from '../../screens/OrderSummaryScreen/OrderSummaryScreen';
import PaymentScreen from '../../screens/PaymentScreen/PaymentScreen';
import UPIScreen from '../../screens/UPIScreen/UPIScreen';
import AddCardScreen from '../../screens/AddCardScreen/AddCardScreen';
import SavedCardsScreen from '../../screens/SavedCardsScreen/SavedCardsScreen';
import PaymentSuccessfulScreen from '../../screens/PaymentSuccessfulScreen/PaymentSuccessfulScreen';
import OffersScreen from '../../screens/OffersScreen/OffersScreen';
import BlogsScreen from '../../screens/BlogsScreen/BlogsScreen';
import BlogView from '../../screens/BlogView/BlogView';
import AddBlogsScreen from '../../screens/AddBlogsScreen/AddBlogsScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import FiltersScreen from '../../screens/FiltersScreen/FiltersScreen';
import PollsScreen from '../../screens/PollsScreen/PollsScreen';
import CreatePoll from '../../screens/CreatePoll/CreatePoll';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';
import ChatViewScreen from '../../screens/ChatViewScreen/ChatViewScreen';
import BecomeSellerScreen from '../../screens/BecomeSellerScreen/BecomeSellerScreen';
import SharenEarn from '../../screens/Share&Earn/Share&Earn';
import MyPollsScreen from '../../screens/MyPollsScreen/MyPollsScreen';
import MyAddressScreen from '../../screens/MyAddressScreen/MyAddressScreen';
import MyReviewsScreen from '../../screens/MyReviewsScreen/MyReviewsScreen';
import MyBlogsScreen from '../../screens/MyBlogsScreen/MyBlogsScreen';
import HomeServiceScreen from '../../screens/HomeServiceScreen/HomeServiceScreen';
import ShopScreen from '../../screens/ShopScreen/ShopScreen';
import ShopProfileScreen from '../../screens/ShopProfileScreen/ShopProfileScreen';
import AllShops from '../../screens/AllShops/AllShops';
import OnBoardingScreen from '../../screens/OnBoardingScreen/OnBoardingScreen';
import ChangePasswordSettingsScreen from '../../screens/ChangePasswordSettingsScreen/ChangePasswordSettingsScreen';

const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

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
        <Stack.Screen name="ChangePasswordSettings" component={ChangePasswordSettingsScreen} />
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
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="AddAddress" component={AddAddressScreen} />
        <Stack.Screen name="MyAddress" component={MyAddressScreen} />
        <Stack.Screen name="AddNewAddress" component={AddNewAddressScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
        <Stack.Screen name="OrderDetails1" component={OrderDetailsScreen1} />
        <Stack.Screen name="RequestCancellation" component={RequestCancellationScreen} />
        <Stack.Screen name="AddReview" component={AddReviewScreen} />
        <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="UPI" component={UPIScreen} />
        <Stack.Screen name="AddCard" component={AddCardScreen} />
        <Stack.Screen name="SavedCards" component={SavedCardsScreen} />
        <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessfulScreen} />
        <Stack.Screen name="Offers" component={OffersScreen} />
        <Stack.Screen name="Blogs" component={BlogsScreen} />
        <Stack.Screen name="BlogView" component={BlogView} />
        <Stack.Screen name="AddBlog" component={AddBlogsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Filters" component={FiltersScreen} />
        <Stack.Screen name="Polls" component={PollsScreen} />
        <Stack.Screen name="CreatePoll" component={CreatePoll} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="ChatView" component={ChatViewScreen} />
        <Stack.Screen name="BecomeSeller" component={BecomeSellerScreen} />
        <Stack.Screen name="SharenEarn" component={SharenEarn} />
        <Stack.Screen name="MyPolls" component={MyPollsScreen} />
        <Stack.Screen name="MyReviews" component={MyReviewsScreen} />
        <Stack.Screen name="MyBlogs" component={MyBlogsScreen} />
        <Stack.Screen name="HomeService" component={HomeServiceScreen} />
        <Stack.Screen name="Shops" component={ShopScreen} />
        <Stack.Screen name="AllShops" component={AllShops} />
        <Stack.Screen name="ShopProfile" component={ShopProfileScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
