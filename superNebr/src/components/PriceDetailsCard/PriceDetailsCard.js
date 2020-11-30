/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import RecentOrderData from '../../assets/Data/RecentOrderData';

const PriceDetailsCard = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical20, HelperStyle.paddingVertical20, HelperStyle.paddingHorizontal20, HelperStyle.marginHorizontal20, styles.shadow, {backgroundColor: '#FEEEF0', borderRadius: 10}]}>
                <Text style={{fontFamily: BaseFont.fontBold, color: '#7F8592', fontSize: 16, paddingBottom: 5, borderBottomColor: '#DFE0E5', borderBottomWidth: 1}}>PRICE DETAILS</Text>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 16}}>Price</Text>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 16}}>₹{RecentOrderData[0].price}</Text>
                </View>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 16}}>Fee</Text>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#33CB39', fontSize: 16}}>FREE</Text>
                </View>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                    <Text style={{fontFamily: BaseFont.fontBold, color: 'black', fontSize: 16}}>Amount Payable</Text>
                    <Text style={{fontFamily: BaseFont.fontBold, color: 'black', fontSize: 16}}>₹{RecentOrderData[0].price}</Text>
                </View>
            </View>
        </View>
    );
};

export default PriceDetailsCard;

const styles = StyleSheet.create({
    shadow : {
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 7,
        shadowOpacity: 0,
    },
});
