/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import Header from '../../components/Header/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ForgetPasswordScreen = ({ navigation }) => {
    const [contact, setcontact] = React.useState('');
    let bgColor = '';
    let link = '';
    if (contact.length > 0){
        bgColor = 'rgba(255, 150, 44, 1)';
        link = 'VerifyCode';
    }
    else {
        bgColor = 'rgba(255, 150, 44, 0.5)';
        link = '';
    }
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <Header page="Login" />
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginBottom40]}>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20]}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 34, color: '#243177' }]}>
                        Forgot password
                    </Text>
                    <View style={[HelperStyle.flexColumn]}>
                        <Text style={[HelperStyle.marginTop40, {fontFamily: BaseFont.fontMedium, fontSize: 17, color: '#243177' }]}>
                            Phone number
                        </Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput]}
                            value={contact}
                            onChangeText={(text) => setcontact(text)}
                            keyboardType = "numeric"
                        />
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: bgColor, borderRadius: 30}, HelperStyle.marginHorizontal20, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate(link)}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                        Verify
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgetPasswordScreen;

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

