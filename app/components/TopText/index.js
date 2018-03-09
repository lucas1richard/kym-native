import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const TopText = ({ children }) => (
  <View style={styles.topText}>
    {children}
  </View>
);

TopText.propTypes = {
  children: PropTypes.node
};

export default TopText;

const styles = StyleSheet.create({
  topText: {
    paddingTop: 30,
    marginTop: -1,
    marginLeft: -1,
    marginRight: -1,
    backgroundColor: '#fff',
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'dashed'
  }
});
