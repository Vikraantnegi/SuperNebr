/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseFont from '../../constants/BaseFont';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BaseColors from '../../constants/BaseColors';
import RNPoll, { IChoice } from 'react-native-poll';
import { useNavigation } from '@react-navigation/native';

const MyPollCard = ({name, title, date, pic, choices}) => {
    const navigation = useNavigation();
    return (
        <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.dividerBottom, HelperStyle.paddingVertical20, HelperStyle.flexBetween]}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                <Image source={{uri : pic}} style={{height: 40, width: 40, borderRadius: 20, marginRight: 10}} />
                <View style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 16}}>{name}</Text>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#FF962C', fontSize: 8}}>{date}</Text>
                </View>
            </View>
            <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 15, paddingVertical: 5}}>{title}</Text>
            <RNPoll
                totalVotes={30}
                choices={choices}
                onChoicePress={(selectedChoice: IChoice) =>
                    console.log('SelectedChoice: ', selectedChoice)
                }
                choiceTextStyle={{fontFamily: BaseFont.fontBold, fontSize: 13, color: BaseColors.heading }}
                percentageTextStyle={{fontFamily: BaseFont.fontMedium, fontSize: 10, color: '#24317799' }}
                checkMarkImageStyle={{tintColor: 'green'}}
                fillBackgroundColor="#24317780"
                pollContainerStyle={{backgroundColor: 'white', borderRadius: 0}}
                style={[HelperStyle.marginBottom10]}
            />
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {justifyContent: 'flex-end'}, HelperStyle.marginVertical10]}>
                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C'}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10, HelperStyle.paddingHorizontal20]} onPress={() => navigation.navigate('CreatePoll')}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MyPollCard;



