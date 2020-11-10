/* eslint-disable prettier/prettier */
import { StyleSheet, Platform } from 'react-native';
import BaseColors from '../../constants/BaseColors';

export default StyleSheet.create({
    tabBarContainer: {
        position: 'absolute',
        bottom: 0,
        elevation: 3,
        borderTopWidth: 1,
        borderTopColor: '#7F859280',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: BaseColors.themeBackground,
        ...Platform.select({
            ios: {
                paddingBottom: 0,
            },
        }),
    },
    tabBarInnerContainer: {
        marginHorizontal: 5,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    tabBarLabel: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '700',
        color: '#7F859280',

    },
    tabBarIcon: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#7F859280',
    },
});
