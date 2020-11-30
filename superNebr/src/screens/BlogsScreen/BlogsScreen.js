/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderA from '../../components/Header/HeaderA';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Blogs from '../../assets/Data/Blogs';
import BlogCard from '../../components/BlogCard/BlogCard';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const BlogsScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <View style={styles.header}>
                <View style={[HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
                        <Icon name="arrow-left" type="FontAwesome5" style={styles.arrow} />
                    </TouchableOpacity>
                    <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: 'white', marginLeft: 10}}>Blogs</Text>
                </View>
                <View style={[HelperStyle.marginVertical20, HelperStyle.marginHorizontal20, HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                    <TouchableOpacity activeOpacity={0.8} style={[HelperStyle.flexRow]} onPress={() => navigation.navigate('AddBlog')}>
                        <Icon name="plus" type="Entypo" style={{fontSize : 20, marginRight: 10, color: 'white'}} />
                        <Text style={{fontSize: 15, fontFamily: BaseFont.fontMedium, color: 'white'}}>Create Blog</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.flexAlignCenter, HelperStyle.flexCenter, HelperStyle.marginTop20]}>
                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, {padding:10, borderRadius: 15, backgroundColor: 'rgba(223,224,229, 0.5)'}]}>
                        <Icon name="search" type="FontAwesome" style={{fontSize: 20, color: 'gray'}} />
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[styles.textInput]}
                        />
                    </View>
                </View>
                {Blogs.map(blog =>(
                    <BlogCard key={blog.sr} name={blog.name} title={blog.title} date={blog.date} image={blog.src} desc={blog.shortdesc} pic={blog.pic} lines={5} />
                ))}
            </ScrollView>
        </View>
    );
};

export default BlogsScreen;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor : BaseColors.heading,
    },
    arrow: {
        fontSize: 15,
        color: 'white',
    },
    icon: {
      fontSize: 15,
      color: 'white',
      marginLeft: 15,
    },
    textInput: {
        fontFamily: BaseFont.fontBold,
        color: BaseColors.heading,
        fontSize: 15,
        marginHorizontal: 10,
        width: '85%',
        paddingVertical: 0,
    },
  });
