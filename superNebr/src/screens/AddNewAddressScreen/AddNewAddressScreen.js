/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderB from '../../components/Header/HeaderB';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const AddNewAddressScreen = ({ navigation }) => {
    const [Active, setActive] = React.useState('first');
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderB page="AddAddress" name="Add New Address" />
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, HelperStyle.flexBetween, HelperStyle.marginBottom40]}>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical20]}>
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
                        placeholder="Phone Number"
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput, {width: '35%'}]}
                            placeholder="Flat No."
                            placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                            placeholderTextColor = {BaseColors.heading}
                        />
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput, {width: '35%'}]}
                            placeholder="Block"
                            placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                            placeholderTextColor = {BaseColors.heading}
                        />
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput, {width: '35%'}]}
                            placeholder="Road Name"
                            placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                            placeholderTextColor = {BaseColors.heading}
                        />
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput, {width: '35%'}]}
                            placeholder="City"
                            placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                            placeholderTextColor = {BaseColors.heading}
                        />
                    </View>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween]}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput, {width: '35%'}]}
                            placeholder="State"
                            placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                            placeholderTextColor = {BaseColors.heading}
                        />
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput, {width: '35%'}]}
                            placeholder="Pincode"
                            placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                            placeholderTextColor = {BaseColors.heading}
                        />
                    </View>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={[styles.textInput, {width: '50%'}]}
                        placeholder="Add Near By"
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder="Community"
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <Text style={[HelperStyle.marginHorizontal20, HelperStyle.marginVertical10, {fontFamily: BaseFont.fontMedium, fontSize: 15, color: BaseColors.heading }]}>
                        Type of Address
                    </Text>
                    <View style={[HelperStyle.marginVertical10, HelperStyle.marginHorizontal20, HelperStyle.flexRow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('first')}>
                            <Icon name="home" type="Feather" style={{fontSize: 40, marginRight: 20, color: 'rgba(0,0,0,0.75)'}} />
                            {Active === 'first' ? <Icon name="check-circle" type="FontAwesome" style={{fontSize: 15, color: '#22A730', position: 'absolute', bottom: 5, right: 15}} /> : null }
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setActive('second')}>
                            <Icon name="office-building" type="MaterialCommunityIcons" style={{fontSize: 40, color: 'rgba(0,0,0,0.75)'}} />
                            {Active === 'second' ? <Icon name="check-circle" type="FontAwesome" style={{fontSize: 15, color: '#22A730', position: 'absolute', bottom: 5, right: 0}} /> : null }
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 25}, HelperStyle.marginHorizontal20, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate()}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                        Save Address
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddNewAddressScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontSemi,
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 20,
        marginRight: 40,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor : 'rgba(0,0,0,0.05)',
    },
});
