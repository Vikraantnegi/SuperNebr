/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import NotificationsData from '../../assets/Data/HomeData/NotificationsData';
import NotificationsCard from '../../components/NotificationsCard/NotificationsCard';
import { ScrollView } from 'react-native-gesture-handler';

const NotificationsScreen = ({ navigation }) => {

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Notifications" page="Home" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20, HelperStyle.marginBottom80]}>
                    {NotificationsData.map(item => (
                        <NotificationsCard key={item.sr} title={item.title} desc={item.desc} time={item.time} status={item.read} date={item.date}  />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default NotificationsScreen;

