/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Dimensions} from 'react-native';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';

const width = Dimensions.get('screen').width;

class ShopCarousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            images : [
                {
                    source : 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg',
                },
                {
                    source : 'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
                },
                {
                    source : 'https://images4.alphacoders.com/936/936378.jpg',
                },
                {
                    source : 'https://cdn.wallpapersafari.com/12/20/nK7lhQ.jpg',
                },
                {
                    source : 'https://images2.alphacoders.com/103/1039991.jpg',
                },
                {
                    source : 'https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg',
                },
                {
                    source : 'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg',
                },
            ],
        };
    }

    get pagination () {
        const { images, activeIndex } = this.state;
        return (
            <Pagination
              dotsLength={images.length}
              activeDotIndex={activeIndex}
              containerStyle={{ backgroundColor: '#FCEAEC', alignItems: 'center', marginHorizontal: '45%', paddingVertical: 15 }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#7F8592',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
        );
    }

    _renderItem = ({item, index}, parallaxProps) => {
        return (
            <View style={{width: 300, height: 150}}>
                <ParallaxImage
                    source={{ uri: item.source }}
                    containerStyle={{flex: 1}}
                    style={{resizeMode: 'cover'}}
                    parallaxFactor={0.8}
                    {...parallaxProps}
                />
                <Image source={item.source} style={{}} />
            </View>
        );
    }

    render(){
        return (
                <View style={{width: width}}>
                    <Carousel
                        layout = "default"
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.images}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={300}
                        onSnapToItem = { index => this.setState({activeIndex:index}) }
                        autoplay = {true}
                        lockScrollWhileSnapping = {true}
                        hasParallaxImages={true}
                    />
                    { this.pagination }
                </View>
        );
    }
}

export default ShopCarousel;

