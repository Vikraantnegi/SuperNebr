/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import {Icon} from 'native-base';
import HomeCarousel from '../../components/HomeComponents/HomeCarousel/HomeCarousel';
import HomeEventsData from '../../assets/Data/HomeData/HomeEventsData';
import HomeEvents from '../../components/HomeComponents/HomeEvents/HomeEvents';
import HomeLeaderboard from '../../components/HomeComponents/HomeLeaderboard/HomeLeaderboard';
import HomeDeals from '../../components/HomeComponents/HomeDeals/HomeDeals';
import HomeCard from '../../components/HomeComponents/HomeCard/HomeCard';
import HomeServiceCard from '../../components/HomeComponents/HomeServiceCard/HomeServiceCard';
import HomeElectronicsData from '../../assets/Data/HomeData/HomeElectronicsData';
import BestSellerData from '../../assets/Data/HomeData/BestSellerData';
import FashionSaleData from '../../assets/Data/HomeData/FashionSaleData';
import HomeServiceData from '../../assets/Data/HomeData/HomeServiceData';
import FeatureLogo from '../../assets/Data/HomeData/FeatureLogo';

class HomeScreen extends React.Component {
    render(){
        const {navigation} = this.props;
        return (
            <View style={[{flex: 1}, HelperStyle.flexColumn, BaseColors.BackgroundColor]}>
                <ScrollView
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={[HelperStyle.flex1, {marginBottom: 70}]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20 ]}>
                            <Icon name="menu" type="Entypo" style={{fontSize: 30, color: '#243177'}} onPress={() => navigation.navigate('LeftSidebar')} />
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginRight: -35}]}>
                                <Text style={{fontFamily: BaseFont.fontSemi, color : '#243177', fontSize: 16, marginRight: 10}}>Ivy Nagar</Text>
                                <Icon name="chevron-down" type="FontAwesome" style={{fontSize: 18, color: '#243177'}} />
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                <Icon name="search" type="Feather" style={{fontSize: 24, color: '#243177', marginRight: 10}} />
                                <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow]} onPress={() => navigation.navigate('Notifications')}>
                                    <Icon name="bell" type="FontAwesome" style={{fontSize: 24, color: '#243177'}} />
                                    <TouchableOpacity style={[HelperStyle.flexAlignCenter, HelperStyle.flexCenter, {backgroundColor: '#FF962C', height: 15, width: 15, borderRadius: 7.5, top: -3, left: -15 }]} activeOpacity={1} disabled>
                                        <Text style={{fontFamily: BaseFont.fontBold, color : 'white', fontSize: 8}}>2</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <HomeCarousel />
                        <View style={[HelperStyle.flexRow, HelperStyle.marginLeft10]}>
                            <ScrollView
                                    horizontal
                                    scrollEventThrottle={16}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                >
                                {HomeEventsData.map(event => (
                                    <HomeEvents key={event.sr} bg={event.bg} title={event.title} />
                                ))}
                            </ScrollView>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10, HelperStyle.marginTop20]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Leaderboard</Text>
                                <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}} onPress={() => navigation.navigate('Leaderboard')}>See All</Text>
                            </View>
                            <HomeLeaderboard />
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Deal of the Day</Text>
                                <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text>
                            </View>
                            <HomeDeals />
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Electronics</Text>
                                <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}} onPress={() => navigation.navigate('Electronics')}>See All</Text>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginVertical: 10}]}>
                                {HomeElectronicsData.map(item => (
                                    <HomeCard key={item.sr} src={item.src} name={item.name} price={item.price} like={item.like} />
                                ))}
                            </View>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Best Seller</Text>
                                <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}} onPress={() => navigation.navigate('AddAddress')}>See All</Text>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginVertical: 10}]}>
                                {BestSellerData.map(item => (
                                    <HomeCard key={item.sr} src={item.src} name={item.name} price={item.price} like={item.like} />
                                ))}
                            </View>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Fashion Sales</Text>
                                <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginVertical: 10}]}>
                                {FashionSaleData.map(item => (
                                    <HomeCard key={item.sr} src={item.src} name={item.name} price={item.price} like={item.like} />
                                ))}
                            </View>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Feature Seller</Text>
                                <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, styles.shadow, HelperStyle.marginVertical10, {height: 65, backgroundColor: '#FEEEF0', borderRadius: 8, paddingHorizontal: 20}]}>
                                {FeatureLogo.map(logo => (
                                    <View key={logo.sr} style={{height : 50, width: 40}}>
                                        <Image style={{height: 45, width: 50}} source={{uri : logo.src}} />
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Home Service</Text>
                                <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginVertical: 10}]}>
                                {HomeServiceData.map(item => (
                                    <HomeServiceCard key={item.sr} src={item.src} name={item.name} timings={item.timings} contact={item.contact} count={item.count} like={item.like} />
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <BottomNavigation activeScreen="Home" navigation={navigation} />
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    shadow : {
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 7,
        shadowOpacity: 0,
    },
});
