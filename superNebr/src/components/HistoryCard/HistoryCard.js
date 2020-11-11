/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HistoryCard = ({name, img, color, price, status}) => {
    const width = Dimensions.get('window').width - 40;
    let bgColor = '';
    if (status === 'Coming'){
        bgColor = '#00BECE';
    }
    else {
        bgColor = '#FF962C';
    }
    return (
        <View style={[{width: width}, styles.shadow, {backgroundColor: '#FCEAEC', borderRadius: 10, marginVertical: 10, padding: 10 }]}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]} >
                <View style={[HelperStyle.flexRow, {width: '30%'}]}>
                    <Image source ={{uri : img}} style={{height: 90, width: '100%', borderRadius: 5}} />
                </View>
                <View style={[HelperStyle.flexColumn, {width: '40%', height : 90, marginLeft: 10 }]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#243177', fontSize: 15}}>
                        {name}
                    </Text>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                        <Icon name="price-tag" type="Entypo" style={{fontSize: 16, color: '#7F8592', marginRight: 5}} />
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13}}>
                            ₹{price}
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} style={[{ width : '90%', backgroundColor: '#DFE0E580', borderRadius: 15, padding: 5, justifyContent: 'space-around'}, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                        <Icon name="color-palette" type="Ionicons" style={{fontSize: 15, color : '#7F8592'}} />
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13, marginRight: 5}}>
                            Color :
                        </Text>
                        <TouchableOpacity activeOpacity={1} style={[{backgroundColor: color, height: 16, width: 16, borderRadius: 8}]} />
                    </TouchableOpacity>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, {justifyContent: 'flex-start' , width: '30%', height: 80}]}>
                    <TouchableOpacity activeOpacity={1} style={[{backgroundColor: bgColor, padding: 5, paddingHorizontal: 10, borderRadius: 10},HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: 'white', fontSize: 11}}>{status}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default HistoryCard;

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


