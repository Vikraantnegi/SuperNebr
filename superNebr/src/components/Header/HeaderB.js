/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import BaseFont from '../../constants/BaseFont';
import HelperStyle from '../../styles/HelperStyle';

export default function HeaderB ({page, name}){
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={[HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                <Icon name="arrow-left" type="FontAwesome5" style={styles.arrow} onPress={() => navigation.navigate(page)} />
                <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: 'white', marginLeft: 10}}>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor : '#FFAC00',
    },
    arrow: {
        fontSize: 20,
        color: 'white',
    },
    icon: {
      fontSize: 15,
      color: 'white',
      marginLeft: 10,
    },
  });
  
