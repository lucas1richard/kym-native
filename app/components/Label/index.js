import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const Label = ({ children, style }) => (
  <Text style={[styles.text, style]}>
    {children}
  </Text>
);

Label.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default Label;

const styles = StyleSheet.create({
  text: {
    fontWeight: '300',
    fontSize: 12,
    color: theme.copyGray
  }
});
