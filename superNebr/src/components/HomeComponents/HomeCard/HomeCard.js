/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import HelperStyle from '../../../styles/HelperStyle';
import BaseFont from '../../../constants/BaseFont';
import {Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';

const HomeCard = ({src, name, price, rating, mrp, reviews}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, styles.shadow, {width: '45%', height: '45%', backgroundColor: '#FFF3F5', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8}]} onPress={() => navigation.navigate('ProductDetail')}>
            <View style={[HelperStyle.flexRow]}>
                <Image source={{ uri : src }} style={{height: 120, width: '85%'}} />
                <Icon name="share-alt" type="FontAwesome5" style={{fontSize: 20, color: '#243177', position : 'absolute', right: -10, top: 15}} />
            </View>
            <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15, marginVertical: 5}} numberOfLines={1}>
                {name}
            </Text>
            <View style={[HelperStyle.flexRow, {marginBottom: 5}]}>
                <Icon name="star" type="AntDesign" style={{fontSize: 15, color: '#243177', marginRight: 5}} />
                <Text style={{fontFamily: BaseFont.fontMedium, color : '#243177', fontSize: 13}}>
                    {rating}
                </Text>
                <Text style={{fontFamily: BaseFont.fontMedium, color : '#7F8592', fontSize: 13}}>
                    ({reviews})
                </Text>
            </View>
            <View style={[HelperStyle.flexRow, {marginBottom: 5}]}>
                <Text style={{fontFamily: BaseFont.fontMedium, color : '#243177', fontSize: 13, textDecorationLine: 'line-through', marginRight: 10}}>
                    ₹{mrp}
                </Text>
                <Text style={{fontFamily: BaseFont.fontMedium, color : '#243177', fontSize: 13}}>
                    ₹{price}
                </Text>
            </View>
            <View style={[HelperStyle.flexRow, {marginBottom: 5}]}>
                <Text style={{fontFamily: BaseFont.fontMedium, color : '#243177', fontSize: 6}}>
                    Extra 3000 off on SBI Prepaid Transaction
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HomeCard;

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


