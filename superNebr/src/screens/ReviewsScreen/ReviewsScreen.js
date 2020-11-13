/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderB from '../../components/Header/HeaderB';
import ProductData from '../../assets/Data/ProductData';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';
import * as Progress from 'react-native-progress';

const width = Dimensions.get('window').width;

class ReviewsScreen extends React.Component {
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
                <HeaderB name="Reviews" page="ProductDetail" />
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical20, styles.shadow, BaseColors.BackgroundColor, {borderRadius: 8}]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginBottom: 5}]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter,{width: '30%'}]}>
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                        </View>
                        <Progress.Bar progress={ProductData[0].star5 / ProductData[0].reviews} width={0.35 * width} />
                        <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 13, textAlign: 'right', width: '10%' }}>
                            {ProductData[0].star5}
                        </Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginBottom: 5}]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter,{width: '30%'}]}>
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                        </View>
                        <Progress.Bar progress={ProductData[0].star4/ ProductData[0].reviews} width={0.35 * width} />
                        <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 13, textAlign: 'right', width: '10%' }}>
                            {ProductData[0].star4}
                        </Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginBottom: 5}]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {width: '30%'}]}>
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                        </View>
                        <Progress.Bar progress={ProductData[0].star3 / ProductData[0].reviews} width={0.35 * width} />
                        <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 13, textAlign: 'right', width: '10%' }}>
                            {ProductData[0].star3}
                        </Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginBottom: 5}]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {width: '30%'}]}>
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                        </View>
                        <Progress.Bar progress={ProductData[0].star2 / ProductData[0].reviews} width={0.35 * width} />
                        <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 13, textAlign: 'right', width: '10%' }}>
                            {ProductData[0].star2}
                        </Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {marginBottom: 5}]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {width: '30%'}]}>
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#FF962C'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                            <Icon name="star" type="AntDesign" style={{fontSize: 15, color : '#DFE0E5'}} />
                        </View>
                        <Progress.Bar progress={ProductData[0].star1 / ProductData[0].reviews} width={0.35 * width} />
                        <Text style={{fontFamily: BaseFont.fontBold, color: BaseColors.heading, fontSize: 13, textAlign: 'right', width: '10%' }}>
                            {ProductData[0].star1}
                        </Text>
                    </View>
                </View>
                <ScrollView
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={[HelperStyle.flex1, HelperStyle.marginHorizontal20, HelperStyle.marginBottom40]}>
                        {ProductData[0].review1.map(rev => (
                                <ReviewComponent key={rev.sr} src={rev.src} name={rev.name} rev={rev.rev} time={rev.time} star={rev.star} images={rev.images} />
                            ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ReviewsScreen;

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
