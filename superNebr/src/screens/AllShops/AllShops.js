/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon, Container, Content, Footer} from 'native-base';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import SellerCard from '../../components/SellerCard/SellerCard';
import ShopData from '../../assets/Data/ShopData';

const AllShops = ({ navigation }) => {
    const [item, setitem] = React.useState('');
    return (
        <Container style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <Content>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical20, HelperStyle.marginHorizontal20]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                        <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexAlignCenter, HelperStyle.flexCenter]} onPress={() => navigation.navigate('LeftSidebar')}>
                            <Icon name="menu" type="Entypo" style={{fontSize: 35, color: '#243177'}}/>
                        </TouchableOpacity>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal10, {padding:10, borderRadius: 8, backgroundColor: 'rgba(223,224,229, 0.5)', width: '70%'}]}>
                            <Icon name="search" type="FontAwesome" style={{fontSize: 20, color: 'gray'}} />
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={[styles.textInput]}
                                value={item}
                                onChangeText={(text) => setitem(text)}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={[{height: 40, width: 40, borderRadius: 20, backgroundColor: '#DFE0E580'}, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]} onPress={() => navigation.navigate('Filters')}>
                            <Icon name="sliders" type="Feather" style={{fontSize: 20, color: BaseColors.heading, transform: [{ rotate: '90deg' }]}} />
                        </TouchableOpacity>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, HelperStyle.marginHorizontal20, HelperStyle.marginTop10 ]}>
                        <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]} onPress={() => navigation.navigate('CommunityPage')}>
                            <Text style={{fontFamily: BaseFont.fontSemi, color : '#243177', fontSize: 16, marginRight: 10}}>Ivy Nagar</Text>
                            <Icon name="chevron-down" type="FontAwesome" style={{fontSize: 18, color: '#243177'}} />
                        </TouchableOpacity>
                    </View>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                            <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>For Home</Text>
                            {/* <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity> */}
                        </View>
                        <ScrollView
                            horizontal
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            <View style={[HelperStyle.marginVertical10, HelperStyle.flex1, HelperStyle.flexRow, {marginHorizontal: -10}]}>
                                {ShopData.map( shop => (
                                    shop.home.map(event => (
                                        <SellerCard key={event.sr} bg={event.bg} title={event.name} />
                                    ))
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                            <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>For Jewellery & Fashion</Text>
                            {/* <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity> */}
                        </View>
                        <ScrollView
                            horizontal
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            <View style={[HelperStyle.marginVertical10, HelperStyle.flex1, HelperStyle.flexRow, {marginHorizontal: -10}]}>
                                {ShopData.map( shop => (
                                    shop.jewellery.map(event => (
                                        <SellerCard key={event.sr} bg={event.bg} title={event.name} />
                                    ))
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                            <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>For Electronics</Text>
                            {/* <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity> */}
                        </View>
                        <ScrollView
                            horizontal
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            <View style={[HelperStyle.marginVertical10, HelperStyle.flex1, HelperStyle.flexBetween, HelperStyle.flexRow, {marginHorizontal: -10}]}>
                                {ShopData.map( shop => (
                                    shop.electronics.map(event => (
                                        <SellerCard key={event.sr} bg={event.bg} title={event.name} />
                                    ))
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                            <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>For Home</Text>
                            {/* <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity> */}
                        </View>
                        <ScrollView
                            horizontal
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            <View style={[HelperStyle.marginVertical10, HelperStyle.flex1, HelperStyle.flexBetween, HelperStyle.flexRow, {marginHorizontal: -10}]}>
                                {ShopData.map( shop => (
                                    shop.home.map(event => (
                                        <SellerCard key={event.sr} bg={event.bg} title={event.name} />
                                    ))
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Content>
            <BottomNavigation activeScreen="Shops" navigation={navigation} />
        </Container>
    );
};

export default AllShops;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontBold,
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 10,
        width: '65%',
        paddingVertical: 0,
    },
});
