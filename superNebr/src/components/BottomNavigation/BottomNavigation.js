/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable curly */
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Container, Footer, Icon } from 'native-base';
import Tab from './Tab';
import Tab1 from './Tab1';
import NavigationStyle from './NavigationStyle';
import BaseColors from '../../constants/BaseColors';
import HelperStyle from '../../styles/HelperStyle';


export default class BottomNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
        };
    }

    render() {
        const {
            style,
            activeScreen,
            navigation,
            navigation: { state: navigationState },
            backScreen,
        } = this.props;

        const { open } = this.state;

        const Change = () => {
            this.setState({open : !open});
        };

        var iconName = '';
        var iconType = '';

        if (open){
            iconName = 'circle-with-cross';
            iconType = 'Entypo';
        } else {
            iconName = 'dots-horizontal-circle-outline';
            iconType = 'MaterialCommunityIcons';
        }

        return (
                <View style={[HelperStyle.flexColumn, {width: '100%', justifyContent: 'flex-end'}]}>
                    {
                        open ? (
                            <View style={[NavigationStyle.upperTabBarContainer, styles.shadow]}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ flex: 1, backgroundColor: 'transparent' }}
                                    onPress={() => {
                                        if (backScreen)
                                            navigation.navigate('Blogs', { backScreen: backScreen });
                                        else navigation.navigate('Blogs');
                                    }}>
                                    <Tab1 title="Blogs" isActive={activeScreen === 'Blogs' ? true : false} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ flex: 1, backgroundColor: 'transparent' }}
                                    onPress={() => {
                                        if (backScreen)
                                            navigation.navigate('Polls', { backScreen: backScreen });
                                        else navigation.navigate('Polls');
                                    }}>
                                    <Tab1
                                        title="Polls"
                                        isActive={activeScreen === 'Polls' ? true : false}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ flex: 1, backgroundColor: 'transparent' }}
                                    onPress={() => {
                                        if (backScreen)
                                            navigation.navigate('ChatView', { backScreen: backScreen });
                                        else navigation.navigate('ChatView');
                                    }}>
                                    <Tab1
                                        title="Chat"
                                        isActive={activeScreen === 'Chat' ? true : false}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ flex: 1, backgroundColor: 'transparent' }}
                                    onPress={() => {
                                        if (backScreen)
                                            navigation.navigate('Leaderboard', { backScreen: backScreen });
                                        else navigation.navigate('Leaderboard');
                                    }}>
                                    <Tab1 title="Leaderboard" isActive={activeScreen === 'Leaderboard' ? true : false} />
                                </TouchableOpacity>
                            </View>
                        ) : null
                    }
                    <View style={[NavigationStyle.tabBarContainer, style, styles.shadow]}>
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
                                onPress = {() => Change()}
                            >
                                <View style={NavigationStyle.tabBarBtnContainer}>
                                    <View style={[
                                        NavigationStyle.tabBarInnerContainer]}>
                                        <Icon
                                            type={iconType}
                                            name={iconName}
                                            style={[
                                                NavigationStyle.tabBarIcon,
                                                {color : BaseColors.heading, fontSize : 30},
                                            ]}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ flex: 1, backgroundColor: 'transparent' }}
                            onPress={() => {
                                if (backScreen)
                                    navigation.navigate('AllShops', { backScreen: backScreen });
                                else navigation.navigate('AllShops');
                            }}>
                            <Tab title="Shops" isActive={activeScreen === 'Shops' ? true : false} />
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
                </View>
        );
    }
}

const styles = StyleSheet.create({
    shadow : {
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0,
    },
});
