/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, StyleSheet,TextInput, Text, TouchableOpacity } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import BaseFont from '../../constants/BaseFont';
import { Icon } from 'native-base';

const CreatePoll = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Create Poll" page="Polls" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.marginVertical40]}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={[styles.textInput]}
                        placeholder="Question"
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <View style={[HelperStyle.marginVertical10, HelperStyle.flexColumn]}>
                        <View style={[HelperStyle.paddingVertical10, HelperStyle.paddingHorizontal20]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder="Option 2"
                                    style={[styles.textInput1, {width: '100%'}]}
                                    placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                    placeholderTextColor = {BaseColors.heading}
                                />
                                <Icon name="circle-with-cross" type="Entypo" style={{fontSize: 20, color: BaseColors.heading, marginLeft : 'auto', marginRight: 20}} />
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder="Option 2"
                                    style={[styles.textInput1, {width: '100%'}]}
                                    placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                    placeholderTextColor = {BaseColors.heading}
                                />
                                <Icon name="circle-with-cross" type="Entypo" style={{fontSize: 20, color: BaseColors.heading, marginLeft : 'auto', marginRight: 20}} />
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.paddingHorizontal20]}>
                            <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 10, textAlign: 'right'}}>
                                + Add Options
                            </Text>
                        </TouchableOpacity>
                        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical40]}>
                            <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C'}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.paddingHorizontal20]} onPress={() => navigation.navigate('CreatePoll')}>
                                <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                                    Create Poll
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CreatePoll;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontBold,
        color: BaseColors.heading,
        fontSize: 12,
        marginHorizontal: 20,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor : '#FF962C',
    },
    textInput1: {
        fontFamily: BaseFont.fontBold,
        color: BaseColors.heading,
        fontSize: 13,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#FEF3F4',
    },
});
