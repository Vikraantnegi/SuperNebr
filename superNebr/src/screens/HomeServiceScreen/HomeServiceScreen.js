/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BaseFont from '../../constants/BaseFont';
import HomeServiceData from '../../assets/Data/HomeData/HomeServiceData';
import HomeServiceCard from '../../components/HomeComponents/HomeServiceCard/HomeServiceCard';

export default function HomeServiceScreen({navigation}) {
     return (
      <View style={[{flex : 1}, BaseColors.BackgroundColor]}>
        <HeaderA name="Electronics" page="Home" />
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{flexGrow : 1, marginTop: 10}]}
        >
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal20, {flexWrap: 'wrap', marginBottom: 40}]}>
                {HomeServiceData.map(item => (
                    <HomeServiceCard key={item.sr} src={item.src} name={item.name} timings={item.timings} contact={item.contact} count={item.count} />
                ))}
                {HomeServiceData.map(item => (
                    <HomeServiceCard key={item.sr} src={item.src} name={item.name} timings={item.timings} contact={item.contact} count={item.count} />
                ))}
                {HomeServiceData.map(item => (
                    <HomeServiceCard key={item.sr} src={item.src} name={item.name} timings={item.timings} contact={item.contact} count={item.count} />
                ))}
                {HomeServiceData.map(item => (
                    <HomeServiceCard key={item.sr} src={item.src} name={item.name} timings={item.timings} contact={item.contact} count={item.count} />
                ))}
            </View>
        </ScrollView>
      </View>
  );
}
