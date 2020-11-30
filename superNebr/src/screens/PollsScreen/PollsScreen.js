/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import Polls from '../../assets/Data/Polls';
import PollCard from '../../components/PollCard/PollCard';
import { Icon } from 'native-base';
import BaseFont from '../../constants/BaseFont';

const PollsScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <View style={styles.header}>
                <View style={[HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
                        <Icon name="arrow-left" type="FontAwesome5" style={styles.arrow} />
                    </TouchableOpacity>
                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: 'white', marginLeft: 10}}>Polls</Text>
                </View>
                <View style={[HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                    <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow]} onPress={() => navigation.navigate('CreatePoll')}>
                        <Icon name="plus" type="Entypo" style={{fontSize : 20, marginRight: 10, color: 'white'}} />
                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontMedium, color: 'white'}}>Create Poll</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.marginBottom80]}>
                    {Polls.map(poll =>(
                        <PollCard key={poll.sr} name={poll.name} title={poll.title} date={poll.date} choices={poll.choices} pic={poll.pic} />
                    ))}
                </View>
            </ScrollView>
        <BottomNavigation name="" navigation={navigation} />
        </View>
    );
};

export default PollsScreen;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor : BaseColors.heading,
    },
    arrow: {
        fontSize: 15,
        color: 'white',
    },
    icon: {
      fontSize: 15,
      color: 'white',
      marginLeft: 15,
    },
    textInput: {
        fontFamily: BaseFont.fontBold,
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 10,
        width: '85%',
        paddingVertical: 0,
    },
  });
