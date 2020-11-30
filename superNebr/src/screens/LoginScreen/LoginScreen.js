/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import logo from '../../assets/Images/companylogo.png';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import {Icon} from 'native-base';
import BaseFont from '../../constants/BaseFont';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {
    const [visible, setvisible] = React.useState(false);
    const [code, setcode] = React.useState('');
    const [Active, setActive] = React.useState('');
    const [isActive, setActive1] = React.useState('');
    var icon = '';
    if (visible){
        icon = 'eye-with-line';
    }
    else {
        icon = 'eye';
    }

  return (
    <View style={[{flex : 1}, BaseColors.BackgroundColor, HelperStyle.paddingVertical40]}>
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'space-between' }}
        >
            <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                <Image
                    source={logo}
                    style={{width: 170, height: 34 }}
                />
            </View>
            <View>
                <Text style={[HelperStyle.marginHorizontal20, HelperStyle.marginVertical20, {fontSize: 34, textAlign: 'left', color : BaseColors.heading, fontFamily: BaseFont.fontBold}]}>
                    Sign In
                </Text>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginBottom20]}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder="Email / Mobile Number"
                        keyboardType={Active === 'otp' ? 'numeric' : null}
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal30]}>
                        <TouchableOpacity activeOpacity={0.8} style={[{width: '45%'}, HelperStyle.flexAlignCenter, HelperStyle.flexRow, HelperStyle.paddingVertical10]} onPress={() => {setActive('password'); setActive1('first');}}>
                            <Icon name={isActive === 'first' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                            <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 17, color: BaseColors.heading }]}>
                                Password
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={[{width: '45%'}, HelperStyle.flexAlignCenter, HelperStyle.flexRow, HelperStyle.paddingVertical10]} onPress={() => {setActive('otp'); setActive1('second');}}>
                            <Icon name={isActive === 'second' ? 'radio-button-on' : 'radio-button-off'} type="Ionicons" style={{marginRight: 10, fontSize: 20, color: BaseColors.heading}} />
                            <Text style={[{fontFamily: BaseFont.fontMedium, fontSize: 17, color: BaseColors.heading }]}>
                                OTP
                            </Text>
                        </TouchableOpacity>
                    </View>
                    { Active === 'password' ? (
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={[styles.textInput, {width: '84.5%'}]}
                                placeholder="Password"
                                placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                placeholderTextColor = {BaseColors.heading}
                                secureTextEntry={visible}
                            />
                            <Icon name={icon} type="Entypo" style={[{fontSize: 25, color: '#243177', left: -80}]} onPress={() => {setvisible(!visible);}} />
                        </View>
                    ) : Active === 'otp' ? (
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={[styles.textInput, {width: '84.5%'}]}
                                placeholder="OTP"
                                placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                placeholderTextColor = {BaseColors.heading}
                                value={code}
                                onChangeText={(text) => setcode(text)}
                                keyboardType = "numeric"
                            />
                        </View>
                    ) : (
                        null
                    )}
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {Active === 'otp' ? navigation.navigate('Login') : navigation.navigate('ForgetPassword')}}>
                        <Text style={[HelperStyle.marginHorizontal40, HelperStyle.marginVertical10, {fontSize: 13, textAlign: 'right', color : BaseColors.heading, fontFamily: BaseFont.fontMedium}]}>
                            {Active === 'otp' ? 'Resend OTP' : 'Forgot Password'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow, {backgroundColor : BaseColors.mustard, width: '75%', borderTopRightRadius: 30, borderBottomRightRadius: 30, elevation: 3, marginBottom: 10, paddingVertical: 15}, HelperStyle.paddingHorizontal20, HelperStyle.flexBetween ]} onPress={() => navigation.navigate('Home')}>
                    <Text style={[{fontSize: 17, color : 'white', fontFamily: BaseFont.fontMedium}]}>
                        Sign In
                    </Text>
                    <Icon name="arrow-right" type="FontAwesome" style={{fontSize: 20, color: 'white'}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow, {backgroundColor : '#243177', width: '50%', borderTopRightRadius: 30, borderBottomRightRadius: 30, elevation: 3, paddingVertical: 15}, HelperStyle.paddingHorizontal20, HelperStyle.flexBetween ]} onPress={() => navigation.navigate('Home')}>
                    <Text style={[{fontSize: 17, color : 'white', fontFamily: BaseFont.fontMedium}]}>
                        Skip
                    </Text>
                    <Icon name="arrow-right" type="FontAwesome" style={{fontSize: 20, color: 'white'}} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical30, HelperStyle.marginHorizontal20, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexRowCenter, HelperStyle.flexAlignCenter]}>
                        <Text style={[{fontSize: 15, color : '#B1B2B8', fontFamily: BaseFont.fontMedium}]}>
                            --------- or connect with ---------
                        </Text>
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexRowCenter, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10]}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Icon name="facebook-with-circle" type="Entypo" style={[HelperStyle.marginRight10, {fontSize: 40, color: '#3B5998'}]} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Icon name="google--with-circle" type="Entypo" style={[{fontSize: 40, color: '#DC4E41'}]} />
                    </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}  onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[{fontSize: 13, color : '#243177', fontFamily: BaseFont.fontMedium}]}>
                        Don't have an account? <Text style={{fontFamily: BaseFont.fontBold}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 20,
        marginRight: 40,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor : 'rgba(0,0,0,0.05)',
    },
});

