/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity,} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Extra3000 = () => {
    const navigation = useNavigation();
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.dividerBottom]}>
                    <Icon name="brightness-percent" type="MaterialCommunityIcons" style={{marginRight: 10, fontSize: 20, color: '#22A730'}} />
                    <Text style={{fontFamily: BaseFont.fontMedium, color: BaseColors.heading, fontSize: 14}}>Extra 3000 off on SBI Prepaid Transaction</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Offers')}><Text style={{fontFamily: BaseFont.fontMedium, color: BaseColors.heading, fontSize: 14, paddingTop: 5}}>View All Offers</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Extra3000;
