/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import WishlistData from '../../assets/Data/WishlistData';
import WishlistCard from '../../components/WishlistCard/WishlistCard';

const WishlistScreen = ({ navigation }) => {

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="Wishlist" page="Home" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20, HelperStyle.marginBottom80]}>
                    {WishlistData.map(item => (
                        <WishlistCard key={item.sr} img={item.src} name={item.name} color={item.color} price={item.price} discountedprice = {item.discountedprice}  />
                    ))}
                </View>
            </ScrollView>
            <BottomNavigation activeScreen="Wishlist" navigation={navigation} />
        </View>
    );
};

export default WishlistScreen;

