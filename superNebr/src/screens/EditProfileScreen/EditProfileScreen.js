/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderB from '../../components/Header/HeaderB';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import UserData from '../../assets/Data/UserData';
import {Icon} from 'native-base';

const EditProfileScreen = ({ navigation }) => {
    const [name, setname] = React.useState(UserData[0].name);
    const [contact, setcontact] = React.useState(UserData[0].contact);
    const [mail, setmail] = React.useState(UserData[0].mail);

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
                            <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, {borderBottomColor: '#DFE0E5', borderBottomWidth: 1, width: '60%'} ]}>
                                <Image source={{uri : user.src}} style={{height: 140, width: 140, borderRadius: 70, marginVertical: 20}} />
                                <Text style={{fontFamily: BaseFont.fontBold, fontSize: 17, color: BaseColors.heading, paddingBottom: 5}}>{user.name}</Text>
                            </View>
                            <Text style={{fontFamily: BaseFont.fontSRegular, fontSize: 12, color: BaseColors.heading, paddingVertical: 5}}>{user.contact}</Text>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical20, HelperStyle.marginHorizontal20]}>
                            <View style={[HelperStyle.flexColumn, {paddingVertical : 5}]}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 10, color: BaseColors.heading}}>Name</Text>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.textInput}
                                    placeholder="Name"
                                    placeholderStyle={{ fontFamily: BaseFont.fontMedium}}
                                    placeholderTextColor = {BaseColors.heading}
                                    value={name}
                                    onChangeText={(text) => setname(text)}
                                />
                            </View>
                            <View style={[HelperStyle.flexColumn, {paddingVertical : 5}]}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 10, color: BaseColors.heading}}>Phone Number</Text>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.textInput}
                                    placeholder="Phone Number"
                                    placeholderStyle={{ fontFamily: BaseFont.fontMedium}}
                                    placeholderTextColor = {BaseColors.heading}
                                    value={contact}
                                    keyboardType = "numeric"
                                    onChangeText={(text) => setcontact(text)}
                                />
                            </View>
                            <View style={[HelperStyle.flexColumn, {paddingVertical : 5}]}>
                                <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {paddingVertical: 5}]} onPress={() => navigation.navigate('CommunityPage')}>
                                    <Text style={[styles.textInput, {fontFamily: BaseFont.fontMedium, width: '91%', paddingVertical: 5}]}>
                                        Community
                                    </Text>
                                    <Icon name="chevron-right" type="FontAwesome" style={[{fontSize: 15, color: '#243177', left: -50}]} onPress={() => navigation.navigate('CommunityPage')} />
                                </TouchableOpacity>
                            </View>
                            <View style={[HelperStyle.flexColumn, {paddingVertical : 5}]}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 10, color: BaseColors.heading}}>Email</Text>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.textInput}
                                    placeholder="Name"
                                    placeholderStyle={{ fontFamily: BaseFont.fontMedium}}
                                    placeholderTextColor = {BaseColors.heading}
                                    value={mail}
                                    onChangeText={(text) => setmail(text)}
                                />
                            </View>
                            <View style={[HelperStyle.flexColumn, HelperStyle.marginBottom5]}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#D4D4D4', color: BaseColors.heading}}>Change Password</Text>
                            </View>
                            <View style={[HelperStyle.flexColumn]}>
                                <Text style={{fontFamily: BaseFont.fontSemi, fontSize: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#D4D4D4', color: BaseColors.heading}}>Deactivate Account</Text>
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30}, HelperStyle.flexRow, HelperStyle.flexCenter, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginHorizontal20]} onPress={() => navigation.navigate()}>
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

export default EditProfileScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 15,
        marginRight: 30,
        padding: 0,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor : 'rgba(0,0,0,0.05)',
    },
});

