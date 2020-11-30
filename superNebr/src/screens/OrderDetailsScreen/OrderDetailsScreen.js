/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import CurrentOrder from '../../components/CurrentOrder/CurrentOrder';
import {Icon} from 'native-base';
import RecentOrderData from '../../assets/Data/RecentOrderData';
import UserAddresses from '../../assets/Data/UserAddresses';

const OrderDetailsScreen = ({ navigation }) => {
    const stars = [
        <Text style={{textAlign: 'left'}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} />
        </Text>,
        <Text style={{textAlign: 'left'}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} />
        </Text>,
        <Text style={{textAlign: 'left'}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} />
        </Text>,
        <Text style={{textAlign: 'left'}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} />
        </Text>,
        <Text style={{textAlign: 'left'}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} />
        </Text>,
    ];
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Order Details" page="Home" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <CurrentOrder />
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal10, HelperStyle.paddingHorizontal10, HelperStyle.paddingVertical20, {borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}]}>
                    <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween, {width: '100%'}]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                            <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                Ordered Successfully
                            </Text>
                            <Text style={{fontSize: 11, color: '#FF962C', fontFamily: BaseFont.fontMedium}}>
                                {RecentOrderData[0].placed}
                            </Text>
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, {marginVertical: 5}]}>
                            <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                Dispatched
                            </Text>
                            <Text style={{fontSize: 11, color: '#FF962C', fontFamily: BaseFont.fontMedium}}>
                                {RecentOrderData[0].packed}
                            </Text>
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, {marginVertical: 5}]}>
                            <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                Shipping
                            </Text>
                            <Text style={{fontSize: 11, color: '#FF962C', fontFamily: BaseFont.fontMedium}}>
                                {RecentOrderData[0].transport}
                            </Text>
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, {marginVertical: 5}]}>
                            <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                Delivered
                            </Text>
                            <Text style={{fontSize: 11, color: '#FF962C', fontFamily: BaseFont.fontMedium}}>
                                {RecentOrderData[0].delivery}
                            </Text>
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, {marginTop: 5}]}>
                            {stars[RecentOrderData[0].ratings - 1]}
                            <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate('AddReview')}>
                                <Text style={{fontSize: 10, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                    Write a Review
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal10, HelperStyle.paddingHorizontal10, HelperStyle.paddingVertical10, {borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}]}>
                    <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween, {width: '100%'}]}>
                        <Text style={{fontSize: 10, color: '#A2A2A2', fontFamily: BaseFont.fontRegular}}>
                            Shipping Details
                        </Text>
                        <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 15, marginVertical: 5}}>
                            {UserAddresses[1].name}
                        </Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 11, marginBottom: 5}}>
                            {UserAddresses[1].contact}
                        </Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 11, marginBottom: 5}}>
                            {UserAddresses[1].flat} {UserAddresses[1].block} {'\n'}{UserAddresses[1].community}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexRow, HelperStyle.flexCenter, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal10, HelperStyle.paddingHorizontal10, HelperStyle.paddingVertical10, {borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 15}}>
                        Need Help?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal10, HelperStyle.paddingHorizontal10, HelperStyle.paddingVertical10, {borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}]}>
                    <Icon name="file-invoice" type="FontAwesome5" style={{fontSize: 15, color: BaseColors.heading, marginRight : 15}} />
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 15}}>
                        Invoice Download
                    </Text>
                </TouchableOpacity>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10, HelperStyle.marginHorizontal20, HelperStyle.marginBottom50]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 15}}>SubTotal</Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 15}}>₹{RecentOrderData[0].price}</Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10]}>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 15}}>Shipping Fee</Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 15}}>₹0</Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 15}}>TOTAL</Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#FF962C', fontSize: 15}}>₹{RecentOrderData[0].price}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default OrderDetailsScreen;

