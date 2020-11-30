/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderC from '../../components/Header/HeaderC';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Chat from '../../assets/Data/Chat';

const ChatView = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            {Chat.map(chat => (
                <View key={chat.sr} style={[HelperStyle.flexColumn, {height: '95%'}]}>
                    <HeaderC name="Community X Sellers" page="Chat" pic={chat.src} />
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, {height: '75%'}]}>
                        <ScrollView
                            scrollEventThrottle={16}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={[{flexGrow : 1}]}
                        >
                            <View style={[HelperStyle.flexColumn]}>
                                <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 13, color : '#7F8592', textAlign: 'center'}}>
                                    {chat.date}
                                </Text>
                                <View style={[{width: '70%', backgroundColor: '#DFE0E5', borderRadius: 20, marginRight: 'auto'}, HelperStyle.paddingHorizontal20, HelperStyle.marginVertical10, HelperStyle.paddingVertical10]}>
                                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 17, color : BaseColors.heading, textAlign: 'left', marginBottom: 5}}>Arjun Nair</Text>
                                    <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 17, color : '#7F8592', textAlign: 'left'}}>
                                        Hey there.
                                    </Text>
                                    <Text style={{fontFamily: BaseFont.fontRegular, color: '#7F8592', fontSize: 13, marginLeft: 'auto'}}>12:20</Text>
                                </View>
                                <View style={[{width: '70%', backgroundColor: '#DFE0E5', borderRadius: 20, marginRight: 'auto'}, HelperStyle.paddingHorizontal20, HelperStyle.marginVertical10, HelperStyle.paddingVertical10]}>
                                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 17, color : BaseColors.heading, textAlign: 'left', marginBottom: 5}}>Adam Nicole</Text>
                                    <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 17, color : '#7F8592', textAlign: 'left'}}>
                                        Hi.
                                    </Text>
                                    <Text style={{fontFamily: BaseFont.fontRegular, color: '#7F8592', fontSize: 13, marginLeft: 'auto'}}>12:20</Text>
                                </View>
                                <View style={[{width: '70%', backgroundColor: '#DFE0E5', borderRadius: 20, marginRight: 'auto'}, HelperStyle.paddingHorizontal20, HelperStyle.marginVertical10, HelperStyle.paddingVertical10]}>
                                <Text style={{fontFamily: BaseFont.fontBold, fontSize: 17, color : BaseColors.heading, textAlign: 'left', marginBottom: 5}}>YashRaj</Text>
                                    <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 17, color : '#7F8592', textAlign: 'left'}}>
                                        How is everyone?
                                    </Text>
                                    <Text style={{fontFamily: BaseFont.fontRegular, color: '#7F8592', fontSize: 13, marginLeft: 'auto'}}>Just now.</Text>
                                </View>
                                <View style={[{width: '70%', backgroundColor: '#DFE0E5', borderRadius: 20, marginLeft: 'auto'}, HelperStyle.paddingHorizontal20, HelperStyle.marginVertical10, HelperStyle.paddingVertical10]}>
                                    <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 17, color : '#7F8592', textAlign: 'left'}}>
                                        All good, What about you?.
                                    </Text>
                                    <Text style={{fontFamily: BaseFont.fontRegular, color: '#7F8592', fontSize: 13, marginLeft: 'auto'}}>Just now.</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <KeyboardAvoidingView
                            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        >
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal20]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {backgroundColor: '#DFE0E5', borderRadius: 8}]}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={[styles.textInput]}
                                    placeholder="Type a message"
                                    placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                    placeholderTextColor = {BaseColors.heading}
                                    multiline={true}
                                />
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Icon name="camera" type="Entypo" style={{fontSize: 18, color: '#C8C8C8', marginRight: 10}} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Icon name="attachment" type="Entypo" style={{fontSize: 18, color: '#C8C8C8'}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={[{height: 40, width: 40, borderRadius: 20, backgroundColor: '#FF962C'}, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                                <Icon name="microphone" type="FontAwesome" style={{fontSize: 20, color: 'white'}} />
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            ))}
        </View>
    );
};

export default ChatView;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 13,
        marginVertical: 0,
        paddingVertical: 0,
        width: '65%',
    },
});
