/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import HelperStyle from '../../../styles/HelperStyle';
import BaseFont from '../../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeServiceCard = ({src, name, timings, contact, count, like}) => {
    return (
        // <TouchableOpacity activeOpacity={0.8}>
            <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, styles.shadow, {width: '45%', backgroundColor: '#FFF3F5', padding: 10, paddingVertical: 5, borderRadius: 8}]}>
                <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexAlignCenter]}>
                    <View style={[HelperStyle.flexRow]}>
                        <Image source={{ uri : src }} style={{height: 120, width: '85%'}} />
                        <Icon name="share-alt" type="FontAwesome5" style={{fontSize: 20, color: '#243177', position : 'absolute', right: -10, top: 15}} />
                    </View>
                    <View style={[HelperStyle.flexColumn, {alignItems: 'flex-start'}]}>
                        <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15, marginVertical: 2, textAlign: 'left'}} numberOfLines={1}>
                            {name}
                        </Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color : '#243177', fontSize: 8, textAlign: 'left', marginVertical: 2}}>
                            {timings}
                        </Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color : '#243177', fontSize: 8, textAlign: 'left', marginVertical: 2}}>
                            {contact}
                        </Text>
                        <Text style={{fontFamily: BaseFont.fontMedium, color : '#243177', fontSize: 8, textAlign: 'left', marginVertical: 2}}>
                            {count}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        // </TouchableOpacity>
    );
};

export default HomeServiceCard;

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


