/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon, Container, Content, Footer} from 'native-base';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const SearchScreen = ({ navigation }) => {
    const [item, setitem] = React.useState('');
    return (
        <Container style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <Content>
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical40, HelperStyle.marginHorizontal20]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                        <Icon name="arrow-left" type="FontAwesome5" style={{fontSize: 20, color: BaseColors.heading}} />
                        <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal10, {padding:10, borderRadius: 8, backgroundColor: 'rgba(223,224,229, 0.5)'}]}>
                            <Icon name="search" type="FontAwesome" style={{fontSize: 20, color: 'gray'}} />
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={[styles.textInput]}
                                value={item}
                                onChangeText={(text) => setitem(text)}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={[{height: 40, width: 40, borderRadius: 20, backgroundColor: '#DFE0E580'}, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]} onPress={() => navigation.navigate('Filters')}>
                            <Icon name="sliders" type="Feather" style={{fontSize: 20, color: BaseColors.heading, transform: [{ rotate: '90deg' }]}} />
                        </TouchableOpacity>
                    </View>
                    {/* <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.dividerBottom, HelperStyle.marginVertical20, HelperStyle.paddingBottom15 ]}>
                        <Icon name="search" type="FontAwesome" style={{fontSize: 15, color: 'gray', marginRight: 10}} />
                        <Text style={[HelperStyle.flexAlignCenter, {fontFamily: BaseFont.fontBold, fontSize: 16, color: BaseColors.heading}]}>
                            Help Center
                        </Text>
                    </View> */}
                </View>
            </Content>
            <BottomNavigation activeScreen="Search" navigation={navigation} />
        </Container>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontBold,
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 10,
        width: '65%',
        paddingVertical: 0,
    },
});