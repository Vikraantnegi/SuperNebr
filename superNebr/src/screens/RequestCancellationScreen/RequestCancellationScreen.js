/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import {Icon} from 'native-base';
import WishlistData from '../../assets/Data/WishlistData';

const RequestCancellationScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Request Cancellation" page="Home" />
            <View style={[styles.shadow, HelperStyle.marginVertical20, HelperStyle.paddingHorizontal20, HelperStyle.marginHorizontal20, {backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10 }]}>
                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]} >
                    <View style={[HelperStyle.flexRow, {width: '40%'}]}>
                        <Image source ={{uri : WishlistData[0].src}} style={{height: 90, width: '100%', borderRadius: 5}} />
                    </View>
                    <View style={[HelperStyle.flexColumn, {width: '40%', height : 90, marginHorizontal: 10 }]}>
                        <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#243177', fontSize: 15}}>
                            {WishlistData[0].name}
                        </Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#A2A2A2', fontSize: 10, marginVertical: 5}}>
                            Seller : {WishlistData[0].seller}
                        </Text>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                            {WishlistData[0].discountedprice > 0 ? (
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13, textDecorationLine: 'line-through', marginRight: 5}}>
                                    ₹{WishlistData[0].discountedprice}
                                </Text>
                            ) : null}
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13}}>
                                ₹{WishlistData[0].price}
                            </Text>
                            {WishlistData[0].discountedprice > 0 ? (
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#22A730', fontSize: 10, marginLeft: 5}}>
                                    {WishlistData[0].percent}Off
                                </Text>
                            ) : null}
                        </View>
                    </View>
                </View>
            </View>
            <View style={[HelperStyle.flexColumn, HelperStyle.paddingHorizontal20]}>
                <Text style={{fontFamily: BaseFont.fontBold, color: '#243177', fontSize: 15}}>
                    Reason
                </Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.textInput}
                    placeholder="Type a Reason here"
                    placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                    placeholderTextColor = "#7F8592"
                    multiline={true}
                />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', marginTop: 150, marginHorizontal: 60, borderRadius: 25}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]}>
                <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                    Cancel Order
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default RequestCancellationScreen;

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
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: '#7F8592',
        fontSize: 10,
        paddingLeft: 10,
        paddingBottom: 0,
        marginRight: 40,
        borderBottomWidth: 1,
        borderBottomColor : 'rgba(0,0,0,0.05)',
    },
});
