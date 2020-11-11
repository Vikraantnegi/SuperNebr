/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';

const HomeCard = ({src, name, price, rating, mrp, reviews}) => {
    return (
        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, styles.shadow, {width: '45%', height: '23%', backgroundColor: '#FEEEF0', padding: 10, paddingTop: 0, borderRadius: 8}]}>
            <View style={[HelperStyle.flexRow]}>
                <Image source={{ uri : src }} style={{height: 120, width: '85%'}} />
                <Icon name="forward" type="Entypo" style={{fontSize: 20, color: '#DFE0E5', position : 'absolute', right: -10, top: 15}} />
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
            <View style={[HelperStyle.flexRow, {justifyContent: 'flex-end', width: '100%'}]}>
                <Icon name="pluscircleo" type="AntDesign" style={{fontSize: 16, color: '#FF962C', marginRight : 5}} />
            </View>
        </View>
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


