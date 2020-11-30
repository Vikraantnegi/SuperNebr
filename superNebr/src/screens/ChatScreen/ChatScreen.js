/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Chats from '../../assets/Data/Chats';
import { color } from 'react-native-reanimated';
const community = 'https://thisisthecat.com/wp-content/uploads/2020/05/crowd-community.jpg';
const img = 'https://www.audi.com/content/dam/ci/Fundamentals/Basics/Colours/04_Grautoene_Elemente/Audi_Brandplattform_Colours_Element-15.png?imwidth=1200';
const image = 'https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

const ChatScreen = ({ navigation }) => {
    const images = Array.from(Array(10).keys()).map(key => (
        <TouchableOpacity key={key} activeOpacity={0.8}><Image source={{uri : img}} style={{height: 60, width: 60, marginRight: 10}} /></TouchableOpacity>
    ));
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <ImageBackground source={{uri : community}} style={[{height: '35%'}]}>
                <View style={[HelperStyle.flex1, styles.header, HelperStyle.paddingVertical20, HelperStyle.paddingHorizontal20, {backgroundColor: 'rgba(0,0,0,0.6)'}]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Chat')}>
                            <Icon name="arrow-left" type="FontAwesome5" style={styles.arrow} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Icon name="user-plus" type="Feather" style={styles.arrow} />
                        </TouchableOpacity>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                        <Text style={{fontFamily: BaseFont.fontBold, color: 'white', fontSize: 24}}>Community X Sellers</Text>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Icon name="edit" type="AntDesign" style={styles.arrow} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flexColumn, HelperStyle.marginTop30, HelperStyle.dividerBottom]}>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20]} >
                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading, marginBottom: 5}}>Description</Text>
                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592', marginBottom: 10}} numberOfLines={2} >We’ve send a code to your phone number. This code will expired 10 minutes after this message. If you dont get a message. Click Resend.</Text>
                    </View>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.dividerBottom]}>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10, HelperStyle.marginHorizontal20]} >
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]} >
                            <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading, marginBottom: 5}}>Media, Links and Docs</Text>
                            <Text style={{fontSize: 13, fontFamily: BaseFont.fontMedium, color: '#7F8592', marginBottom: 5}}> 849 </Text>
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]} >
                            <ScrollView
                                horizontal
                                scrollEventThrottle={16}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={[{flexGrow : 1}]}
                            >
                                {images}
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.dividerBottom, {height: '50%', paddingBottom: 20}]}>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10, HelperStyle.marginHorizontal20]} >
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]} >
                            <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading, marginBottom: 5}}>10 Participants</Text>
                            <Icon name="search" type="FontAwesome" style={{fontSize: 20, color: '#7F8592'}} />
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween, {height: '95%'}]} >
                            <ScrollView
                                scrollEventThrottle={16}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={[{flexGrow : 1}]}
                                nestedScrollEnabled={true}
                            >
                                {Array.from(Array(7).keys()).map(id => (
                                    <View key={id} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10]}>
                                        <Image source={{uri : image}} style={{height: 40, width: 40, borderRadius: 20, marginRight: 10}} />
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Chat')} style={[HelperStyle.flexColumn]}>
                                            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 17, color: BaseColors.heading}}>Aryan Majumdar</Text>
                                            <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 13, color: '#7F8592'}}>Lead Seller in Community X</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                                {Array.from(Array(3).keys()).map(id => (
                                    <View key={id} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10]}>
                                        <Image source={{uri : image}} style={{height: 40, width: 40, borderRadius: 20, marginRight: 10}} />
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Chat')} style={[HelperStyle.flexColumn]}>
                                            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 17, color: BaseColors.heading}}>+91 75678-09890</Text>
                                            <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 13, color: '#7F8592'}}>Lead Seller in Community X</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10, {marginHorizontal: 15}]}>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 10, paddingHorizontal: '5%'}, HelperStyle.flexCenter, HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate('Cart')}>
                        <Icon name="logout" type="MaterialCommunityIcons" style={{fontSize: 15, color: 'white', marginRight: 5}} />
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Exit Group
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 10, paddingHorizontal: '5%'}, HelperStyle.flexCenter, HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate('OrderSummary')}>
                        <Icon name="dislike1" type="AntDesign" style={{fontSize: 15, color: 'white', marginRight: 5}} />
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Report Group
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default ChatScreen;
const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    arrow: {
        fontSize: 20,
        color: 'white',
    },
  });

