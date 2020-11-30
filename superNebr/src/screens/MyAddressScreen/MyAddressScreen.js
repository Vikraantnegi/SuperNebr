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

const MyAddressScreen = ({ navigation }) => {
    const [select, setselect] = React.useState(0);
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderB page="My" name="My Addresses" />
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginBottom40]}>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20]}>
                    {UserAddresses.map(address => (
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setselect(address.sr)} key={address.sr} style={[HelperStyle.flexRow, HelperStyle.marginVertical10, HelperStyle.paddingVertical20, {borderBottomColor: '#DFE0E5', borderBottomWidth: 1, justifyContent:'flex-start'}]}>
                            {select === address.sr ? (
                                <Icon name ="circle" type="FontAwesome" style={{fontSize: 15, color : BaseColors.heading, marginRight: 10}} />
                            ) : (
                                <Icon name ="circle-o" type="FontAwesome" style={{fontSize: 15, color : BaseColors.heading, marginRight: 10}} />
                            ) }
                            <View style={[HelperStyle.flexColumn, {marginTop : -5}]}>
                                <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 15, color: BaseColors.heading }]}>
                                    {address.name}
                                </Text>
                                <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 11, color: '#7F8592' }]}>
                                    {address.contact}
                                </Text>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, {width: '80%'}]}>
                                    <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 11, color: '#7F8592' }]}>
                                        {address.flat}, {address.block}, {address.community}
                                    </Text>
                                    <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexAlignCenter, {backgroundColor: BaseColors.heading, borderRadius: 5}]}>
                                        <Icon name ="edit" type="AntDesign" style={{fontSize: 10, color : 'white', padding: 3}} onPress={() => navigation.navigate('AddNewAddress')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default MyAddressScreen;

