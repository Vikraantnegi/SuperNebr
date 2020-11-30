/* eslint-disable prettier/prettier */
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseColors from '../../constants/BaseColors';

const Notch = props => {
  return (
    <View style={styles.root} {...props}/>
  );
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: 4,
    height: 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: BaseColors.heading,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});
