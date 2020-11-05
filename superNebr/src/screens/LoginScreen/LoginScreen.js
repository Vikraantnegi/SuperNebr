/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, TextInput, StyleSheet} from 'react-native';
import logo from '../../assets/Images/companylogo.png';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon1 from 'react-native-vector-icons/dist/Entypo';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={[HelperStyle.flex1, BaseColors.BackgroundColor, HelperStyle.paddingVertical50]}>
        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
            <Image
                source={logo}
                style={{width: 170, height: 34 }}
            />
        </View>
        <Text style={[HelperStyle.marginHorizontal20, HelperStyle.marginVertical40, {fontSize: 34, textAlign: 'left', color : BaseColors.heading, fontFamily: 'System', fontWeight: 'bold'}]}>
            Sign In
        </Text>
        <View style={[HelperStyle.flexColumn, {marginVertical: 50}, HelperStyle.marginBottom20]}>
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
            <Text style={[HelperStyle.marginHorizontal40, HelperStyle.marginVertical10, {fontSize: 13, textAlign: 'right', color : BaseColors.heading, fontFamily: 'System'}]}>
                Forgot Password?
            </Text>
        </View>
        <View style={[HelperStyle.flexRow, HelperStyle.marginVertical20, {backgroundColor : BaseColors.mustard, width: '75%', borderTopRightRadius: 30, borderBottomRightRadius: 30}, HelperStyle.paddingVertical15, HelperStyle.paddingHorizontal20, HelperStyle.flexBetween ]} onStartShouldSetResponder={() => navigation.navigate('SignUp')}>
            <Text style={[{fontSize: 17, color : 'white', fontFamily: 'System'}]}>
                Sign In
            </Text>
            <Icon name="arrow-right" size={20} color="white" />
        </View>
        <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical30, HelperStyle.marginHorizontal20, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexRowCenter, HelperStyle.flexAlignCenter]}>
                <Text style={[{fontSize: 15, color : '#B1B2B8', fontFamily: 'System'}]}>
                    --------- or connect with ---------
                </Text>
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.flexRowCenter, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10]}>
                <Icon1 name="facebook-with-circle" size={40} color="#3B5998" style={HelperStyle.marginRight10} />
                <Icon1 name="google--with-circle" size={40} color="#DC4E41" />
            </View>
        </View>
        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
            <Text style={[{fontSize: 13, color : '#243177', fontFamily: 'System'}]}>
                Don't have an account? <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
            </Text>
        </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: 'System',
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 20,
        marginRight: 40,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor : 'rgba(0,0,0,0.05)',
    },
});

