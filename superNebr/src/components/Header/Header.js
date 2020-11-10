/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';

export default function Header ({page, name}){
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <Icon name="arrow-left" type="FontAwesome5" style={styles.arrow} onPress={() => navigation.navigate({page})} />
            <Text style={{fontSize: 18, color: BaseColors.heading, fontFamily: BaseFont.fontBold}}>{name}</Text>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 30,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        margin: 20,
    },
    arrow: {
        fontSize: 25,
        color: '#243177',
    },
});
