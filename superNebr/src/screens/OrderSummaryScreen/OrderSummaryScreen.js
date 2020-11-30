/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import UserAddresses from '../../assets/Data/UserAddresses';
import RecentOrderData from '../../assets/Data/RecentOrderData';

const MyOrderScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Order Summary" page="Cart" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.flexBetween, HelperStyle.marginVertical20, HelperStyle.marginBottom50]}>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginTop20, HelperStyle.marginHorizontal20]}>
                        <View style={[HelperStyle.flexColumn, styles.shadow, HelperStyle.flexBetween, HelperStyle.paddingTop10, HelperStyle.paddingHorizontal20, {backgroundColor: '#FEEEF0', borderRadius: 10}]}>
                            <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 15, marginVertical: 5}}>
                                {UserAddresses[1].name}
                            </Text>
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 11, marginBottom: 5}}>
                                {UserAddresses[1].contact}
                            </Text>
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 11, marginBottom: 5}}>
                                {UserAddresses[1].flat} {UserAddresses[1].block} {'\n'}{UserAddresses[1].community}
                            </Text>
                            <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#243177'}, HelperStyle.marginHorizontal20, HelperStyle.flexAlignCenter, {paddingVertical: 5, marginTop: 10}]} onPress={() => navigation.navigate('AddAddress')}>
                                <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 12, color: 'white' }]}>
                                    Change & Add Address
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical20, HelperStyle.marginVertical30, styles.shadow, {backgroundColor: '#FEEEF0', borderRadius: 10}]}>
                            <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween, { width: '60%'}]}>
                                <Text style={{fontSize: 10, color: '#A2A2A2', fontFamily: BaseFont.fontMedium}}>
                                    Order ID {RecentOrderData[0].orderid}
                                </Text>
                                <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween]}>
                                    <Text style={{fontSize: 13, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                        {RecentOrderData[0].name}{'\n'}(Color - {RecentOrderData[0].color})
                                    </Text>
                                    <Text style={{fontSize: 10, color: '#A2A2A2', fontFamily: BaseFont.fontMedium}}>
                                        Seller : {RecentOrderData[0].seller}
                                    </Text>
                                    <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                        ₹{RecentOrderData[0].price}
                                    </Text>
                                </View>
                            </View>
                            <Image source={{uri : RecentOrderData[0].src}} style={{borderRadius: 10, height: 90, width: 90}} />
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.paddingVertical20, HelperStyle.paddingHorizontal20, styles.shadow, {backgroundColor: '#FEEEF0', borderRadius: 10}]}>
                            <Text style={{fontFamily: BaseFont.fontBold, color: '#7F8592', fontSize: 16, paddingBottom: 5, borderBottomColor: '#DFE0E5', borderBottomWidth: 1}}>PRICE DETAILS</Text>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 16}}>Price</Text>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 16}}>₹{RecentOrderData[0].price}</Text>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 16}}>Fee</Text>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 16}}>₹0</Text>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                                <Text style={{fontFamily: BaseFont.fontBold, color: 'black', fontSize: 16}}>Amount Payable</Text>
                                <Text style={{fontFamily: BaseFont.fontBold, color: 'black', fontSize: 16}}>₹{RecentOrderData[0].price}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30}, HelperStyle.marginHorizontal20, styles.shadow, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginTop30]} onPress={() => navigation.navigate('Payment')} >
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default MyOrderScreen;

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
