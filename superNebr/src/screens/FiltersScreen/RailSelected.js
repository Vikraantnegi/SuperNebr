/* eslint-disable prettier/prettier */
import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';

const RailSelected = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 3,
    backgroundColor: '#FF962C',
    borderRadius: 2,
  },
});
