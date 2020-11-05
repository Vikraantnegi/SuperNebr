/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, TextInput, StyleSheet} from 'react-native';
import logo from '../../assets/Images/companylogo.png';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Picker} from '@react-native-community/picker';

const SignUpScreen = ({ navigation }) => {
  const [community, selectcommunity] = React.useState('');
  const [code, setcode] = React.useState('');
  const [icon, seticon] = React.useState('square-o');
  return (
    <View style={[HelperStyle.flex1, BaseColors.BackgroundColor, HelperStyle.paddingVertical50]}>
        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
            <Image
                source={logo}
                style={{width: 170, height: 34 }}
            />
        </View>
        <Text style={[HelperStyle.marginHorizontal20, HelperStyle.marginTop30, HelperStyle.marginBottom10, {fontSize: 34, textAlign: 'left', color : BaseColors.heading, fontFamily: BaseFont.fontBold}]}>
            Sign Up
        </Text>
        <View style={[HelperStyle.flexColumn, {marginVertical: 0}, HelperStyle.marginBottom20]}>
            <Picker
                selectedValue={community}
                style={[styles.textInput, {marginBottom : 0, marginLeft: 15}]}
                itemStyle = {{color: '#243177', fontSize: 15}}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) => {
                    selectcommunity(itemValue);
                }}
            >
                <Picker.Item value="" label="Select Community"  />
            </Picker>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              placeholder="Your Name"
              value="Your Name"
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              placeholder="Email"
              value="Email"
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              placeholder="Password"
              value="Password"
            />
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                <Picker
                    selectedValue={code}
                    style={[styles.textInput, {width : '25%'}]}
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
                    style={[styles.textInput, {marginLeft: -50, width: '63%'}]}
                    placeholder="Phone"
                    value="Phone"
                />
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal30]}>
                <Icon name={icon} size={30} color="#3B5998" />
                <Text style={[HelperStyle.marginHorizontal40, HelperStyle.marginVertical10, {fontSize: 16, color : BaseColors.heading, fontFamily: BaseFont.fontMedium}]}>
                    I Accept all Terms & Condition
                </Text>
            </View>
        </View>
        <View style={[HelperStyle.flexRow, HelperStyle.marginVertical20, {backgroundColor : BaseColors.mustard, width: '75%', borderTopRightRadius: 30, borderBottomRightRadius: 30}, HelperStyle.paddingVertical15, HelperStyle.paddingHorizontal20, HelperStyle.flexBetween ]} onStartShouldSetResponder={() => navigation.navigate('SignUp')}>
            <Text style={[{fontSize: 17, color : 'white', fontFamily: BaseFont.fontMedium}]}>
                Sign Up
            </Text>
            <Icon name="arrow-right" size={20} color="white" />
        </View>
        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, HelperStyle.marginTop50]}>
            <Text style={[{fontSize: 13, color : '#243177', fontFamily: BaseFont.fontMedium}]}>
                Already have an account? <Text style={{fontWeight: 'bold'}}>Sign In</Text>
            </Text>
        </View>
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

