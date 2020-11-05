/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Platform, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle="dark-content" />
        ) : null}
        <SafeAreaView />
        <AppNavigator />
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


