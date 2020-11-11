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
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20]}>
                    {CartData.map(item => (
                        <CartComponent key={item.sr} name={item.name} img={item.src} color={item.color} price={item.price} discountedprice={item.discountedprice} qty={item.qty} />
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
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginBottom80]}>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30, marginVertical: 5}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate('')}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Pay
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <BottomNavigation activeScreen="Cart" navigation={navigation} />
        </View>
    );
};

export default CartScreen;

