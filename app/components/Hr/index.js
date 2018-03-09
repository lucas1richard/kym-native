import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Line across the view
 * @type {React.Component}
 */
const style = StyleSheet.create({
  hr: {
    borderWidth: 1,
    borderColor: 'gray'
  }
});

const Hr = () => (<View style={style.hr} />);

export default Hr;
