/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import {Icon} from 'native-base';
import Extra3000 from '../../components/Extra3000/Extra3000';
import PriceDetailsCard from '../../components/PriceDetailsCard/PriceDetailsCard';
const paytm = 'https://www.searchpng.com/wp-content/uploads/2019/02/Paytm-Logo-With-White-Border-PNG-image.png';
const phonepe = 'https://www.searchpng.com/wp-content/uploads/2018/11/phone-pe.png';
const gpay = 'https://www.searchpng.com/wp-content/uploads/2019/02/Google-Pay-Logo-Icon-PNG.png';

const UPIScreen = ({ navigation }) => {
    const [isActive, setActive] = React.useState('first');
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Select UPI" page="Payment" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.flexBetween, HelperStyle.marginVertical20, HelperStyle.marginBottom50]}>
                    <View style={[HelperStyle.flexColumn]}>
                        <Extra3000 />
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical50, HelperStyle.paddingVertical30, HelperStyle.marginHorizontal20, HelperStyle.paddingHorizontal20]}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('first')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginBottom10]}>
                                <Icon name={isActive === 'first' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 17}}>Paytm</Text>
                                <Image source={{uri : paytm}} style={{height: 10, width: 30, marginLeft: 'auto'}} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('second')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginBottom5]}>
                                <Icon name={isActive === 'second' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}}  />
                                <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 17}}>PhonePe</Text>
                                <Image source={{uri : phonepe}} style={{height: 30, width: 30, marginLeft: 'auto'}} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('third')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                <Icon name={isActive === 'third' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 17}}>Google Pay</Text>
                                <Image source={{uri : gpay}} style={{height: 30, width: 30, marginLeft: 'auto'}} />
                            </TouchableOpacity>
                        </View>
                        <PriceDetailsCard />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30}, HelperStyle.marginHorizontal40, styles.shadow, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginTop30]} onPress={() => navigation.navigate('PaymentSuccessful')}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Pay
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default UPIScreen;

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
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 10,
        padding: 5,
        paddingLeft: 15,
        width: '60%',
        marginRight: 20,
        borderWidth: 1,
        borderColor : 'rgba(0,0,0,0.05)',
    },
});
