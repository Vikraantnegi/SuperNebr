/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Icon, Text, View} from 'native-base';

import NavigationStyle from './NavigationStyle';

export default class Tab extends React.Component {
    render() {
        const { title, isActive } = this.props;
        var iconType = 'Entypo';

        var iconName = 'home';
        if (title === 'Home') {
            iconName = 'home';
            iconType = 'Entypo';
        } else if (title === 'Search') {
            iconType = 'FontAwesome';
            iconName = 'search';
        } else if (title === 'Cart') {
            iconType = 'Feather';
            iconName = 'shopping-cart';
        } else if (title === 'Wishlist') {
            iconType = 'FontAwesome';
            iconName = 'heart';
        } else if (title === 'My') {
            iconType = 'FontAwesome5';
            iconName = 'user-alt';
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
                            isActive
                                ? { color: '#243177' }
                                : { color: '#7F859280' },
                        ]}
                    />
                    <Text
                        style={[
                            NavigationStyle.tabBarLabel,
                            isActive
                                ? { color: '#243177' }
                                : { color: '#7F859280' },
                        ]}>
                        {title}
                    </Text>
                </View>
            </View>
        );
    }
}
