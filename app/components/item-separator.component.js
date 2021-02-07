import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#394a4d',
    borderBottomWidth: 0.5,
    height: 1,
  },
});

const ItemSeparator = () => {
  return <View style={styles.line} />;
};

export default ItemSeparator;
