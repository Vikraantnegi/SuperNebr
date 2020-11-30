/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import HeaderB from '../../components/Header/HeaderB';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import FilterData from '../../assets/Data/FilterData';
import RangeSlider from 'rn-range-slider';
import Thumb from './Thumb';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Notch from './Notch';
import Label from './Label';

const FiltersScreen = ({navigation}) => {
    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const [SelectedColor, setColor] = useState(0);
    const [SelectedMaterial, setMaterial] = useState(0);
    const [SelectedPlace, setPlace] = useState(0);
    const [low, setlow] = useState(0);
    const [high, sethigh] = useState(2000);
    const renderLabel = useCallback(value => <Label text={value}/>, []);
    const renderNotch = useCallback(() => <Notch/>, []);
    const handleValueChange = useCallback((low, high) => {
        setlow(low);
        sethigh(high);
      }, []);
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderB name="Filter" page="Search" />
            <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical20, HelperStyle.marginHorizontal20]}>
                <View style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#1B2749'}}>Place</Text>
                        {FilterData.map(filter => (
                            <View key={filter.sr} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, {flexWrap: 'wrap'}]}>
                                {filter.place.map(place => (
                                    <TouchableOpacity key={place.sr} activeOpacity={0.8} style={[HelperStyle.flexAlignCenter, HelperStyle.flexCenter, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {backgroundColor : SelectedPlace === place.sr ? BaseColors.heading : '#DFE0E580', margin: 5, borderRadius: 20}]} onPress={() => setPlace(place.sr)}>
                                        <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 15, color : SelectedPlace === place.sr ? 'white' : '#1B2749'}}>{place.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                </View>
                <View style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#1B2749'}}>Material</Text>
                        {FilterData.map(filter => (
                            <View key={filter.sr} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical10, {flexWrap: 'wrap'}]}>
                                {filter.material.map(material => (
                                    <TouchableOpacity key={material.sr} activeOpacity={0.8} style={[HelperStyle.flexAlignCenter, HelperStyle.flexCenter, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {backgroundColor : SelectedMaterial === material.sr ? BaseColors.heading : '#DFE0E580', margin: 5, borderRadius: 20}]} onPress={() => setMaterial(material.sr)}>
                                        <Text style={{fontFamily: BaseFont.fontMedium, fontSize: 15, color : SelectedMaterial === material.sr ? 'white' : '#1B2749'}}>{material.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                </View>
                <View style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#1B2749'}}>Color</Text>
                        {FilterData.map(filter => (
                            <View key={filter.key} style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginVertical15]}>
                                {filter.color.map(color => (
                                    SelectedColor === color.sr ? (
                                        <TouchableOpacity key={color.sr} activeOpacity={0.8} style={[styles.shadeOuter, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                                            <TouchableOpacity activeOpacity={1} style={{height: 30, width: 30, borderRadius: 15, backgroundColor: color.color}} />
                                        </TouchableOpacity>
                                    )
                                    :   (
                                        <TouchableOpacity key={color.sr} activeOpacity={0.8} style={{height: 30, width: 30, borderRadius: 15, backgroundColor: color.color, marginRight: 5}} onPress={() => setColor(color.sr)} />
                                    )
                                ))}
                            </View>
                        ))}
                </View>
                <View style={[HelperStyle.flexColumn]}>
                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#1B2749'}}>Price Range</Text>
                    <RangeSlider
                        style={{width: '100%', height: 10, marginVertical: 20}}
                        min={0}
                        max={2000}
                        step={20}
                        floatingLabel
                        selectionColor="#FF962C"
                        blankColor="#DFE0E5"
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        renderLabel={renderLabel}
                        renderNotch={renderNotch}
                        onValueChanged={handleValueChange}
                    />
                </View>
            </View>
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.marginVertical40, HelperStyle.marginHorizontal30 ]}>
                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#DFE0E5', borderRadius: 30, marginVertical: 5, width: '45%'}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate()}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: '#1B2749' }]}>
                        Clear
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[{backgroundColor: '#FF962C', borderRadius: 30, marginVertical: 5, width: '45%'}, HelperStyle.flexAlignCenter, HelperStyle.paddingVertical10]} onPress={() => navigation.navigate()}>
                    <Text style={[{fontFamily: BaseFont.fontBold, fontSize: 17, color: 'white' }]}>
                        Apply
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FiltersScreen;

const styles = StyleSheet.create({
    shadeOuter : {borderWidth: 1, borderColor: BaseColors.heading, height: 36, width: 36, borderRadius: 18, marginRight: 5},
});
