/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import HelperStyle from '../../../styles/HelperStyle';
import BaseFont from '../../../constants/BaseFont';
import LeaderboardData from '../../../assets/Data/HomeData/LeaderboardData';
import BaseColors from '../../../constants/BaseColors';

const HomeLeaderboard = ({navigation}) => {
    return (
        <View style={[HelperStyle.flex1, HelperStyle.marginTop10, styles.shadow, {backgroundColor: 'white', padding: 10, borderRadius: 8, height: 250 }]}>
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                nestedScrollEnabled = {true}
            >
                <View style={{flex : 1, marginBottom: 40}}>
                    {LeaderboardData.map(entry => (
                        <View key={entry.sr} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.paddingLeft20, HelperStyle.paddingBottom10, {marginVertical: 5, borderBottomColor: '#F1F1F1', borderBottomWidth: 1}]} >
                            <Image source ={{uri : entry.src}} style={{height: 40, width: 40, borderRadius: 20, marginRight: 20}} />
                            <View style={[HelperStyle.flexColumn]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 9}}>
                                    {entry.name} Bought <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#2181B8', fontSize: 9}}>{entry.item}</Text>
                                </Text>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: BaseColors.heading, fontSize: 8}}>
                                    {entry.desc}
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


