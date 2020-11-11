/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BaseColors from '../../constants/BaseColors';

const WishlistCard = ({name, img, color, price, discountedprice}) => {
    const width = Dimensions.get('window').width - 40;
    return (
        <View style={[{width: width}, styles.shadow, HelperStyle.marginVertical10, HelperStyle.paddingBottom20, {backgroundColor: '#FCEAEC', borderRadius: 10, padding: 10 }]}>
            <Icon name="circle-with-cross" type="Entypo" style={{fontSize: 20, color: BaseColors.heading, position : 'absolute', right: 5, top: 5}} />
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]} >
                <View style={[HelperStyle.flexRow, {width: '30%'}]}>
                    <Image source ={{uri : img}} style={{height: 90, width: '100%', borderRadius: 5}} />
                </View>
                <View style={[HelperStyle.flexColumn, {width: '40%', height : 90, marginHorizontal: 10 }]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#243177', fontSize: 15}}>
                        {name}
                    </Text>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 10}]}>
                        <Icon name="price-tag" type="Entypo" style={{fontSize: 16, color: '#7F8592', marginRight: 5}} />
                        {discountedprice > 0 ? (
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13, textDecorationLine: 'line-through', marginRight: 5}}>
                                ₹{discountedprice}
                            </Text>
                        ) : null}
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13}}>
                            ₹{price}
                        </Text>
                    </View>
                    <View activeOpacity={1} style={[ HelperStyle.flexRow, HelperStyle.flexAlignCenter ]}>
                        <Icon name="color-palette" type="Ionicons" style={{fontSize: 15, color : '#7F8592'}} />
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13, marginHorizontal: 5}}>
                            Color :
                        </Text>
                        <TouchableOpacity activeOpacity={1} style={[{backgroundColor: color, height: 16, width: 16, borderRadius: 8}]} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default WishlistCard;

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


