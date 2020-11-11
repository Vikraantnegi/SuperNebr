/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import HelperStyle from '../../styles/HelperStyle';
import BaseColors from '../../constants/BaseColors';
import {Icon} from 'native-base';
import logo from '../../assets/Images/companylogo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BaseFont from '../../constants/BaseFont';

export default function LeftSidebar({navigation}) {
     return (
      <View style={[{flex: 1, width: '80%'}, BaseColors.BackgroundColor, HelperStyle.paddingVertical20]}>
        <View style={styles.header}>
          <Icon name="arrow-left" type="FontAwesome5" style={styles.arrow} onPress={() => {}} />
          <Image
            source={logo}
            style={{width: 120, height: 24 }}
          />
        </View>
        <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, flexDirection: 'column'}}
        >
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="user" type="FontAwesome" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>Profile</Text>
          </View>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="shopping-cart" type="Feather" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>My Cart</Text>
          </View>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="truck" type="FontAwesome" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>My Order</Text>
          </View>
          <View style={{borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'rgba(223,224,229, 0.8)'}}>
            <View style={[HelperStyle.flexRow, HelperStyle.flexCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
              <TouchableOpacity activeOpacity={1} style={{backgroundColor: '#243177', borderRadius: 3, paddingVertical: 10, paddingHorizontal: 60}}>
                <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: 'white'}}>Become a Supplier</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity opacity={1} onPress={() => navigation.navigate('History')} >
            <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
              <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
                <Icon name="clipboard" type="Feather" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
              </TouchableOpacity>
              <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>History</Text>
            </View>
          </TouchableOpacity>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="credit-card" type="FontAwesome" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>Account & Card</Text>
          </View>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="settings" type="Ionicons" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>Settings</Text>
          </View>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="star-o" type="FontAwesome" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>Rate the App</Text>
          </View>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="mail-forward" type="FontAwesome" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>Share & Earn</Text>
          </View>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="poll" type="FontAwesome5" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>Polls</Text>
          </View>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="text-document-inverted" type="Entypo" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>Blog</Text>
          </View>
          <View style={[HelperStyle.flexRow, HelperStyle.flexAlignCenter, HelperStyle.marginHorizontal20, HelperStyle.marginVertical10]}>
            <TouchableOpacity activeOpacity={1} style={{marginRight: 20, height: 46, width: 46, borderRadius: 23, backgroundColor: 'rgba(223,224,229, 0.5)'}}>
              <Icon name="logout" type="MaterialCommunityIcons" style={{fontSize: 30, color: '#243177', alignSelf: 'center', paddingVertical: 5 }} />
            </TouchableOpacity>
            <Text style={{fontFamily: BaseFont.fontBold, fontSize: 15, color: '#243177'}}>Logout</Text>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
      height: 30,
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-between',
      margin: 20,
  },
  arrow: {
      fontSize: 25,
      color: '#243177',
  },
});
