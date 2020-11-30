/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BaseFont from '../../constants/BaseFont';
import ShopCarousel from '../../components/ShopCarousel/ShopCarousel';
import CategoryData from '../../assets/Data/CategoryData';
import HomeEventsData from '../../assets/Data/HomeData/HomeEventsData';
import HomeEvents from '../../components/HomeComponents/HomeEvents/HomeEvents';
import ShopData from '../../assets/Data/ShopData';
import HomeDeals from '../../components/HomeComponents/HomeDeals/HomeDeals';
import HomeCard from '../../components/HomeComponents/HomeCard/HomeCard';
import BestSellerData from '../../assets/Data/HomeData/BestSellerData';

export default function ShopProfileScreen({navigation}) {
    const [ textShown, setText ] = React.useState(false);
    const SeeMore = () => {
        setText(!textShown);
    };
    return (
      <View style={[{flex : 1}, BaseColors.BackgroundColor]}>
        <HeaderA name="Shop Name" page="Home" />
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{flexGrow : 1, marginTop: 10}]}
        >
            <View style={[HelperStyle.dividerBottom, HelperStyle.marginBottom15]}>
                <ScrollView
                    horizontal
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[{flexGrow : 1}]}
                >
                    <View style={[HelperStyle.flex1, HelperStyle.flexRow, HelperStyle.marginHorizontal10, HelperStyle.marginVertical10]}>
                        {CategoryData.map(category => (
                            <View key={category.sr} style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal10, HelperStyle.flexAlignCenter]}>
                                <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexCenter, {height: 60, width: 60, borderRadius: 30, backgroundColor: 'rgba(223,224,229, 0.5)'}]} onPress={() => navigation.navigate(category.page)}>
                                    <Icon name={category.icon} type={category.type} style={{fontSize: 30, color: BaseColors.heading, alignSelf: 'center' }} />
                                </TouchableOpacity>
                                <Text style={{fontFamily: BaseFont.fontBold, fontSize: 11, color: '#1B2749'}}>{category.name}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <ShopCarousel />
            <View style={[HelperStyle.flexRow, HelperStyle.marginLeft10, HelperStyle.marginBottom10]}>
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
            {ShopData.map(shop => (
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10, HelperStyle.marginHorizontal20]} >
                    <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading, marginBottom: 5}}>Description</Text>
                    <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}} numberOfLines={ textShown ? undefined : 2} >{textShown ? shop.longdesc : shop.desc}</Text>
                    <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#FF962C'}} onPress={() => SeeMore()}>{textShown ? 'See Less' : 'See More'}</Text>
                </View>
            ))}
            <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Deal of the Day</Text>
                    <TouchableOpacity activeOpacity={0.8}><Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15}}>See All</Text></TouchableOpacity>
                </View>
                <HomeDeals />
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
        </ScrollView>
      </View>
  );
}
