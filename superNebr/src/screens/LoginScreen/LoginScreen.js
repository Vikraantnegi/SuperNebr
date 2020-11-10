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
    var icon = '';
    if (visible){
        icon = 'eye-with-line';
    }
    else {
        icon = 'eye';
    }

  return (
    <View style={[{flex : 1}, BaseColors.BackgroundColor, HelperStyle.paddingVertical20]}>
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
                    placeholder="Email"
                    placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                    placeholderTextColor = {BaseColors.heading}
                    />
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
                    <Text style={[HelperStyle.marginHorizontal40, HelperStyle.marginVertical10, {fontSize: 13, textAlign: 'right', color : BaseColors.heading, fontFamily: BaseFont.fontMedium}]} onPress={() => navigation.navigate('ForgetPassword')}>
                        Forgot Password?
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, {backgroundColor : BaseColors.mustard, width: '75%', borderTopRightRadius: 30, borderBottomRightRadius: 30, elevation: 3, marginBottom: 10, paddingVertical: 15}, HelperStyle.paddingHorizontal20, HelperStyle.flexBetween ]} onPress={() => navigation.navigate('Home')}>
                    <Text style={[{fontSize: 17, color : 'white', fontFamily: BaseFont.fontMedium}]}>
                        Sign In
                    </Text>
                    <Icon name="arrow-right" type="FontAwesome" style={{fontSize: 20, color: 'white'}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, {backgroundColor : '#243177', width: '50%', borderTopRightRadius: 30, borderBottomRightRadius: 30, elevation: 3, paddingVertical: 15}, HelperStyle.paddingHorizontal20, HelperStyle.flexBetween ]} onPress={() => navigation.navigate('Home')}>
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
                        <Icon name="facebook-with-circle" type="Entypo" style={[HelperStyle.marginRight10, {fontSize: 40, color: '#3B5998'}]} />
                        <Icon name="google--with-circle" type="Entypo" style={[{fontSize: 40, color: '#DC4E41'}]} />
                    </View>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                    <Text style={[{fontSize: 13, color : '#243177', fontFamily: BaseFont.fontMedium}]}>
                        Don't have an account? <Text style={{fontFamily: BaseFont.fontBold}} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
                    </Text>
                </View>
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

