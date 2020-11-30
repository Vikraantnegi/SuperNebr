/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import logo from '../../assets/Images/companylogo.png';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('OnBoarding');
  }, 1500);

  return (
    <View style={[{height: height, width: width}, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, BaseColors.BackgroundColor]}>
      <Image
        source={logo}
        style={{width: 280, height: 56 }}
      />
    </View>
  );
};

export default SplashScreen;
