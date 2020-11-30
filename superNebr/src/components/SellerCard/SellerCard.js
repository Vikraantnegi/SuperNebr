/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import {useNavigation} from '@react-navigation/native';
import BaseFont from '../../constants/BaseFont';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SellerCard = ({bg, title}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Shops')} style={[HelperStyle.flex1, HelperStyle.marginHorizontal10]}>
            <ImageBackground source = {{uri : bg}} style={{height: 100, width: 100}} imageStyle={{ borderRadius: 10}}>
                <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, {justifyContent: 'flex-end'}, {height: 100, width: 100}]}>
                    <Text style={{fontFamily: BaseFont.fontBold, color: 'white', fontSize: 15, textAlign: 'center'}}>
                        {title}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default SellerCard;

