/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderB from '../../components/Header/HeaderB';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import UserAddresses from '../../assets/Data/UserAddresses';

const AddAddressScreen = ({ navigation }) => {
    const [select, setselect] = React.useState(0);
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderB page="Home" name="Add Addresses" />
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginBottom40]}>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, HelperStyle.marginBottom20]}>
                        <Icon name="plus" type="Entypo" style={{fontSize: 17, color: BaseColors.heading, marginRight: 5}} />
                        <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexCenter]} onPress={() => navigation.navigate('AddNewAddress')}>
                            <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 20, color: BaseColors.heading }]}>
                                Add a new address
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {UserAddresses.map(address => (
                        <View key={address.sr} style={[HelperStyle.flexRow, HelperStyle.marginVertical10, HelperStyle.paddingVertical10, {borderBottomColor: '#DFE0E5', borderBottomWidth: 1, justifyContent:'flex-start'}]}>
                            {select === address.sr ? (
                                <Icon name ="circle" type="FontAwesome" style={{fontSize: 15, color : BaseColors.heading, marginRight: 10}} />
                            ) : (
                                <Icon name ="circle-o" type="FontAwesome" style={{fontSize: 15, color : BaseColors.heading, marginRight: 10}} onPress={() => setselect(address.sr)} />
                            ) }
                            <View style={[HelperStyle.flexColumn, {marginTop : -5}]}>
                                <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 15, color: BaseColors.heading }]}>
                                    {address.name}
                                </Text>
                                <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 11, color: '#7F8592' }]}>
                                    {address.contact}
                                </Text>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {width: '75%'}]}>
                                    <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 11, color: '#7F8592' }]}>
                                        {address.flat}, {address.block}
                                    </Text>
                                    <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexAlignCenter, {backgroundColor: BaseColors.heading, borderRadius: 5}]}>
                                        <Icon name ="edit" type="AntDesign" style={{fontSize: 15, color : 'white', padding: 3}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 25}, HelperStyle.marginHorizontal20, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate()}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                        DELIVER HERE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddAddressScreen;

