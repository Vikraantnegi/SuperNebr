/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import Header from '../../components/Header/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import successpassword from '../../assets/Illustrations/SuccessPassword.png';

const ChangePasswordSuccessScreen = ({ navigation }) => {

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginBottom40]}>
                <Header page="Login" />
                <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginBottom20]}>
                    <Image source={successpassword} style={[HelperStyle.marginVertical10]}/>
                    <Text style={[HelperStyle.textCenter, {fontSize: 22, color: '#243177', fontFamily: BaseFont.fontMedium}]}>
                        Change password{'\n'} successfully!
                    </Text>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20]}>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30, marginVertical: 5}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate('Login')}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Ok
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ChangePasswordSuccessScreen;

