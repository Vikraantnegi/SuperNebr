/* eslint-disable prettier/prettier */
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const Rail = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#DFE0E5',
  },
});
