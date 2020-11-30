/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import CurrentOrder from '../../components/CurrentOrder/CurrentOrder';
import RecentOrderData from '../../assets/Data/RecentOrderData';
import UserAddresses from '../../assets/Data/UserAddresses';
import * as Progress from 'react-native-progress';

const OrderDetailsScreen1 = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Order Details" page="Home" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <CurrentOrder />
                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal10, HelperStyle.paddingHorizontal10, HelperStyle.paddingVertical20, {borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}]}>
                    <Progress.Bar progress={0.6} width={110} color="#FF962C" unfilledColor="#DFE0E5" borderColor="#DFE0E5" style={{ transform: [{ rotate: '90deg' }], marginLeft: -50, marginRight: -30 }} />
                    <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween, {width: '90%'}]}>
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
                    </View>
                </View>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal10, {borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}]}>
                    <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexRow, HelperStyle.flexCenter, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, {width: '50%', borderRightColor: '#D4D4D4', borderRightWidth: 1}]} onPress={() => navigation.navigate('RequestCancellation')}>
                        <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 15}}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexRow, HelperStyle.flexCenter, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, {width: '50%'}]}>
                        <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 15}}>
                            Need Help?
                        </Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 25}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginVertical40]} onPress={() => navigation.navigate('RequestCancellation')}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Cancel Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default OrderDetailsScreen1;

