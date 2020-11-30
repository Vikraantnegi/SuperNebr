/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import { useNavigation } from '@react-navigation/native';
import RecentOrderData from '../../assets/Data/RecentOrderData';
import BaseColors from '../../constants/BaseColors';

const CurrentOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={[HelperStyle.paddingBottom5, HelperStyle.marginHorizontal10, {borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}]}>
            {RecentOrderData.map(order => (
                <TouchableOpacity key={order.sr} activeOpacity={0.8} style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, HelperStyle.paddingHorizontal10, HelperStyle.paddingVertical20]} onPress={() => navigation.navigate('OrderDetails1')}>
                    <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween, {width: '60%'}]}>
                        <Text style={{fontSize: 10, color: '#A2A2A2', fontFamily: BaseFont.fontMedium}}>
                            Order ID {order.orderid}
                        </Text>
                        <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween]}>
                            <Text style={{fontSize: 13, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                {order.name}{'\n'}(Color - {order.color})
                            </Text>
                            <Text style={{fontSize: 10, color: '#A2A2A2', fontFamily: BaseFont.fontMedium}}>
                                Seller : {order.seller}
                            </Text>
                            <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}}>
                                ₹{order.price}
                            </Text>
                        </View>
                    </View>
                    <Image source={{uri : order.src}} style={{borderRadius: 10, height: 90, width: 90}} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CurrentOrder;

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


