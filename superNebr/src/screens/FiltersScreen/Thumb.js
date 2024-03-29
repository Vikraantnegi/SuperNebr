/* eslint-disable prettier/prettier */
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const THUMB_RADIUS = 12;

const Thumb = () => {
  return (
    <View style={styles.root}/>
  );
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 1.5,
    height: THUMB_RADIUS * 1.5,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: '#FF962C',
    backgroundColor: '#ffffff',
  },
});

export default memo(Thumb);
