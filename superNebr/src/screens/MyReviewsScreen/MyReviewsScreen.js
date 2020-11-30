/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderB from '../../components/Header/HeaderB';
import ProductData from '../../assets/Data/ProductData';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';

class MyReviewsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            SelectedColor : 0,
            SelectedSize : 0,
        };
    }
    render(){
        const {navigation} = this.props;
        return (
            <View style={[{flex: 1}, HelperStyle.flexColumn, BaseColors.BackgroundColor]}>
                <HeaderB name="My Reviews" page="My" />
                <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical20]}>
                    <ScrollView
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        <View style={[HelperStyle.flex1, HelperStyle.marginHorizontal20, HelperStyle.marginBottom40]}>
                            {ProductData[0].review1.map(rev => (
                                    <ReviewComponent key={rev.sr} src={rev.src} name={rev.name} rev={rev.rev} time={rev.time} star={rev.star} images={rev.images} />
                                ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default MyReviewsScreen;

const styles = StyleSheet.create({
    shadow : {
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 7,
        shadowOpacity: 0,
    },
});
