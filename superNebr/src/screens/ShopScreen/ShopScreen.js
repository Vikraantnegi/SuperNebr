/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BaseFont from '../../constants/BaseFont';
import ShopData from '../../assets/Data/ShopData';
import ShopCardData from '../../assets/Data/ShopCardData';
import ShopCard from '../../components/ShopCard/ShopCard';

export default function ShopScreen({navigation}) {
     return (
      <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
        <HeaderA name="Shop Name" page="Home" />
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{flexGrow : 1, marginTop: 10}]}
        >
            <View style={[HelperStyle.dividerBottom]}>
                <ScrollView
                    horizontal
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[{flexGrow : 1}]}
                >
                    <View style={[HelperStyle.flex1, HelperStyle.flexRow, HelperStyle.marginHorizontal10, HelperStyle.marginVertical10]}>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal10, HelperStyle.flexAlignCenter]}>
                            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexCenter, {height: 60, width: 60, borderRadius: 30, backgroundColor: 'rgba(223,224,229, 0.5)'}]} onPress={() => navigation.navigate('ShopProfile')}>
                                <Icon name="user-alt" type="FontAwesome5" style={{fontSize: 30, color: BaseColors.heading, alignSelf: 'center' }} />
                            </TouchableOpacity>
                            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 11, color: '#1B2749'}}>About</Text>
                        </View>
                        {ShopData.map(category => (
                            category.category.map(cat =>(
                                <View key={cat.sr} style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal10, HelperStyle.flexAlignCenter]}>
                                    <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexCenter, {height: 60, width: 60, borderRadius: 30, backgroundColor: 'rgba(223,224,229, 0.5)'}]}>
                                        <Icon name={cat.icon} type={cat.type} style={{fontSize: 30, color: BaseColors.heading, alignSelf: 'center' }} />
                                    </TouchableOpacity>
                                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 11, color: '#1B2749'}}>{cat.name}</Text>
                                </View>
                            ))
                        ))}
                    </View>
                </ScrollView>
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10, {flexWrap: 'wrap', marginBottom: 40}]}>
                {ShopCardData.map(item => (
                    <ShopCard key={item.sr} seller={item.seller} percent={item.percent} name={item.name} img={item.src} color={item.color} price={item.price} discountedprice={item.discountedprice} />
                ))}
            </View>
        </ScrollView>
      </View>
  );
}
