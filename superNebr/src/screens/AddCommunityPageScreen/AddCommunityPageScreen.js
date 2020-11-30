/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CommunityPageScreen = ({ navigation }) => {
    const [commname, setcommname] = React.useState('');
    const [builder, setbuilder] = React.useState('');
    let bgColor = '';

    if (commname.length > 0){
        bgColor = 'rgba(255, 150, 44, 1)';
    }
    else {
        bgColor = 'rgba(255, 150, 44, 0.5)';
    }
  return (
    <View style={[{height: height, width: width}, BaseColors.BackgroundColor]}>
        <Header page="CommunityPage" name="Add new Community" />
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View>
                <View style={[HelperStyle.flexRow, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20]}>
                    <Text style={{fontSize: 14, color: '#24317780', fontFamily: BaseFont.fontMedium}}>
                        We're already available in over 2000 communities. if your community is on this list, please share same details and we'll be glad to add it
                    </Text>
                </View>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder="Your Name"
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <TextInput
                        keyboardType="numeric"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder="Phone Number"
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder="Builder Name"
                        defaultValue={builder}
                        onChangeText={(text) => setbuilder(text)}
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder="Community Name"
                        defaultValue={commname}
                        onChangeText={(text) => setcommname(text)}
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder="Address (Optional)"
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder="Pincode"
                        keyboardType="numeric"
                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                        placeholderTextColor = {BaseColors.heading}
                    />
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: bgColor, borderRadius: 30, marginVertical: 5}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginHorizontal20, HelperStyle.marginTop50]} onPress={() => navigation.navigate('SignUp')}>
                <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                    Submit
                </Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

export default CommunityPageScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 15,
        marginRight: 40,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor : 'rgba(0,0,0,0.05)',
    },
});

