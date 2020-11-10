/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import Header from '../../components/Header/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const VerifyCodeScreen = ({ navigation }) => {
    const [code, setcode] = React.useState('');
    let bgColor = '';
    let link = '';

    if (code.length > 0){
        bgColor = 'rgba(255, 150, 44, 1)';
    }
    else {
        bgColor = 'rgba(255, 150, 44, 0.5)';
    }

    if (code === '2345'){
        link = 'ChangePassword';
    }
    else {
        link = '';
    }
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <Header page="ForgetPassword" />
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginBottom40]}>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20]}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 34, color: '#243177' }]}>
                        Forgot password
                    </Text>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: '#7F8592' }, HelperStyle.marginVertical20]}>
                    We’ve send a code to your phone number. This code will expired 10 minutes after this message. If you don't get a message. Click Resend.
                    </Text>
                    <View style={[HelperStyle.flexColumn]}>
                        <Text style={[HelperStyle.marginTop20, {fontFamily: BaseFont.fontMedium, fontSize: 17, color: '#243177' }]}>
                            Code
                        </Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput]}
                            value={code}
                            onChangeText={(text) => setcode(text)}
                            keyboardType = "numeric"
                        />
                    </View>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20]}>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#DFE0E5', borderRadius: 30, marginVertical: 5}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: '#1B2749' }]}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: bgColor, borderRadius: 30, marginVertical: 5}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate(link)}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 0,
        marginRight: 40,
        borderBottomWidth: 1,
        borderBottomColor : 'rgba(0,0,0,0.05)',
    },
});

