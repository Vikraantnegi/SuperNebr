/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BaseColors from '../../constants/BaseColors';

const NotificationsCard = ({title, desc, time, date, status}) => {
    var d = '09/11';
    const width = Dimensions.get('window').width - 40;
    return (
        <View style={[{width: width}, HelperStyle.flexColumn, HelperStyle.paddingVertical10, HelperStyle.paddingHorizontal10, {borderBottomWidth: 1, borderColor: '#DFE0E5' }]}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter ]}>
                <Text style={{fontSize: 17, color: BaseColors.heading, fontFamily: status ? BaseFont.fontMedium : BaseFont.fontBold}}>{title}</Text>
                <Text style={{fontSize: 13, color: '#7F8592', fontFamily: BaseFont.fontRegular}}>{date === d ? (time) : (date)}</Text>
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter ]}>
                <Text style={{fontSize: 15, color: status ? '#7F8592' : BaseColors.heading, fontFamily: status ? BaseFont.fontMedium : BaseFont.fontBold, width: '85%'}} numberOfLines={1}>{desc}</Text>
            </View>
        </View>
    );
};

export default NotificationsCard;

