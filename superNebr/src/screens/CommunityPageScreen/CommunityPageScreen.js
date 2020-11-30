/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../../components/Header/Header';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import CommunityListData from '../../assets/Data/CommunityListData';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const CommunityPageScreen = ({ navigation }) => {
    const [comm, setcomm] = React.useState('');
  return (
    <View style={[{height: height, width: width}, BaseColors.BackgroundColor]}>
        <Header page="SignUp" name="Select Community" />
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View>
                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10, HelperStyle.marginBottom20, {padding:10, borderRadius: 8, backgroundColor: 'rgba(223,224,229, 0.5)'}]}>
                    <Icon name="search" type="FontAwesome" style={{fontSize: 20, color: 'gray'}} />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={[styles.textInput]}
                        value={comm}
                        onChangeText={(text) => setcomm(text)}
                    />
                    <Icon name="closecircle" type="AntDesign" style={{fontSize: 20, color: '#1B2749'}} />
                </View>
                <View style={{height: '75%'}}>
                    <ScrollView
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        {CommunityListData.map(community => (
                            <TouchableOpacity activeOpacity={0.5} key={community.sr} style={[HelperStyle.marginHorizontal20, HelperStyle.paddingLeft20, {marginVertical: 5, borderBottomWidth: 1, borderBottomColor: '#DFE0E5'}]}>
                                <Text style={{fontFamily: BaseFont.fontBold, fontSize : 17, color : '#243177', paddingVertical: 15}}>
                                    {community.builder} - {community.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexAlignCenter]} onPress={() => navigation.navigate('AddCommunityPage')}>
                <Text style={{fontFamily: BaseFont.fontBold, fontSize : 13, color : '#243177', textDecorationLine: 'underline'}}>
                    Request to Add new Community
                </Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

export default CommunityPageScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontBold,
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 10,
        width: '80%',
        paddingVertical: 0,
    },
});

