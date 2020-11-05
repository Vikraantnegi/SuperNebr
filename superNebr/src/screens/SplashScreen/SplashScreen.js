/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import logo from '../../assets/Images/companylogo.png';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('AskLocation');
  }, 1500);

  return (
    <View style={[HelperStyle.flex1, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, BaseColors.BackgroundColor ]}>
      <Image
        source={logo}
        style={{}}
      />
    </View>
  );
};

export default SplashScreen;
