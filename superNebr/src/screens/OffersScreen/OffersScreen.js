/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderB from '../../components/Header/HeaderB';

const a = [...Array(10).keys()];

const OffersScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderB name="Offers" page="Payment" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                    {a.map(offer =>(
                        <TouchableOpacity activeOpacity={0.5} key={offer} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.dividerBottom, HelperStyle.marginVertical10, HelperStyle.paddingBottom15, {width: '100%'}]}>
                            <Icon name="brightness-percent" type="MaterialCommunityIcons" style={{marginRight: 10, fontSize: 20, color: '#22A730'}} />
                            <Text style={{fontFamily: BaseFont.fontMedium, color: BaseColors.heading, fontSize: 14}}>Extra 3000 off on SBI Prepaid Transaction</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default OffersScreen;

