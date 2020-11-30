/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BaseColors from '../../constants/BaseColors';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ReviewComponent = ({name, star, src, rev, time, images }) => {
    const pics = [
        {
            url : 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg',
        },
        {
            url : 'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
        },
        {
            url : 'https://images4.alphacoders.com/936/936378.jpg',
        },
        {
            url : 'https://cdn.wallpapersafari.com/12/20/nK7lhQ.jpg',
        }];
    const [visible, setVisible] = React.useState(false);
    const width = Dimensions.get('window').width - 40;
    return (
        <View style={[{width: width}, HelperStyle.flexColumn, HelperStyle.marginVertical10 ]}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginBottom15]}>
                <Image source={{uri : src}} style={{height:36, width: 36, borderRadius: 18}} />
                <View style={[HelperStyle.flexColumn, {marginHorizontal: 20}]} >
                    <Text style={{fontSize: 17, fontFamily: BaseFont.fontBold, color: BaseColors.heading}}>{name}</Text>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, {width: '75%'}]}>
                        <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {backgroundColor: '#FF962C', borderRadius: 3, paddingHorizontal: 5 }]}>
                            <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: 'white', marginRight: 3}}>{star}</Text>
                            <Icon name="star" type="AntDesign" style={{color: 'white', fontSize: 12}} />
                        </TouchableOpacity>
                        <Text style={{fontSize: 13, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>{time}</Text>
                    </View>
                </View>
            </View>
            <Modal visible={visible} style={[HelperStyle.flexColumn]} transparent={true}>
                <Icon name="circle-with-cross" type="Entypo" style={{zIndex: 1000, fontSize: 40, color: '#FF962C', position : 'absolute', right: 20, top: 20}} onPress={() => setVisible(false)} />
                <View style={{height: '100%'}}>
                    <ImageViewer imageUrls={pics} enableSwipeDown={true} onSwipeDown={() => setVisible(false)} />
                </View>
            </Modal>
            <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}} numberOfLines={3}>{rev}</Text>
            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.marginVertical10]}>
                {images.map(img =>(
                    img.src.length > 0 ?
                    (<TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)}><Image key={img.sr} source={{uri : img.src}} style={{height: 80, width: 80}} /></TouchableOpacity>)
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

