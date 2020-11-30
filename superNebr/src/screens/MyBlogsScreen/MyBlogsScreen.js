/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import BaseFont from '../../constants/BaseFont';
import {Icon} from 'native-base';
import HeaderA from '../../components/Header/HeaderA';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Blogs from '../../assets/Data/Blogs';
import BlogCard from '../../components/BlogCard/BlogCard';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const MyBlogsScreen = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="My Blogs" page="My" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.marginBottom80]}>
                    {Blogs.map(blog =>(
                        <BlogCard key={blog.sr} name={blog.name} title={blog.title} date={blog.date} image={blog.src} desc={blog.shortdesc} pic={blog.pic} lines={5} />
                    ))}
                </View>
            </ScrollView>
        <BottomNavigation name="" navigation={navigation} />
        </View>
    );
};

export default MyBlogsScreen;

