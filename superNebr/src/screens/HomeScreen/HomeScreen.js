/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, BackHandler, Alert} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import {Icon, Fab, Container, Content, Footer} from 'native-base';
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

const HomeScreen = ({navigation}) => {
    // React.useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert("Hold on!", "Are you sure you want to exit?", [
    //         {
    //           text: "Cancel",
    //           onPress: () => null,
    //           style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //       ]);
    //       return true;
    //     };

    //     const backHandler = BackHandler.addEventListener(
    //       "hardwareBackPress",
    //       backAction
    //     );

    //     return () => backHandler.remove();
    //   }, []);

        return (
            <Container style={[{flex: 1}, HelperStyle.flexColumn, BaseColors.BackgroundColor]}>
                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10 ]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('LeftSidebar')} >
                        <Icon name="menu" type="Entypo" style={{fontSize: 28, color: '#243177'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginRight: -35}]} onPress={() => navigation.navigate('CommunityPage')}>
                        <Text style={{fontFamily: BaseFont.fontSemi, color : '#243177', fontSize: 16, marginRight: 10}}>Ivy Nagar</Text>
                        <Icon name="chevron-down" type="FontAwesome" style={{fontSize: 18, color: '#243177'}} />
                    </TouchableOpacity>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Search')}>
                            <Icon name="search" type="Feather" style={{fontSize: 20, color: '#243177', marginRight: 10}} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow]} onPress={() => navigation.navigate('Notifications')}>
                            <Icon name="bell" type="FontAwesome" style={{fontSize: 20, color: '#243177'}} />
                            <TouchableOpacity style={[HelperStyle.flexAlignCenter, HelperStyle.flexCenter, {backgroundColor: '#FF962C', height: 12, width: 12, borderRadius: 7.5, top: -3, left: -10 }]} activeOpacity={1} disabled>
                                <Text style={{fontFamily: BaseFont.fontBold, color : 'white', fontSize: 7}}>2</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
            <Content>
                <ScrollView
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={[HelperStyle.flex1, {marginBottom: 70}]}>
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
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.paddingTop10]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Leaderboard</Text>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Leaderboard')}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity>
                            </View>
                            <HomeLeaderboard />
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Deal of the Day</Text>
                                <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity>
                            </View>
                            <HomeDeals />
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Electronics</Text>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Electronics')}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginVertical: 10}]}>
                                {HomeElectronicsData.map(item => (
                                    <HomeCard key={item.sr} src={item.src} name={item.name} price={item.price} reviews={item.reviews} mrp ={item.mrp} rating={item.rating} />
                                ))}
                            </View>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Best Seller</Text>
                                <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginVertical: 10}]}>
                                {BestSellerData.map(item => (
                                    <HomeCard key={item.sr} src={item.src} name={item.name} price={item.price} reviews={item.reviews} mrp ={item.mrp} rating={item.rating} />
                                ))}
                            </View>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Fashion Sales</Text>
                                <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginVertical: 10}]}>
                                {FashionSaleData.map(item => (
                                    <HomeCard key={item.sr} src={item.src} name={item.name} price={item.price} reviews={item.reviews} mrp ={item.mrp} rating={item.rating} />
                                ))}
                            </View>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Feature Seller</Text>
                                <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, styles.shadow, HelperStyle.marginVertical10, HelperStyle.paddingVertical10, {backgroundColor: '#FFF3F5', borderRadius: 8, paddingHorizontal: 20}]}>
                                <ScrollView
                                        horizontal
                                        scrollEventThrottle={16}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{ flexGrow: 1 }}
                                    >
                                        {FeatureLogo.map(logo => (
                                            <View key={logo.sr} style={{ marginHorizontal: 20}}>
                                                <Image style={{height: 60, width: 90}} source={{uri : logo.src}} />
                                            </View>
                                        ))}
                                </ScrollView>
                            </View>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                                <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Home Service</Text>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeService')}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity>
                            </View>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {flexWrap: 'wrap', marginVertical: 10}]}>
                                {HomeServiceData.map(item => (
                                    <HomeServiceCard key={item.sr} src={item.src} name={item.name} timings={item.timings} contact={item.contact} count={item.count} />
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Content>
            <Fab
                active={false}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#243177', position: 'absolute', bottom: 120 }}
                onPress={() => navigation.navigate('ChatView')}
                position="bottomRight"
                // onPress={() => this.setState({ active: !this.state.active })}
                >
                <Icon name="message-text" type="MaterialCommunityIcons" />
                {/* <Button style={{ backgroundColor: '#34A34F' }}>
                <Icon name="logo-whatsapp" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                <Icon name="mail" />
                </Button> */}
            </Fab>
            <BottomNavigation activeScreen="Home" navigation={navigation} />
        </Container>
    );
};

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
