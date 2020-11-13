/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BaseColors from '../../constants/BaseColors';

const ReviewComponent = ({name, star, src, rev, time, images }) => {
    const width = Dimensions.get('window').width - 40;
    return (
        <View style={[{width: width}, HelperStyle.flexColumn, HelperStyle.marginVertical10 ]}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginBottom15]}>
                <Image source={{uri : src}} style={{height:36, width: 36, borderRadius: 18}} />
                <View style={[HelperStyle.flexColumn, {marginHorizontal: 20}]} >
                    <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>{name}</Text>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, {width: '75%'}]}>
                        <TouchableOpacity style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {backgroundColor: '#FF962C', borderRadius: 3, paddingHorizontal: 5 }]}>
                            <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: 'white', marginRight: 3}}>{star}</Text>
                            <Icon name="star" type="AntDesign" style={{color: 'white', fontSize: 12}} />
                        </TouchableOpacity>
                        <Text style={{fontSize: 13, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{time}</Text>
                    </View>
                </View>
            </View>
            <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}} numberOfLines={3}>{rev}</Text>
            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.marginVertical10]}>
                {images.map(img =>(
                    img.src.length > 0 ?
                    (<Image key={img.sr} source={{uri : img.src}} style={{height: 80, width: 80}} />)
                    : null
                ))}
                {/* <ImageBackground source={{uri : 'https://www.audi.com/content/dam/ci/Fundamentals/Basics/Colours/04_Grautoene_Elemente/Audi_Brandplattform_Colours_Element-15.png?imwidth=1200'}} style={[{height: 80, width: 80}, HelperStyle.flexCenter]}>
                    <Text style={{fontSize: 13, fontFamily: BaseFont.fontRegular, color: '#7F8592', textAlign: 'center'}}>+25{'\n'}Images</Text>
                </ImageBackground> */}
            </View>
        </View>
    );
};

export default ReviewComponent;

