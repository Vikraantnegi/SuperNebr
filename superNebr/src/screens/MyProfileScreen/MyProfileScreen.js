/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import Header from '../../components/Header/Header';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const MyProfileScreen = ({ navigation }) => {

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>

            <BottomNavigation activeScreen="My" navigation={navigation} />
        </View>
    );
};

export default MyProfileScreen;

