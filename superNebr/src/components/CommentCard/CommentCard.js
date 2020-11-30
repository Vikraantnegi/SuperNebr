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

const CommentCard = ({name, comment, date, pic, lines}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexColumn, HelperStyle.paddingHorizontal20, HelperStyle.dividerBottom, HelperStyle.paddingVertical20, HelperStyle.flexBetween]}  onPress={() => navigation.navigate('BlogView')}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginBottom10]}>
                <Image source={{uri : pic}} style={{height: 40, width: 40, borderRadius: 20, marginRight: 10}} />
                <View style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#FF962C', fontSize: 16}}>{name}</Text>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#FF962C', fontSize: 8}}>{date}</Text>
                </View>
            </View>
            <Text style={[{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 15, width: '85%', marginLeft: 'auto', paddingBottom: 10}]} numberOfLines={lines}>
            {comment}
            </Text>
        </TouchableOpacity>
    );
};

export default CommentCard;



