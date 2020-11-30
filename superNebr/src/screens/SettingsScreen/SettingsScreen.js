/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderB from '../../components/Header/HeaderB';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderB name="Settings" page="Home" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical30, HelperStyle.marginHorizontal20]}>
                    <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.dividerBottom, HelperStyle.marginVertical10, HelperStyle.paddingBottom10]} onPress={() => navigation.navigate('ChangePasswordSettings')}>
                        <Text style={{fontFamily: BaseFont.fontBold, fontSize: 16, color: BaseColors.heading}}>
                            Change a password
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.dividerBottom, HelperStyle.marginVertical10, HelperStyle.paddingBottom10]}>
                        <Text style={{fontFamily: BaseFont.fontBold, fontSize: 16, color: BaseColors.heading}}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.dividerBottom, HelperStyle.marginVertical10, HelperStyle.paddingBottom10]}>
                        <Text style={{fontFamily: BaseFont.fontBold, fontSize: 16, color: BaseColors.heading}}>
                            Help Center
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        <BottomNavigation name="" navigation={navigation} />
        </View>
    );
};

export default SettingsScreen;

