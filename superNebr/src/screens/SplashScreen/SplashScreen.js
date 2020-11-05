/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image } from 'react-native';
import logo from '../../assets/Images/companylogo.png';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 1500);

  return (
    <View style={[HelperStyle.flex1, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, BaseColors.BackgroundColor, HelperStyle.paddingVertical20, HelperStyle.paddingHorizontal20 ]}>
      <Image
        source={logo}
        style={{width: 280, height: 56 }}
      />
    </View>
  );
};

export default SplashScreen;
