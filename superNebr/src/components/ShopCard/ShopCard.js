/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ShopCard = ({name, img, color, price, discountedprice, seller, percent}) => {
    const navigation = useNavigation();
    const width = Dimensions.get('window').width - 40;
    return (
        <View style={[{width: width}, styles.shadow, {backgroundColor: '#FFFFFF', borderRadius: 10, marginVertical: 10, paddingVertical: 10 }]}>
            <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {padding: 10}]} 
                // onPressIn={() => navigation.navigate('ProductDetail')}
            >
                <View style={[HelperStyle.flexRow, {width: '30%'}]}>
                    <Image source ={{uri : img}} style={{height: 90, width: '100%', borderRadius: 5}} />
                </View>
                <View style={[HelperStyle.flexColumn, {width: '40%', height : 90, marginHorizontal: 10 }]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#243177', fontSize: 15}}>
                        {name}
                    </Text>
                    {seller !== '' ? (
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#A2A2A2', fontSize: 10}}>
                            Seller : {seller}
                        </Text>
                    ) : null}
                    <View style={[HelperStyle.flexColumn]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                            {discountedprice > 0 ? (
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13, textDecorationLine: 'line-through', marginRight: 5}}>
                                    ₹{discountedprice}
                                </Text>
                            ) : null}
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13}}>
                                ₹{price}
                            </Text>
                            {discountedprice > 0 ? (
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#22A730', fontSize: 10, marginTop: -10, marginLeft: 5}}>
                                    {percent}Off
                                </Text>
                            ) : null}
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={[{ backgroundColor: '#DFE0E580', borderRadius: 15, padding: 10, paddingVertical: 5, justifyContent: 'space-around'}, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                            <Icon name="color-palette" type="Ionicons" style={{fontSize: 15, color : '#7F8592', marginRight: 5}} />
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13}}>
                                Color :
                            </Text>
                            <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: color, height: 16, width: 16, borderRadius: 8, marginHorizontal: 5}]} />
                            <Icon name="caretdown" type="AntDesign" style={{fontSize: 10, color : '#1B2749'}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[HelperStyle.flexColumn, {alignItems: 'flex-end', justifyContent: 'flex-end' , width: '23%', height: 85}]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, {width: '100%'}]}>
                        <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 15, paddingVertical: 8, marginBottom: -5, paddingHorizontal: '30%'}, HelperStyle.flexAlignCenter]} onPress={() => navigation.navigate('Cart')}>
                            <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 10, color: 'white'}]}>
                                Add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ShopCard;

const styles = StyleSheet.create({
    shadow : {
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 7,
        shadowOpacity: 0,
    },
});


