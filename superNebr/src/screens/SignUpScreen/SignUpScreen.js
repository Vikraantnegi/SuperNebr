/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, Dimensions, ScrollView} from 'react-native';
import logo from '../../assets/Images/companylogo.png';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import {Picker} from '@react-native-community/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let width1 = '25%';
let width2 = '63%';

if (width <= 340){
    width1 = '30%';
    width2 = '58%';
}

const SignUpScreen = ({ navigation }) => {
    const [visible, setvisible] = React.useState(false);
    var icon = '';
    if (visible){
        icon = 'eye-with-line';
    }
    else {
        icon = 'eye';
    }
    const [code, setcode] = React.useState('');
    const [check, setbox] = React.useState(false);
    var box = '';
    if (check){
        box = 'check-square-o';
    }
    else {
        box = 'square-o';
    }
    return (
        <View style={[{flex: 1}, BaseColors.BackgroundColor, HelperStyle.paddingVertical20]}>
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
                    <Text style={[HelperStyle.marginHorizontal20, HelperStyle.marginTop20, HelperStyle.marginBottom10, {fontSize: 34, textAlign: 'left', color : BaseColors.heading, fontFamily: BaseFont.fontBold}]}>
                        Sign Up
                    </Text>
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginBottom20]}>
                        <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]} onPress={() => navigation.navigate('CommunityPage')}>
                            <Text
                                style={[styles.textInput, {width: '84.5%', paddingVertical: 15, paddingLeft: 5}]}>
                            Select Community</Text>
                            <Icon name="chevron-right" type="FontAwesome" style={[{fontSize: 15, color: '#243177', left: -75}]} onPress={() => navigation.navigate('CommunityPage')} />
                        </TouchableOpacity>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.textInput}
                            placeholder="Your Name"
                            placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                            placeholderTextColor = {BaseColors.heading}
                        />
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
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                            <Picker
                                selectedValue={code}
                                style={[styles.textInput, {width : width1}]}
                                itemStyle = {{color: '#243177', fontSize: 15}}
                                mode="dropdown"
                                onValueChange={(itemValue, itemIndex) => {
                                    setcode(itemValue);
                                }}
                            >
                                <Picker.Item value="" label="+91"  />
                            </Picker>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={[styles.textInput, {marginLeft: -50, width: width2}]}
                                placeholder="Phone"
                                placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                placeholderTextColor = {BaseColors.heading}
                            />
                        </View>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal30]}>
                            <Icon name={box} type="FontAwesome" style={{fontSize: 30, color: '#243177'}} onPress={() => setbox(!check)} />
                            <Text style={[HelperStyle.marginHorizontal10,{fontSize: 16, color : BaseColors.heading, fontFamily: BaseFont.fontMedium}]}>
                                I Accept all Terms & Condition
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, {backgroundColor : BaseColors.mustard, width: '75%', borderTopRightRadius: 30, borderBottomRightRadius: 30, elevation: 3, marginBottom: 10, paddingVertical: 12.5}, HelperStyle.paddingHorizontal20, HelperStyle.flexBetween ]} onPress={() => navigation.navigate('Login')}>
                        <Text style={[{fontSize: 17, color : 'white', fontFamily: BaseFont.fontMedium}]}>
                            Sign Up
                        </Text>
                        <Icon name="arrow-right" type="FontAwesome" style={{fontSize: 20, color: 'white'}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={[HelperStyle.flexRow, {backgroundColor : '#243177', width: '50%', borderTopRightRadius: 30, borderBottomRightRadius: 30, elevation: 3, paddingVertical: 12.5}, HelperStyle.paddingHorizontal20, HelperStyle.flexBetween ]} onPress={() => navigation.navigate('Home')}>
                        <Text style={[{fontSize: 17, color : 'white', fontFamily: BaseFont.fontMedium}]}>
                            Skip
                        </Text>
                        <Icon name="arrow-right" type="FontAwesome" style={{fontSize: 20, color: 'white'}} />
                    </TouchableOpacity>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                    <Text style={[{fontSize: 13, color : '#243177', fontFamily: BaseFont.fontMedium}]}>
                        Already have an account? <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('Login')}>Sign In</Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default SignUpScreen;

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

