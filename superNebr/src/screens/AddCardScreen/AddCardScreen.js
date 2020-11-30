/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import Extra3000 from '../../components/Extra3000/Extra3000';
import PriceDetailsCard from '../../components/PriceDetailsCard/PriceDetailsCard';

const AddCardScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Add Card" page="SavedCards" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.flexBetween, HelperStyle.marginVertical20, HelperStyle.marginBottom50]}>
                    <View style={[HelperStyle.flexColumn]}>
                        <Extra3000 />
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical50, HelperStyle.paddingVertical30, HelperStyle.marginHorizontal20, HelperStyle.paddingHorizontal20]}>
                            <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10]}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.textInput}
                                    placeholder="Enter your Card Number"
                                    placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                    placeholderTextColor = {BaseColors.heading}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                <View style={[HelperStyle.flexColumn, {width: '50%'}]}>
                                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 10, color: BaseColors.heading }]}> EXPIRY DATE </Text>
                                    <TextInput
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        style={[styles.textInput, {width: '40%', borderBottomColor : '#DFE0E5'}]}
                                        placeholder="MM/YY"
                                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                        placeholderTextColor = {BaseColors.heading}
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={[HelperStyle.flexColumn, {width: '50%'}]}>
                                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 10, color: BaseColors.heading }]}> CVC </Text>
                                    <TextInput
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        style={[styles.textInput, {width: '30%', borderBottomColor : '#DFE0E5'}]}
                                        placeholder="XXX"
                                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                        placeholderTextColor = {BaseColors.heading}
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                        </View>
                        <PriceDetailsCard />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30}, HelperStyle.marginHorizontal40, styles.shadow, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginTop30]}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Pay
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default AddCardScreen;

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
        fontSize: 14,
        padding: 3,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor : '#FF962C',
    },
});
