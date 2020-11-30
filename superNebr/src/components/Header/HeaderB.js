/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import BaseFont from '../../constants/BaseFont';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';

export default function HeaderB ({page, name}){
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={[HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(page)}>
                    <Icon name="arrow-left" type="FontAwesome5" style={styles.arrow} />
                </TouchableOpacity>
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
        backgroundColor : BaseColors.heading,
    },
    arrow: {
        fontSize: 15,
        color: 'white',
    },
    icon: {
      fontSize: 15,
      color: 'white',
      marginLeft: 10,
    },
  });
  
