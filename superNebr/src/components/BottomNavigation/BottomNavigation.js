/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable curly */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import Tab from './Tab';
import NavigationStyle from './NavigationStyle';


export default class BottomNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            style,
            activeScreen,
            navigation,
            navigation: { state: navigationState },
            backScreen,
        } = this.props;

        return (
            <View style={[NavigationStyle.tabBarContainer, style]}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ flex: 1, backgroundColor: 'transparent' }}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}>
                    <Tab title="Home" isActive={activeScreen === 'Home' ? true : false} />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ flex: 1, backgroundColor: 'transparent' }}
                    onPress={() => {
                        if (backScreen)
                            navigation.navigate('Search', { backScreen: backScreen });
                        else navigation.navigate('Search');
                    }}>
                    <Tab
                        title="Search"
                        isActive={activeScreen === 'Search' ? true : false}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ flex: 1, backgroundColor: 'transparent' }}
                    onPress={() => {
                        if (backScreen)
                            navigation.navigate('Cart', { backScreen: backScreen });
                        else navigation.navigate('Cart');
                    }}>
                    <Tab
                        title="Cart"
                        isActive={activeScreen === 'Cart' ? true : false}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ flex: 1, backgroundColor: 'transparent' }}
                    onPress={() => {
                        if (backScreen)
                            navigation.navigate('Wishlist', { backScreen: backScreen });
                        else navigation.navigate('Wishlist');
                    }}>
                    <Tab title="Wishlist" isActive={activeScreen === 'Wishlist' ? true : false} />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ flex: 1, backgroundColor: 'transparent' }}
                    onPress={() => {
                        if (backScreen)
                            navigation.navigate('My', { backScreen: backScreen });
                        else navigation.navigate('My');
                    }}>
                    <Tab title="My" isActive={activeScreen === 'My' ? true : false} />
                </TouchableOpacity>
            </View>
        );
    }
}
