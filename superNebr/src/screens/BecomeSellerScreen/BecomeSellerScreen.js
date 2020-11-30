/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderB from '../../components/Header/HeaderB';
import { TouchableOpacity } from 'react-native-gesture-handler';
import supplier from '../../assets/Illustrations/supplier.png';

const BecomeSellerScreen = ({ navigation }) => {

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginBottom40]}>
                <HeaderB page="Login" name="Become a seller" />
                <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginBottom20]}>
                    <Image source={supplier} style={[HelperStyle.marginVertical10]}/>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20]}>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', marginVertical: 5}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate('Login')}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Apply Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default BecomeSellerScreen;

