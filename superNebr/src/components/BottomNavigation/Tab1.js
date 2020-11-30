/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Icon, Text, View} from 'native-base';

import NavigationStyle from './NavigationStyle';

export default class Tab1 extends React.Component {
    render() {
        const { title, isActive } = this.props;
        var iconType = 'Entypo';

        var iconName = 'home';
        if (title === 'Chat') {
            iconType = 'MaterialCommunityIcons';
            iconName = 'message-text';
        }  else if (title === 'Blogs') {
            iconType = 'Entypo';
            iconName = 'text-document-inverted';
        } else if (title === 'Polls') {
            iconType = 'FontAwesome5';
            iconName = 'poll';
        } else if (title === 'Leaderboard') {
            iconType = 'FontAwesome5';
            iconName = 'award';
        }


        return (
            <View style={NavigationStyle.tabBarBtnContainer}>
                <View style={[
                    NavigationStyle.tabBarInnerContainer]}>
                    <Icon
                        type={iconType}
                        name={iconName}
                        style={[
                            NavigationStyle.tabBarIcon,
                            { color: '#243177' },
                        ]}
                    />
                    <Text
                        style={[
                            NavigationStyle.tabBarLabel,
                            { color: '#243177' },
                        ]}>
                        {title}
                    </Text>
                </View>
            </View>
        );
    }
}
