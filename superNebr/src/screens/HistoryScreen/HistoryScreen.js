/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import HeaderA from '../../components/Header/HeaderA';
import {Icon} from 'native-base';
import HistoryData from '../../assets/Data/HistoryData';
import HistoryCard from '../../components/HistoryCard/HistoryCard';

const CartScreen = ({ navigation }) => {
    const [Active, setActive] = React.useState('first');
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="History" page="Home" />
            <View style={[HelperStyle.flexRow, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20, {borderWidth: 1, borderRadius: 5, borderColor: BaseColors.heading}]}>
                <Text style={{color : Active === 'first' ? '#FF962C' : BaseColors.heading , fontFamily: BaseFont.fontBold, width: '33%', textAlign: 'center', paddingVertical: 5}} onPress={() => setActive('first')}>All</Text>
                <Text style={{color : Active === 'second' ? '#FF962C' : BaseColors.heading , fontFamily: BaseFont.fontBold, width: '33%', textAlign: 'center', paddingVertical: 5, borderLeftWidth: 1, borderRightWidth: 1, borderColor: BaseColors.heading}} onPress={() => setActive('second')}>Arriving</Text>
                <Text style={{color : Active === 'third' ? '#FF962C' : BaseColors.heading , fontFamily: BaseFont.fontBold, width: '33%', textAlign: 'center', paddingVertical: 5}} onPress={() => setActive('third')}>Received</Text>
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.marginHorizontal20, HelperStyle.marginBottom10, {justifyContent: 'space-around'}]}>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                    <Text style={[{color : '#7F8592', fontFamily: BaseFont.fontMedium}, HelperStyle.marginRight10]}>From </Text>
                    <Text style={{color : BaseColors.heading , fontFamily: BaseFont.fontBold}}>1/11/2018</Text>
                    <Icon name="caretdown" type="AntDesign" style={{fontSize: 10, color : '#1B2749', marginLeft : 5}} />
                </View>
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter]}>
                    <Text style={[{color : '#7F8592', fontFamily: BaseFont.fontMedium}, HelperStyle.marginRight10]}>To </Text>
                    <Text style={{color : BaseColors.heading , fontFamily: BaseFont.fontBold}}>1/12/2019</Text>
                    <Icon name="caretdown" type="AntDesign" style={{fontSize: 10, color : '#1B2749', marginLeft : 5}} />
                </View>
            </View>
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1, marginBottom: 70}]}
            >
                <View style={[HelperStyle.flexColumn, HelperStyle.marginHorizontal20, HelperStyle.marginVertical20]}>
                    {HistoryData.map(item => (
                        <HistoryCard key={item.sr} name={item.name} img={item.src} color={item.color} price={item.price} status={item.status} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default CartScreen;

