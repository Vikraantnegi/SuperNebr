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
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';
import HomeCard from '../../components/HomeComponents/HomeCard/HomeCard';
import HomeElectronicsData from '../../assets/Data/HomeData/HomeElectronicsData';

class ProductDetailScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            SelectedColor : 0,
            SelectedSize : 0,
        };
    }
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
                    <View style={[HelperStyle.flex1, HelperStyle.marginHorizontal20, HelperStyle.marginBottom40]}>
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
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                                    {product.shades.map(color => (
                                        this.state.SelectedColor === color.sr ? (
                                            <TouchableOpacity key={color.sr} activeOpacity={1} style={[styles.shadeOuter, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                                                <TouchableOpacity activeOpacity={1} style={{height: 30, width: 30, borderRadius: 15, backgroundColor: color.color}} />
                                            </TouchableOpacity>
                                        )
                                        :   (
                                            <TouchableOpacity key={color.sr} activeOpacity={1} style={{height: 30, width: 30, borderRadius: 15, backgroundColor: color.color, marginRight: 5}} onPress={() => this.setState({
                                                SelectedColor : color.sr,
                                            })} />
                                        )
                                    ))}
                                </View>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {marginVertical: 5}]}>
                                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30, marginVertical: 5, width: '45%'}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate()}>
                                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                                            Add to Cart
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30, marginVertical: 5, width: '45%'}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate()}>
                                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                                            Buy
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                                    {product.sizes.map(size => (
                                        <TouchableOpacity key={size.sr} activeOpacity={1} style={[HelperStyle.flexAlignCenter, HelperStyle.flexCenter, {height: 36, width: 36, backgroundColor : this.state.SelectedSize === size.sr ? BaseColors.heading : null, borderColor: BaseColors.heading, borderWidth: 1, marginRight: 10}]} onPress={() => this.setState({
                                                SelectedSize : size.sr,
                                            })} >
                                            <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 15, color : this.state.SelectedSize === size.sr ? 'white' : BaseColors.heading}}>{size.color}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 10}]} >
                                    <Image source ={{uri : product.src}} style={{height: 30, width: 30, borderRadius: 15, marginRight: 5}} />
                                    <Image source ={{uri : product.src}} style={{height: 30, width: 30, borderRadius: 15, marginRight: 5}} />
                                    <Image source ={{uri : product.src}} style={{height: 30, width: 30, borderRadius: 15, marginRight: 5}} />
                                    <Text style={{fontSize: 9, fontFamily: BaseFont.fontRegular, color: BaseColors.heading}}>420 people Own this 10 People in Your Community</Text>
                                </View>
                                <View style={[HelperStyle.flexColumn, {marginVertical: 5}]} >
                                    <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading, marginBottom: 5}}>Description</Text>
                                    <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{product.desc}</Text>
                                </View>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, HelperStyle.paddingBottom10, {borderBottomWidth : 1, borderBottomColor: '#DFE0E5'}]} >
                                    <Icon name="info-with-circle" type="Entypo" style={{color: '#7F8592', fontSize: 20}} />
                                    <View style={[HelperStyle.flexColumn, {marginHorizontal: 20}]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>Product details</Text>
                                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>Material/ Dimensions/ Colors</Text>
                                    </View>
                                    <Icon name="chevron-right" type="Entypo" style={{color: '#7F8592', fontSize: 20, marginLeft : 'auto'}} />
                                </View>
                                <View style={[HelperStyle.flexColumn, {marginVertical: 10}]} >
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {marginVertical: 5}]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>Material</Text>
                                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{product.material}</Text>
                                    </View>
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {marginVertical: 5}]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>Frame Material</Text>
                                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{product.frame}</Text>
                                    </View>
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {marginVertical: 5}]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>Country of Origin</Text>
                                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{product.country}</Text>
                                    </View>
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {marginVertical: 5}]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>Weight Capacity</Text>
                                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{product.weight}</Text>
                                    </View>
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {marginVertical: 5}]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>Color</Text>
                                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{product.color}</Text>
                                    </View>
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, {marginVertical: 5}]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>Product dimension</Text>
                                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{product.dimensions}</Text>
                                    </View>
                                </View>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, HelperStyle.paddingBottom10, {borderBottomWidth : 1, borderBottomColor: '#DFE0E5'}]} >
                                    <Icon name="star" type="AntDesign" style={{color: '#7F8592', fontSize: 20}} />
                                    <View style={[HelperStyle.flexColumn, {marginHorizontal: 20}]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>Customer Reviews</Text>
                                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{product.reviews} reviews</Text>
                                    </View>
                                </View>
                                {product.review1.map(rev => (
                                    <ReviewComponent key={rev.sr} src={rev.src} name={rev.name} rev={rev.rev} time={rev.time} star={rev.star} images={rev.images} />
                                ))}
                                <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, HelperStyle.paddingBottom10, {borderBottomWidth : 1, borderBottomColor: '#DFE0E5'}]} onPress={() => navigation.navigate('Reviews')} >
                                    <View style={[HelperStyle.flexColumn]} >
                                        <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>See all {product.reviews} reviews</Text>
                                    </View>
                                    <Icon name="chevron-right" type="Entypo" style={{color: '#7F8592', fontSize: 20, marginLeft : 'auto'}} />
                                </TouchableOpacity>
                                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10]}>
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
    shadeOuter : {borderWidth: 1, borderColor: BaseColors.heading, height: 36, width: 36, borderRadius: 18, marginRight: 5},
});
