import React from 'react';
import theme from 'theme/iftheme';
import { ActivityIndicator, View, Text } from 'react-native';
import PropTypes from 'prop-types';

function Indicator({ size = 'large', label, ...rest }) {
  if (label) {
    return (
      <View>
        <ActivityIndicator
          color={theme.blue}
          size={size}
          {...rest}
        />
        <Text style={{ textAlign: 'center' }}>{label}</Text>
      </View>
    );
  }

  return (
    <ActivityIndicator
      color={theme.blue}
      size={size}
      {...rest}
    />
  );
}

Indicator.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string
};

export default Indicator;
