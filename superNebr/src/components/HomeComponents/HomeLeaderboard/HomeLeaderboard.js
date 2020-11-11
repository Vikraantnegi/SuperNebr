/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import HelperStyle from '../../../styles/HelperStyle';
import BaseFont from '../../../constants/BaseFont';
import LeaderboardData from '../../../assets/Data/HomeData/LeaderboardData';

const HomeLeaderboard = ({navigation}) => {
    return (
        <View style={[HelperStyle.flex1, HelperStyle.marginVertical10, styles.shadow, {backgroundColor: '#FCEAEC', padding: 10, borderRadius: 10, height: 200 }]}>
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={{flex : 1, marginBottom: 40}}>
                    {LeaderboardData.map(entry => (
                        <View key={entry.sr} style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginVertical: 5}]} >
                            <Image source ={{uri : entry.src}} style={{height: 40, width: 40, borderRadius: 20, marginRight: 10}} />
                            <View style={[HelperStyle.flexColumn, {width: '50%'}]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#FF0000', fontSize: 9}}>
                                    {entry.name} Bought <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#2181B8', fontSize: 9}}>{entry.item}</Text>
                                </Text>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 8}}>
                                    {entry.desc}
                                </Text>
                            </View>
                            <View style={[HelperStyle.flexColumn, {width: '50%'}]}>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#FFAC00', fontSize: 8}}>
                                    {entry.date}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeLeaderboard;

const styles = StyleSheet.create({
    shadow : {
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 7,
        shadowOpacity: 0,
    },
});


