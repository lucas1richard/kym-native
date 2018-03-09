/**
 * HOC to pass default font to react-native Text component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import theme from 'theme/iftheme';


const FontText = ({ children, bold, style, color, fontSize, centered, small }) => (
  <Text
    style={[
      {
        color: theme[color],
        fontSize: fontSize || (small ? 14 : 18),
        textAlign: centered ? 'center' : 'left',
        fontWeight: bold ? 'bold' : 'normal'
      },
      style
    ]}
  >{children}</Text>
);

FontText.propTypes = {
  children: PropTypes.node,
  bold: PropTypes.bool,
  small: PropTypes.bool,
  centered: PropTypes.bool,
  fontSize: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  color: PropTypes.string
};

FontText.defaultProps = {
  color: 'blue'
};

export default FontText;
