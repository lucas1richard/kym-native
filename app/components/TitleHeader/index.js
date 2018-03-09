/**
* TitleHeader
*/
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function TitleHeader({ title, description }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

TitleHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default TitleHeader;
