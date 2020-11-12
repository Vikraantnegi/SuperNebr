/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BaseFont from '../../constants/BaseFont';
import ElectronicsData from '../../assets/Data/ElectronicsData';
import CategoryData from '../../assets/Data/CategoryData';
import CardComponent from '../../components/CardComponent/CardComponent';

export default function ElectronicsScreen({navigation}) {
     return (
      <View style={[{flex : 1}, BaseColors.BackgroundColor]}>
        <HeaderA name="Electronics" page="Home" />
        <ScrollView
            horizontal
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[{flexGrow : 1}]}
        >
            <View style={[HelperStyle.flex1, {height: 120}, HelperStyle.flexRow, HelperStyle.marginHorizontal10, HelperStyle.marginVertical20]}>
                {CategoryData.map(category => (
                    <View key={category.sr} style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal10, HelperStyle.flexAlignCenter]}>
                        <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexCenter, {height: 60, width: 60, borderRadius: 30, backgroundColor: 'rgba(223,224,229, 0.5)'}]}>
                            <Icon name={category.icon} type={category.type} style={{fontSize: 30, color: BaseColors.heading, alignSelf: 'center' }} />
                        </TouchableOpacity>
                        <Text style={{fontFamily: BaseFont.fontBold, fontSize: 11, color: '#1B2749'}}>{category.name}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{flexGrow : 1}, HelperStyle.flexColumn, HelperStyle.marginHorizontal20]}
        >
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginBottom: 40}]}>
                {ElectronicsData.map(item => (
                    <CardComponent key={item.sr} src={item.src} name={item.name} price={item.price} reviews={item.reviews} mrp ={item.mrp} rating={item.rating} />
                ))}
            </View>
        </ScrollView>
      </View>
  );
}
