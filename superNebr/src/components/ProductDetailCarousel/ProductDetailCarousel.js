/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import {Icon} from 'native-base';
import HelperStyle from '../../styles/HelperStyle';
const width = Dimensions.get('screen').width;
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

class ProductDetailCarousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visible: false,
            images : [
                {
                    sr : 0,
                    url : 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg',
                },
                {
                    sr : 1,
                    url : 'https://assets.ajio.com/medias/sys_master/root/h6e/hf0/15083020615710/-473Wx593H-460422366-red-MODEL2.jpg',
                },
                {
                    sr : 2,
                    url : 'https://assets.ajio.com/medias/sys_master/root/h22/h84/15083023433758/-473Wx593H-460422366-red-MODEL.jpg',
                },
                {
                    sr : 3,
                    url : 'https://assets.ajio.com/medias/sys_master/root/he1/h6a/15083017207838/-473Wx593H-460422366-red-MODEL3.jpg',
                },
                {
                    sr : 4,
                    url : 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg',
                },
            ],
        };
    }

    get pagination () {
        const { images, activeIndex} = this.state;
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
            <View style={{width: width, height: 0.8 * width}}>
                <ParallaxImage
                    source={{ uri: item.url }}
                    containerStyle={{flex: 1}}
                    style={{resizeMode: 'contain'}}
                    parallaxFactor={1}
                    {...parallaxProps}
                />
                <Image source={item.source} />
            </View>
        );
    }

    render(){
        const { images, visible  } = this.state;
        return (
            <View>
                <View style={{width: width}}>
                    <Carousel
                        layout = "default"
                        ref={(c) => { this._carousel = c; }}
                        data={images}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={width}
                        onSnapToItem = { index => this.setState({activeIndex:index}) }
                        autoplay = {true}
                        lockScrollWhileSnapping = {true}
                        hasParallaxImages={true}
                    />
                    { this.pagination }
                </View>
                <Modal visible={visible} style={[HelperStyle.flexColumn]} transparent={true}>
                    <Icon name="circle-with-cross" type="Entypo" style={{zIndex: 1000, fontSize: 40, color: '#FF962C', position : 'absolute', right: 20, top: 20}} onPress={() => this.setState({visible : false})} />
                    <View style={{height: '100%'}}>
                        <ImageViewer imageUrls={images} enableSwipeDown={true} onSwipeDown={() => this.setState({visible : false})} />
                    </View>
                </Modal>
                <View style={[{width : width}, HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.paddingHorizontal20, HelperStyle.marginBottom10]}>
                    {images.map(img => (
                        <TouchableOpacity key={img.sr} activeOpacity={0.5} onPress={() => this.setState({visible : true})} >
                            <Image source={{ uri : img.url}} style={{height: 60, width: 60}} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

export default ProductDetailCarousel;

