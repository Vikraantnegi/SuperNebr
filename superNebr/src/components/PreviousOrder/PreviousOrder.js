/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import BaseColors from '../../constants/BaseColors';
import PreviousOrderData from '../../assets/Data/PreviousOrderData';

const PreviousOrder = () => {
    const navigation = useNavigation();
    const stars = [
        <Text style={{textAlign: 'left', marginVertical: 5}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} />
        </Text>,
        <Text style={{textAlign: 'left', marginVertical: 5}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} />
        </Text>,
        <Text style={{textAlign: 'left', marginVertical: 5}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} />
        </Text>,
        <Text style={{textAlign: 'left', marginVertical: 5}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#DFE0E5' }} />
        </Text>,
        <Text style={{textAlign: 'left', marginVertical: 5}}>
            <Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} /><Icon name="star" type="AntDesign" style={{ fontSize: 15, color: '#FF962C' }} />
        </Text>,
    ];
    return (
        <View style={[HelperStyle.marginHorizontal10]}>
            {PreviousOrderData.map(order => (
                <TouchableOpacity key={order.sr} activeOpacity={0.8} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.paddingHorizontal10, HelperStyle.paddingVertical15, {borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}]} onPress={() => navigation.navigate('OrderDetails')}>
                    <Image source={{uri : order.src}} style={{borderRadius: 10, height: 90, width: 90, marginRight: 15}} />
                    <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween, {width: '50%'}]}>
                        <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontBold}}>
                            Delivered on {order.delivery}
                        </Text>
                        <Text style={{fontSize: 15, color: '#A2A2A2', fontFamily: BaseFont.fontMedium}}>
                            {order.name}
                        </Text>
                        {stars[order.rating - 1]}
                        <Text style={{fontSize: 10, color: BaseColors.heading, fontFamily: BaseFont.fontMedium}} onPress={() => navigation.navigate('AddReview')}>
                            Write a Review
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default PreviousOrder;

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


