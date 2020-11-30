/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderB from '../../components/Header/HeaderB';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import share from '../../assets/Illustrations/share.png';

const SharenEarn = ({ navigation }) => {

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.marginBottom40]}>
                <HeaderB page="Login" name="Share & Earn" />
                <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginBottom20, HelperStyle.flexCenter, {height: '90%'}]}>
                    <Image source={share} style={[HelperStyle.marginVertical10]}/>
                    <Text style={[HelperStyle.textCenter, HelperStyle.marginVertical10, {fontSize: 24, color: '#7F8592', fontFamily: BaseFont.fontMedium}]}>
                        Share with your Friends {'\n'} & Get Coupon Code
                    </Text>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 25}, HelperStyle.marginVertical20, HelperStyle.paddingVertical15, HelperStyle.paddingHorizontal20, HelperStyle.flexAlignCenter, HelperStyle.flexRow, HelperStyle.paddingVertical10]}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 19, color: BaseColors.heading }]}>
                            KSiNk42
                        </Text>
                        <Icon name="copy" type="Ionicons" style={{fontSize: 15, color: BaseColors.heading, marginLeft: 10}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SharenEarn;

