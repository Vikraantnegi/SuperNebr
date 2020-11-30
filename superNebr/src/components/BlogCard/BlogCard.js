/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BaseColors from '../../constants/BaseColors';
import { useNavigation } from '@react-navigation/native';

const BlogCard = ({name, image, title, desc, date, pic, lines}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.dividerBottom, HelperStyle.paddingVertical20, HelperStyle.flexBetween]}  onPress={() => navigation.navigate('BlogView')}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 20,padding: 5}} numberOfLines={2}>{title}</Text>
                <Icon name="share-alt" type="FontAwesome5" style={{fontSize: 20, color: BaseColors.heading, marginLeft: 'auto', marginRight: 20}} />
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                <Image source={{uri : pic}} style={{height: 25, width: 25, borderRadius: 20, marginRight: 10}} />
                <View style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#FF962C', fontSize: 10}}>{name}</Text>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#FF962C', fontSize: 8}}>{date}</Text>
                </View>
            </View>
            <Image source={{uri : image}} style={{margin: 20, height: 150}} />
            <Text style={[{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 15, width: '95%', paddingBottom: 10}]} numberOfLines={lines}>
            {desc}
            {lines <= 5 ? (
                <TouchableOpacity activeOpacity={0.8} style={{paddingLeft: 5}}>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 10}}>See More</Text>
                </TouchableOpacity>
            ) : null}
            </Text>
        </TouchableOpacity>
    );
};

export default BlogCard;



