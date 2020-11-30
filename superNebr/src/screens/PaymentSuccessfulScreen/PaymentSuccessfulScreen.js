/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import success from '../../assets/Illustrations/Successful.png';

const PaymentSuccessfulScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <View style={[HelperStyle.flex1, HelperStyle.flexBetween, HelperStyle.marginVertical50]}>
                <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginTop50]}>
                    <Image source={success} style={{height: 150, width: 150, marginVertical: 30}} />
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 30, color: '#33CB39' }]}>
                        Thank you!
                    </Text>
                    <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 20, color: '#263238' }]}>
                        Purchase was successful
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30}, HelperStyle.marginHorizontal40, styles.shadow, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginTop30]} onPress={() => navigation.navigate('Home')}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PaymentSuccessfulScreen;

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
