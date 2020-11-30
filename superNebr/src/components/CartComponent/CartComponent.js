/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CartComponent = ({name, img, color, price, discountedprice, qty, seller, percent, size, avail}) => {
    const navigation = useNavigation();
    const width = Dimensions.get('window').width - 40;
    const [like, setlike] = React.useState(false);
    const [counterState, setCounterState] = React.useState(qty);
    const incrementCounter = () => setCounterState(counterState + 1);
    const decrementCounter = () => {
        setCounterState(counterState - 1);
    };
    const Wishlist = () => {
        setlike(!like);
    };
    return (
        <View style={[{width: width}, styles.shadow, {backgroundColor: avail ? '#FFFFFF' : '#FFF8F8', borderRadius: 10, marginVertical: 10, paddingVertical: 10 }]}>
            <Icon name = {like ? 'heart' : 'hearto'} type="AntDesign" style={{fontSize: 20, color: 'red', marginLeft: 'auto', right: 20}} onPress={() => {Wishlist(); navigation.navigate('Wishlist')}} />
            <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {padding: 10, paddingTop: 0, borderBottomColor: '#D4D4D4', borderBottomWidth: 1}]} >
                <View style={[HelperStyle.flexRow, {width: '30%'}]}>
                    <Image source ={{uri : img}} style={{height: 90, width: '100%', borderRadius: 5}} />
                </View>
                <View style={[HelperStyle.flexColumn, {width: '40%', height : 90, marginHorizontal: 10 }]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#243177', fontSize: 15}}>
                        {name}
                    </Text>
                    {seller !== '' ? (
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#A2A2A2', fontSize: 10}}>
                            Seller : {seller}
                        </Text>
                    ) : null}
                    {size !== '' ? (
                        <Text style={{fontFamily: BaseFont.fontMedium, color: '#A2A2A2', fontSize: 10}}>
                            Size : {size}
                        </Text>
                    ) : null}
                    {avail ? (
                        <View style={[HelperStyle.flexColumn]}>
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                                {discountedprice > 0 ? (
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13, textDecorationLine: 'line-through', marginRight: 5}}>
                                        ₹{discountedprice}
                                    </Text>
                                ) : null}
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13}}>
                                    ₹{price}
                                </Text>
                                {discountedprice > 0 ? (
                                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#22A730', fontSize: 10, marginTop: -10, marginLeft: 5}}>
                                        {percent}Off
                                    </Text>
                                ) : null}
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={[{ backgroundColor: '#DFE0E580', borderRadius: 15, padding: 10, paddingVertical: 5, justifyContent: 'space-around'}, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                <Icon name="color-palette" type="Ionicons" style={{fontSize: 15, color : '#7F8592'}} />
                                <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 13}}>
                                    Color :
                                </Text>
                                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: color, height: 16, width: 16, borderRadius: 8}]} />
                                <Icon name="caretdown" type="AntDesign" style={{fontSize: 10, color : '#1B2749'}} />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 15}]}>
                            <Text style={{fontFamily: BaseFont.fontExtraBold, color: 'red', fontSize: 15}}>
                                OUT OF STOCK
                            </Text>
                        </View>
                    )}
                </View>
                {avail ? (
                    <View style={[HelperStyle.flexColumn, {alignItems: 'flex-end', justifyContent: 'flex-end' , width: '23%', height: 85}]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, {width: '85%'}]}>
                            <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#243177', height: 20, width: 20, borderRadius: 10, paddingBottom: 3},HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]} onPress ={() => decrementCounter()}>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: 'white', fontSize: 16}}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <Text style={{fontFamily: BaseFont.fontMedium, color: '#243177', fontSize: 13}}>
                                {counterState}
                            </Text>
                            <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#243177', height: 20, width: 20, borderRadius: 10, paddingBottom: 3},HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]} onPress ={() => incrementCounter()}>
                                <Text style={{fontFamily: BaseFont.fontMedium, color: 'white', fontSize: 16}}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexCenter,{paddingTop: 5}]}>
                <Icon name="trash-2" type="Feather" style={[HelperStyle.marginLeft10, {color: '#7F8592', fontSize: 15}]} />
                <Text style={{fontFamily: BaseFont.fontMedium, color: '#7F8592', fontSize: 16}}>
                   Remove
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartComponent;

const styles = StyleSheet.create({
    shadow : {
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 7,
        shadowOpacity: 0,
    },
});


