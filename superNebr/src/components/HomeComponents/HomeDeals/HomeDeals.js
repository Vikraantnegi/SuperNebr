/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import HelperStyle from '../../../styles/HelperStyle';
import BaseFont from '../../../constants/BaseFont';
import DealoftheDay from '../../../assets/Data/HomeData/DealoftheDay';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeDeals = ({navigation}) => {
    const width = Dimensions.get('window').width - 40;
    return (
        <View>
        {DealoftheDay.map(entry => (
            <TouchableOpacity activeOpacity={0.8} key={entry.sr} style={[{width: width}, HelperStyle.marginVertical10, styles.shadow, {backgroundColor: '#FFF3F5', borderRadius: 10 }]}>
                <TouchableOpacity activeOpacity={0.8} style={[styles.tag , HelperStyle.flexAlignCenter, HelperStyle.flexCenter, {marginBottom: -10}]} >
                    <Text style={{fontFamily: BaseFont.fontBold, color: 'white', fontSize: 11}}>
                        {entry.discountpercent}
                    </Text>
                </TouchableOpacity>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginVertical: 5, padding: 15, overflow: 'visible'}]} >
                    <View style={[HelperStyle.flexRow, {width: '45%'}]}>
                        <Image source ={{uri : entry.src}} style={{height: 100, width: '100%'}} />
                    </View>
                    <View style={[HelperStyle.flexColumn, {width: '45%'}]}>
                        <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#243177', fontSize: 15, marginVertical: 2}}>
                            {entry.name}
                        </Text>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                            <Icon name="star" type="AntDesign" style={{fontSize: 16, color: '#243177', marginRight: 5}} />
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13, marginVertical: 2}}>
                                {entry.star}<Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13}}>({entry.reviews})</Text>
                            </Text>
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                            <Icon name="price-tag" type="Entypo" style={{fontSize: 16, color: '#7F8592'}} />
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13, textDecorationLine: 'line-through', marginHorizontal: 5}}>₹{entry.originalcost}</Text>
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13}}>₹{entry.discounted}</Text>
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                            <Icon name="clockcircle" type="AntDesign" style={{fontSize: 16, color: '#7F8592', marginRight: 5}} />
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13}}>Ends in {entry.timeleft}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        ))}
        </View>
    );
};

export default HomeDeals;

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
    tag :{backgroundColor: '#00BECE', height: 30, width: 40, borderTopRightRadius: 5, borderBottomRightRadius: 5, top: 5},
});


