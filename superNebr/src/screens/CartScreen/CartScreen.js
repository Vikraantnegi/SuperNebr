/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import CartData from '../../assets/Data/CartData';
import HeaderA from '../../components/Header/HeaderA';
import CartComponent from '../../components/CartComponent/CartComponent';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import UserAddresses from '../../assets/Data/UserAddresses';

const CartScreen = ({ navigation }) => {
    let cost = 0;
    let tax = 0;
    CartData.map(item => {
        cost = cost + item.price * item.qty;
    });

    var total = cost + tax;

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="My Cart" page="Home" />
            <View style={[HelperStyle.flexColumn, HelperStyle.paddingHorizontal20, HelperStyle.marginVertical10, HelperStyle.paddingVertical10, {borderBottomColor: '#7F8592', borderBottomWidth: 1}]}>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 12}}>
                            Deliver to
                        </Text>
                        <Text style={{fontFamily: BaseFont.fontBold, color: '#243177', fontSize: 15, paddingHorizontal: 10}}>
                            {UserAddresses[1].name}
                        </Text>
                        <TouchableOpacity style={{backgroundColor: '#E2E2E2', padding: 3, borderRadius: 6, paddingHorizontal: 5}}>
                            <Text style={{fontFamily: BaseFont.fontBold, color: '#7F8592', fontSize: 6}}>HOME</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginTop: 5}]}>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 12}}>{UserAddresses[1].contact} {UserAddresses[1].flat}, {UserAddresses[1].block}, {UserAddresses[1].community}</Text>
                </View>
            </View>
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20]}>
                    {CartData.map(item => (
                        <CartComponent key={item.sr} avail={item.availability} seller={item.seller} percent={item.percent} size={item.size} name={item.name} img={item.src} color={item.color} price={item.price} discountedprice={item.discountedprice} qty={item.qty} />
                    ))}
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10, HelperStyle.marginHorizontal20]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 15}}>SubTotal</Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 15}}>₹{cost}</Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10]}>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 15}}>Shipping Fee</Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 15}}>₹{tax}</Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 15}}>TOTAL</Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#FF962C', fontSize: 15}}>₹{total}</Text>
                    </View>
                </View>
                <View style={[HelperStyle.flexRow, HelperStyle.marginBottom80]}>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: 'white', width: '55%'}, HelperStyle.paddingVertical10, HelperStyle.paddingHorizontal30]}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: BaseColors.heading }]}>
                            ₹{total}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', width: '45%'}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate('OrderSummary')}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <BottomNavigation activeScreen="Cart" navigation={navigation} />
        </View>
    );
};

export default CartScreen;

