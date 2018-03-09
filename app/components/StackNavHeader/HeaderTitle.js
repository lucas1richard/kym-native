/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Animated } from 'react-native';

const AnimatedText = Animated.Text;

const HeaderTitle = ({ style, ...rest }) => (
  <AnimatedText
    numberOfLines={1}
    {...rest}
    style={[styles.title, style]}
    accessibilityTraits="header"
  />
);

HeaderTitle.propTypes = {
  style: PropTypes.object
};

const styles = StyleSheet.create({
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 20,
    fontWeight: Platform.OS === 'ios' ? '600' : '500',
    color: 'rgba(0, 0, 0, .9)',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    marginHorizontal: 16
  }
});

export default HeaderTitle;