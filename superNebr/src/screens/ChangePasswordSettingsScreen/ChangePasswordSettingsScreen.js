/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderB from '../../components/Header/HeaderB';
import {Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChangePasswordSettingsScreen = ({ navigation }) => {
    const [visible, setvisible] = React.useState(false);
    const [visible1, setvisible1] = React.useState(false);
    const [visible2, setvisible2] = React.useState(false);
    const [password, setpassword] = React.useState('');
    const [confirm, setconfirm] = React.useState('');

    var icon = '';
    if (visible){
        icon = 'eye-with-line';
    }
    else {
        icon = 'eye';
    }

    var icon1 = '';
    if (visible1){
        icon1 = 'eye-with-line';
    }
    else {
        icon1 = 'eye';
    }

    var icon2 = '';
    if (visible2){
        icon2 = 'eye-with-line';
    }
    else {
        icon2 = 'eye';
    }

    let link = '';
    if (password === confirm){
        link = 'ChangePasswordSuccess';
    }
    else {
        link = '';
    }

    let bgColor = '';
    if (password.length > 0 && confirm.length > 0){
        bgColor = 'rgba(255, 150, 44, 1)';
    }
    else {
        bgColor = 'rgba(255, 150, 44, 0.5)';
    }

    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderB name="Change Password" page="Login" />
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginBottom40]}>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical40]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput]}
                            secureTextEntry={visible}
                            placeholder="Old Password"
                            placeholderStyle={{ fontFamily: BaseFont.fontRegular }}
                            placeholderTextColor = "#7F8592"
                        />
                        <Icon name={icon} type="Entypo" style={[{fontSize: 25, color: '#7F8592', left: -80}]} onPress={() => {setvisible(!visible);}} />
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput]}
                            secureTextEntry={visible1}
                            value={password}
                            onChangeText={(text) => setpassword(text)}
                            placeholder="New Password"
                            placeholderStyle={{ fontFamily: BaseFont.fontRegular }}
                            placeholderTextColor = "#7F8592"
                        />
                        <Icon name={icon1} type="Entypo" style={[{fontSize: 25, color: '#7F8592', left: -80}]} onPress={() => {setvisible1(!visible1);}} />
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput]}
                            secureTextEntry={visible2}
                            value={confirm}
                            onChangeText={(text) => setconfirm(text)}
                            placeholder="Confirm New Password"
                            placeholderStyle={{ fontFamily: BaseFont.fontRegular }}
                            placeholderTextColor = "#7F8592"
                        />
                        <Icon name={icon2} type="Entypo" style={[{fontSize: 25, color: '#7F8592', left: -80}]} onPress={() => {setvisible2(!visible2);}} />
                    </View>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20]}>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: bgColor, borderRadius: 30, marginVertical: 5}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate(link)}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Change Password
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ChangePasswordSettingsScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 13,
        marginHorizontal: 0,
        width: '100%',
        marginRight: 40,
        borderBottomWidth: 1,
        borderBottomColor : 'rgba(0,0,0,0.05)',
    },
});

