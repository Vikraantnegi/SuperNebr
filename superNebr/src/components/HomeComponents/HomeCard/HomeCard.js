/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import HelperStyle from '../../../styles/HelperStyle';
import BaseFont from '../../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HomeCard = ({src, name, price, like}) => {
    const navigation = useNavigation();
    const [state, setstate] = React.useState(like);
    let icon = '';
    if (state){
        icon = 'heart';
    }
    else {
        icon = 'hearto';
    }
    const width = Dimensions.get('screen').width;
    return (
        <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10, styles.shadow, {width: '45%', height:'45%', backgroundColor: '#FEEEF0', padding: 10, paddingTop: 0, borderRadius: 8}]} onPress={() => navigation.navigate('ProductDetail')}>
            <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexAlignCenter]} onPress={() => navigation.navigate('ProductDetail')}>
                <View style={[HelperStyle.flexRow]}>
                    <Image source={{ uri : src }} style={{height: 120, width: '85%'}} />
                    <Icon name={icon} type="AntDesign" style={{fontSize: 20, color: '#243177', position : 'absolute', right: -10, top: 15}} onPress={() => setstate(!state)} />
                </View>
                <Text style={{fontFamily: BaseFont.fontBold, color : '#243177', fontSize: 15, marginVertical: 5}} numberOfLines={1}>
                    {name}
                </Text>
                <View style={[HelperStyle.flexRow, {marginBottom: 5}]}>
                    <Icon name="price-tag" type="Entypo" style={{fontSize: 16, color: '#7F8592', marginRight: 5}} />
                    <Text style={{fontFamily: BaseFont.fontMedium, color : '#243177', fontSize: 13}}>
                        ₹{price}
                    </Text>
                </View>
                <View style={[HelperStyle.flexRow, {justifyContent: 'flex-end', width: '100%'}]}>
                    <Icon name="pluscircleo" type="AntDesign" style={{fontSize: 16, color: '#FF962C', marginRight : 5}} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default HomeCard;

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


