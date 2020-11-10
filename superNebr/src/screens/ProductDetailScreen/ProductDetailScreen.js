/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderA from '../../components/Header/HeaderA';
import ProductDetailCarousel from '../../components/ProductDetailCarousel/ProductDetailCarousel';
import ProductData from '../../assets/Data/ProductData';

class ProductDetailScreen extends React.Component {
    render(){
        const {navigation} = this.props;
        return (
            <View style={[{flex: 1}, HelperStyle.flexColumn, BaseColors.BackgroundColor]}>
                <HeaderA name="Product Detail" page="Home" />
                <ScrollView
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <ProductDetailCarousel />
                    <View style={[HelperStyle.flex1, HelperStyle.marginHorizontal20]}>
                        {ProductData.map(product => (
                            <View key={product.sr} style={[HelperStyle.flexColumn]}>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: BaseColors.heading, fontSize: 18 }}>
                                        ₹{product.discountedprice}
                                    </Text>
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 18, marginHorizontal: 5, textDecorationLine: 'line-through' }}>
                                        ₹{product.price}
                                    </Text>
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#22A730', fontSize: 10, marginTop: 5 }}>
                                        {product.discountpercent}% off
                                    </Text>
                                </View>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginTop: 5}]}>
                                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 22 }}>
                                        {product.name}
                                    </Text>
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#F10303', fontSize: 10, marginTop: 10, marginLeft: 5 }}>
                                        (Only 10 left)
                                    </Text>
                                </View>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 10}]}>
                                    <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                                    <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                                    <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                                    <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                                    <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 13, marginLeft: 10 }}>
                                        {product.rating}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ProductDetailScreen;

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
