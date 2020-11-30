/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import {Icon} from 'native-base';
import Extra3000 from '../../components/Extra3000/Extra3000';
import PriceDetailsCard from '../../components/PriceDetailsCard/PriceDetailsCard';

const SavedCardsScreen = ({ navigation }) => {
    const [isActive, setActive] = React.useState('first');
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Saved Cards" page="Payment" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.flexBetween, HelperStyle.marginVertical20, HelperStyle.marginBottom50]}>
                    <View style={[HelperStyle.flexColumn]}>
                        <Extra3000 />
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical30, HelperStyle.paddingVertical30, HelperStyle.marginHorizontal20, HelperStyle.paddingHorizontal20]}>
                            <View style={[HelperStyle.flexColumn]}>
                                <TouchableOpacity activeOpacity={0.8}  onPress={() => setActive('first')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                    <Icon name={isActive === 'first' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: BaseColors.heading, fontSize: 14}}>**** **** **** 2222</Text>
                                </TouchableOpacity>
                                {isActive === 'first' ? (
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginLeft30]}>
                                        <View style={[HelperStyle.flexColumn, {width: '30%'}]}>
                                            <TextInput
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={[styles.textInput1]}
                                                placeholder="CVC"
                                                placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                                placeholderTextColor = {BaseColors.heading}
                                                keyboardType="numeric"
                                            />
                                        </View>
                                    </View>
                                ) : null}
                            </View>
                            <View style={[HelperStyle.flexColumnr, HelperStyle.marginVertical10]}>
                                <TouchableOpacity activeOpacity={0.8}  onPress={() => setActive('second')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                    <Icon name={isActive === 'second' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: BaseColors.heading, fontSize: 14}}>**** **** **** 2345</Text>
                                </TouchableOpacity>
                                {isActive === 'second' ? (
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginLeft30]}>
                                        <View style={[HelperStyle.flexColumn, {width: '30%'}]}>
                                            <TextInput
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={[styles.textInput1]}
                                                placeholder="CVC"
                                                placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                                placeholderTextColor = {BaseColors.heading}
                                                keyboardType="numeric"
                                            />
                                        </View>
                                    </View>
                                ) : null}
                            </View>
                            <View style={[HelperStyle.flexColumn]}>
                                <TouchableOpacity activeOpacity={0.8}  onPress={() => setActive('third')} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                    <Icon name={isActive === 'third' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: BaseColors.heading, fontSize: 14}}>**** **** **** 2345</Text>
                                </TouchableOpacity>
                                {isActive === 'third' ? (
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginLeft30]}>
                                        <View style={[HelperStyle.flexColumn, {width: '30%'}]}>
                                            <TextInput
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={[styles.textInput1]}
                                                placeholder="CVC"
                                                placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                                placeholderTextColor = {BaseColors.heading}
                                                keyboardType="numeric"
                                            />
                                        </View>
                                    </View>
                                ) : null}
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginTop20]}>
                                <Icon name="plus" type="Entypo" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} onPress={() => setActive('third')} />
                                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('AddCard')}>
                                    <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 16}}>Add New Card</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PriceDetailsCard />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30}, HelperStyle.marginHorizontal40, styles.shadow, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginTop30]}  onPress={() => navigation.navigate('PaymentSuccessful')}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Pay
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default SavedCardsScreen;

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
    textInput1: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 10,
        width: '50%',
        paddingVertical: 0,
        borderBottomWidth: 1,
        borderBottomColor : '#DFE0E5',
    },
});
