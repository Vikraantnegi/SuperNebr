/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderB from '../../components/Header/HeaderB';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import UserData from '../../assets/Data/UserData';
import {Icon} from 'native-base';

const MyProfileScreen = ({ navigation }) => {

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderB name="Profile" page="Home" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {UserData.map(user => (
                    <View key={user.sr} style={[HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginVertical20, HelperStyle.marginBottom80]}>
                        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20]}>
                            <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, color: BaseColors.heading, position: 'absolute', right: 10 }} onPress={() => navigation.navigate('EditProfile')}>Edit</Text>
                            <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, {borderBottomColor: '#DFE0E5', borderBottomWidth: 1, width: '60%'} ]}>
                                <Image source={{uri : user.src}} style={{height: 140, width: 140, borderRadius: 70, marginVertical: 20}} />
                                <Text style={{fontFamily: BaseFont.fontBold, fontSize: 17, color: BaseColors.heading, paddingBottom: 5}}>{user.name}</Text>
                            </View>
                            <Text style={{fontFamily: BaseFont.fontSRegular, fontSize: 12, color: BaseColors.heading, paddingVertical: 5}}>{user.contact}</Text>
                            <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, color: BaseColors.heading}}>{user.mail}</Text>
                            <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, color: BaseColors.heading}}>{user.address}</Text>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical40]}>
                            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexColumn, BaseColors.BackgroundColor, styles.shadow, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {marginVertical : 10}]} onPress={() => navigation.navigate('MyOrders')}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, color: BaseColors.heading, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#DFE0E5'}}>My Orders</Text>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 10, color: BaseColors.heading, paddingVertical: 5, textAlign: 'right'}}>See All Orders</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexColumn, BaseColors.BackgroundColor, styles.shadow, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {marginVertical : 10}]} onPress={() => navigation.navigate('MyReviews')}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, color: BaseColors.heading, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#DFE0E5'}}>My Reviews</Text>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 10, color: BaseColors.heading, paddingVertical: 5, textAlign: 'right'}}>See All Reviews</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexColumn, BaseColors.BackgroundColor, styles.shadow, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {marginVertical : 10}]} onPress={() => navigation.navigate('MyPolls')}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, color: BaseColors.heading, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#DFE0E5'}}>My Polls</Text>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 10, color: BaseColors.heading, paddingVertical: 5, textAlign: 'right'}}>See All Polls</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexColumn, BaseColors.BackgroundColor, styles.shadow, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {marginVertical : 10}]} onPress={() => navigation.navigate('MyAddress')}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, color: BaseColors.heading, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#DFE0E5'}}>My Addresses</Text>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 10, color: BaseColors.heading, paddingVertical: 5, textAlign: 'right'}}>See All Addresses</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexColumn, BaseColors.BackgroundColor, styles.shadow, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {marginVertical : 10}]} onPress={() => navigation.navigate('MyBlogs')}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, color: BaseColors.heading, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#DFE0E5'}}>My Blogs</Text>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 10, color: BaseColors.heading, paddingVertical: 5, textAlign: 'right'}}>See All Blogs</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30}, HelperStyle.flexRow, HelperStyle.flexCenter, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginHorizontal20]} onPress={() => navigation.navigate('Login')}>
                            <Icon name="logout" type="MaterialIcons" style={{fontSize: 20, marginRight: 5, color : 'white'}} />
                            <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <BottomNavigation activeScreen="My" navigation={navigation} />
        </View>
    );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
    shadow : {
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0,
    },
});

