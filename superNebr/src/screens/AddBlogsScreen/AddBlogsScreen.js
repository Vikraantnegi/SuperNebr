/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderB from '../../components/Header/HeaderB';

class AddBlogsScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {navigation} = this.props;
        return (
            <View style={[HelperStyle.flex1, HelperStyle.flexColumn, BaseColors.BackgroundColor]}>
                <HeaderB name="Add Blogs" page="Blogs" />
                <View style={[HelperStyle.flex1, HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, HelperStyle.flexColumn, HelperStyle.flexBetween]}>
                    <View style={[HelperStyle.flexColumn]}>
                        <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontBold}}>Title of Blog</Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                        <Text style={{fontSize: 15, color: BaseColors.heading, fontFamily: BaseFont.fontBold, marginTop: 10}}>Description of Blog</Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                        <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginTop50, HelperStyle.marginHorizontal10, {backgroundColor: '#DFE0E5', height: 80, width: 80} ]}>
                            <Icon name="plus" type="Entypo" style={{fontSize: 80, color : '#7070705E'}} />
                            <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, {backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 80, width: 80, position: 'absolute'} ]}>
                                <Text style={{fontSize: 15, textAlign: 'center', color: 'white', fontFamily: BaseFont.fontBold}}>Add{'\n'}Photo</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30, marginTop: 'auto'}, HelperStyle.marginHorizontal20, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.marginBottom30]}>
                        <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                            Upload
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddBlogsScreen;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 15,
        paddingVertical: 3,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor : '#DFE0E5',
    },
});
