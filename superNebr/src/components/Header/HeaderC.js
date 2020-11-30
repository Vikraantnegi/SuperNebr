/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import BaseFont from '../../constants/BaseFont';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';

export default function HeaderC ({page, name, pic}){
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={[HelperStyle.marginVertical15, HelperStyle.marginHorizontal20, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(page)}>
                    <Icon name="arrow-left" type="FontAwesome5" style={styles.arrow} />
                </TouchableOpacity>
                <Image source={{uri : pic}} style={{height: 30, width: 30, borderRadius: 15, marginRight: 5}} />
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Chat')} style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#FCEAEC'}}>{name}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor : BaseColors.heading,
    },
    arrow: {
        fontSize: 15,
        color: 'white',
        marginRight: 10,
    },
  });
