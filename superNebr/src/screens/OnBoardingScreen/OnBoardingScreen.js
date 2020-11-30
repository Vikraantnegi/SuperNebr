/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import logo from '../../assets/Images/companylogo.png';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import {Icon} from 'native-base';
import BaseFont from '../../constants/BaseFont';
import supplier from '../../assets/Illustrations/supplier.png';
import share from '../../assets/Illustrations/share.png';

const OnBoardingScreen = ({ navigation }) => {
    const [Active, setActive] = React.useState('first');
  return (
    <View style={[{flex: 1}, BaseColors.BackgroundColor, {paddingVertical: '10%'}]}>
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        >
            <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                <Image
                    source={logo}
                    style={{width: 280, height: 56 }}
                />
            </View>
            {Active === 'first' ? (
                <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween]}>
                    <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                        <Image source={supplier}/>
                    </View>
                    <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal30]}>
                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>This chair is a great addition for any room in your home, not only just the living room. Featuring a mid-century design with modern angles, this loveseat is both comfortable and stylish.{'\n'}This chair is a great addition for any room in your home, not only just the living room. Featuring a mid-century design with modern angles, this loveseat is both comfortable and stylish.</Text>
                    </View>
                </View>
            ) : (
                Active === 'second' ? (
                    <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween]}>
                        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, {marginVertical: 38}]}>
                            <Image source={share}/>
                        </View>
                        <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal30]}>
                            <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>This chair is a great addition for any room in your home, not only just the living room. Featuring a mid-century design with modern angles, this loveseat is both comfortable and stylish.{'\n'}This chair is a great addition for any room in your home, not only just the living room. Featuring a mid-century design with modern angles, this loveseat is both comfortable and stylish.</Text>
                        </View>
                    </View>
                ) : (
                    Active === 'third' ? (
                        <View style={[HelperStyle.flexColumn, HelperStyle.flexBetween]}>
                            <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                                <Image source={supplier}/>
                            </View>
                            <View style={[HelperStyle.flexColumn, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal30]}>
                                <Text style={{fontSize: 15, fontFamily: BaseFont.fontRegular, color: '#7F8592'}}>This chair is a great addition for any room in your home, not only just the living room. Featuring a mid-century design with modern angles, this loveseat is both comfortable and stylish.{'\n'}This chair is a great addition for any room in your home, not only just the living room. Featuring a mid-century design with modern angles, this loveseat is both comfortable and stylish.</Text>
                            </View>
                        </View>
                    ) : null
                )
            )}
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, {marginVertical: 5}]}>
                <Icon name="circle" type="FontAwesome" style={{fontSize: 16, color : Active === 'first' ? '#FF962C' : BaseColors.heading}} onPress={() => setActive('first')} />
                <Icon name="circle" type="FontAwesome" style={{fontSize: 16, color : Active === 'second' ? '#FF962C' : BaseColors.heading, marginHorizontal: 10}} onPress={() => setActive('second')} />
                <Icon name="circle" type="FontAwesome" style={{fontSize: 16, color : Active === 'third' ? '#FF962C' : BaseColors.heading}} onPress={() => setActive('third')} />
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginHorizontal40]}>
                {Active === 'second' ? (
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#DFE0E5', borderRadius: 25}, HelperStyle.paddingHorizontal40, HelperStyle.flexAlignCenter, HelperStyle.flexRow, HelperStyle.paddingVertical10]} onPress={() => {
                         navigation.navigate('Login');
                    }}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 15, color: BaseColors.heading }]}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                ) : null}
                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 25, marginLeft: 'auto'}, HelperStyle.paddingHorizontal40, HelperStyle.flexAlignCenter, HelperStyle.flexRow, HelperStyle.paddingVertical10]} onPress={() => {
                    Active === 'first' ? setActive('second') : (
                        Active === 'second' ? setActive('third') : (
                            Active === 'third' ? navigation.navigate('Login') : null
                        )
                    );
                }}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 15, color: 'white' }]}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  );
};

export default OnBoardingScreen;

