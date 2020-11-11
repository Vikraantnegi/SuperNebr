/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, Image, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BaseFont from '../../constants/BaseFont';
import LeaderboardData from '../../assets/Data/HomeData/LeaderboardData';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function LeaderboardScreen({navigation}) {
     return (
      <View style={[{height: height, width : width}, BaseColors.BackgroundColor]}>
        <HeaderA name="Leaderboard" page="Home" />
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{flexGrow : 1}, HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20]}
        >
            <View style={{flex : 1, marginBottom: 80}}>
                {LeaderboardData.map(entry => (
                    <View key={entry.sr} style={[HelperStyle.flex1, HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginVertical: 10}]} >
                        <Image source ={{uri : entry.src}} style={{height: 40, width: 40, borderRadius: 20}} />
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal10, {width: '48%'}]}>
                            <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#FF0000', fontSize: 9}}>
                                {entry.name} Bought <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#2181B8', fontSize: 9}}>{entry.item}</Text>
                            </Text>
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 9}}>
                                {entry.desc}
                            </Text>
                        </View>
                        <View style={[HelperStyle.flexColumn, {width: '32%'}]}>
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#FFAC00', fontSize: 9}}>
                                {entry.date}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
      </View>
  );
}

