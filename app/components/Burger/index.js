/**
*
* Burger
*
*/
import React from 'react';
import { StyleSheet, View } from 'react-native';

function Burger() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.line} />
      <View style={styles.middleLine} />
      <View style={styles.line} />
    </View>
  );
}

export default Burger;

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    justifyContent: 'center'
  },
  line: {
    width: 21,
    height: 1,
    background: '#bfbfbf'
  },
  middleLine: {
    width: 21,
    height: 1,
    marginVertical: 8,
    background: '#bfbfbf'
  }
});
