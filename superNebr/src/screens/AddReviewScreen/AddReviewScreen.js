/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderB from '../../components/Header/HeaderB';

class AddReviewScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {navigation} = this.props;
        return (
            <View style={[{flex: 1}, HelperStyle.flexColumn, BaseColors.BackgroundColor]}>
                <HeaderB name="Add Reviews" page="OrderDetails" />
                <View style={[HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, HelperStyle.flexColumn]}>
                    <Text style={{fontSize: 25, color: BaseColors.heading, fontFamily: BaseFont.fontBold}}>Reviews</Text>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical20, HelperStyle.flexBetween, {width: '50%'}]}>
                        <Icon name="star" type="AntDesign" style={{ fontSize: 30, color: '#FF962C' }} />
                        <Icon name="star" type="AntDesign" style={{ fontSize: 30, color: '#FF962C' }} />
                        <Icon name="star" type="AntDesign" style={{ fontSize: 30, color: '#FF962C' }} />
                        <Icon name="star" type="AntDesign" style={{ fontSize: 30, color: '#DFE0E5' }} />
                        <Icon name="star" type="AntDesign" style={{ fontSize: 30, color: '#DFE0E5' }} />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginTop20, {backgroundColor: '#DFE0E5', height: 80, width: 80} ]}>
                        <Icon name="plus" type="Entypo" style={{fontSize: 80, color : '#7070705E'}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddReviewScreen;
