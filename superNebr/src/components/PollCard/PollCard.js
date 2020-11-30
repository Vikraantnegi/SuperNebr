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

const PollCard = ({name, title, date, pic, choices}) => {
    const navigation = useNavigation();
    return (
        <View style={[HelperStyle.flexColumn, HelperStyle.paddingHorizontal20, HelperStyle.dividerBottom, HelperStyle.paddingVertical20, HelperStyle.flexBetween]}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {marginVertical: 5}]}>
                <Text style={{fontFamily: BaseFont.fontExtraBold, color: BaseColors.heading, fontSize: 20,padding: 5}} numberOfLines={2}>{title}</Text>
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, {justifyContent: 'flex-end'}]}>
                <Image source={{uri : pic}} style={{height: 25, width: 25, borderRadius: 20, marginRight: 10}} />
                <View style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontExtraBold, color: '#FF962C', fontSize: 10}}>{name}</Text>
                    <Text style={{fontFamily: BaseFont.fontMedium, color: '#FF962C', fontSize: 8}}>{date}</Text>
                </View>
            </View>
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
                style={[HelperStyle.marginBottom20]}
            />
        </View>
    );
};

export default PollCard;



