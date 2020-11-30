/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import {Icon} from 'native-base';
import PriceDetailsCard from '../../components/PriceDetailsCard/PriceDetailsCard';
import Extra3000 from '../../components/Extra3000/Extra3000';

const PaymentScreen = ({ navigation }) => {
    const [isActive, setActive] = React.useState('first');
    let link;
    if (isActive === 'first'){
        link = 'UPI';
    }
    else if (isActive === 'second'){
        link = 'SavedCards';
    }
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Payment" page="OrderSummary" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.flexBetween, HelperStyle.marginVertical20, HelperStyle.marginBottom50]}>
                    <View style={[HelperStyle.flexColumn]}>
                        <Extra3000 />
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical40, HelperStyle.paddingTop20, HelperStyle.marginHorizontal20, HelperStyle.paddingHorizontal20]}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('first')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginBottom5]}>
                                <Icon name={isActive === 'first' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}}/>
                                <Image source={{uri : 'https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png'}} style={{height: 20, width: 20, marginRight: 10}} />
                                <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 17}}>UPI</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('second')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginBottom5]}>
                                <Icon name={isActive === 'second' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                <Icon name="credit-card" type="FontAwesome" style={{marginRight: 10, fontSize: 20, color: '#4398D1'}} />
                                <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 17}}>Credit / Debit / ATM Card</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('third')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginBottom5]}>
                                <Icon name={isActive === 'third' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}}/>
                                <Icon name="bank" type="FontAwesome" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 17}}>Net Banking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('fourth')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                <Icon name={isActive === 'fourth' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                <Icon name="truck-moving" type="FontAwesome5" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 17}}>COD</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical20, HelperStyle.marginVertical10, HelperStyle.borderBox]}>
                            <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 10}}>Add Coupon Code</Text>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {justifyContent: 'space-around'}, HelperStyle.paddingTop10]}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={[styles.textInput]}
                                    placeholder="Enter Code"
                                    placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                    placeholderTextColor = "#7F8592"
                                />
                                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C'}, HelperStyle.paddingVertical10, HelperStyle.paddingHorizontal20, HelperStyle.flexAlignCenter]} >
                                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 12, color: 'white' }]}>
                                        Apply
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PriceDetailsCard />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30}, HelperStyle.marginHorizontal40, styles.shadow, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginTop30]} onPress={() => navigation.navigate(link)} >
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default PaymentScreen;

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
