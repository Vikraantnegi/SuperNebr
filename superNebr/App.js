/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { Root } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <Root style={styles.container}>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle="dark-content" />
        ) : null}
        <SafeAreaView />
        <AppNavigator />
        <SafeAreaView />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


