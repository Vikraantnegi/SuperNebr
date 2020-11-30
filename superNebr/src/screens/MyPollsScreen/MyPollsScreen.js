/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import Polls from '../../assets/Data/Polls';
import MyPollCard from '../../components/MyPollCard/MyPollCard';

const MyPollsScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="My Polls" page="My" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.marginBottom80]}>
                    {Polls.map(poll =>(
                        <MyPollCard key={poll.sr} name={poll.name} title={poll.title} date={poll.date} choices={poll.choices} pic={poll.pic} />
                    ))}
                </View>
            </ScrollView>
        <BottomNavigation name="" navigation={navigation} />
        </View>
    );
};

export default MyPollsScreen;

