/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardComponent = ({src, name, price, rating, mrp, reviews}) => {
    return (
        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, styles.shadow, {width: '45%', height: '23%', backgroundColor: '#FEEEF0', padding: 10, paddingTop: 0, borderRadius: 8}]}>
            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexAlignCenter]}>
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
            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow, {justifyContent: 'flex-end', width: '100%'}]}>
                <Icon name="pluscircleo" type="AntDesign" style={{fontSize: 16, color: '#FF962C', marginRight : 5}} />
            </TouchableOpacity>
        </View>
    );
};

export default CardComponent;

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


