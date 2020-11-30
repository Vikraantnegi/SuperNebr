/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import HeaderA from '../../components/Header/HeaderA';
import Blogs from '../../assets/Data/Blogs';
import BlogCard from '../../components/BlogCard/BlogCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import BaseFont from '../../constants/BaseFont';
import { Icon } from 'native-base';

const BlogView = ({ navigation }) => {
    return (
        <View style={[HelperStyle.flex1, BaseColors.BackgroundColor]}>
            <HeaderA name="BlogView" page="Blogs" />
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{flexGrow : 1}]}
            >
                <View style={[HelperStyle.flex1, HelperStyle.marginBottom40]}>
                    <BlogCard key={Blogs[0].sr} name={Blogs[0].name} title={Blogs[0].title} date={Blogs[0].date} image={Blogs[0].src} desc={Blogs[0].desc} pic={Blogs[0].pic} lines={10} />
                    <View style={[HelperStyle.flexColumn, HelperStyle.marginVertical10]}>
                        <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.paddingHorizontal20]}>
                            <Text style={{fontFamily: BaseFont.fontExtraBold, color : '#243177', fontSize: 15}}>Comments</Text>
                        </View>
                        <CommentCard key={Blogs[0].sr} name={Blogs[0].name} comment={Blogs[0].comment} date={Blogs[0].date} pic={Blogs[0].pic} lines={3} />
                        <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? "padding" : "height"}
                            style={{flex: 1}}
                        >
                            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.flexBetween, HelperStyle.paddingHorizontal20, HelperStyle.dividerBottom, {paddingBottom: 20, paddingTop: 20}]}>
                                <View style={[HelperStyle.flexRow, HelperStyle.flexBetween, HelperStyle.paddingHorizontal20, HelperStyle.paddingVertical10, {backgroundColor: '#DFE0E5', borderRadius: 8}]}>
                                    <TextInput
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        style={[styles.textInput]}
                                        placeholder="Write your comment"
                                        placeholderStyle={{ fontFamily: BaseFont.fontMedium }}
                                        placeholderTextColor = {BaseColors.heading}
                                        multiline={true}
                                    />
                                    <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter]}>
                                        <TouchableOpacity activeOpacity={0.8}>
                                            <Icon name="camera" type="Entypo" style={{fontSize: 18, color: '#C8C8C8', marginRight: 10}} />
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.8}>
                                            <Icon name="attachment" type="Entypo" style={{fontSize: 18, color: '#C8C8C8'}} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity activeOpacity={0.8} style={[{height: 40, width: 40, borderRadius: 20, backgroundColor: '#FF962C'}, HelperStyle.flexAlignCenter, HelperStyle.flexCenter]}>
                                    <Icon name="md-send-sharp" type="Ionicons" style={{fontSize: 20, color: 'white'}} />
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default BlogView;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: BaseFont.fontMedium,
        color: BaseColors.heading,
        fontSize: 13,
        marginVertical: 0,
        paddingVertical: 0,
        width: '65%',
    },
});