/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import CurrentOrder from '../../components/CurrentOrder/CurrentOrder';
import PreviousOrder from '../../components/PreviousOrder/PreviousOrder';

const MyOrderScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="My Orders" page="Home" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.marginBottom80]}>
                    <CurrentOrder />
                    <PreviousOrder />
                </View>
            </ScrollView>
        </View>
    );
};

export default MyOrderScreen;

