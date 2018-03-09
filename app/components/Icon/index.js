/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import { View } from 'react-native';
import iftheme from 'theme/iftheme';
import SvgIcon from './SvgIcon';

import icons from './icons';

const Icon = ({ name, fill, style, ...props }) => {
  const thmFill = iftheme[fill] || iftheme.green;
  // return (<View />);
  return (<SvgIcon {...props} name={name} fill={thmFill} {...props} svgs={icons} />);
};

export default Icon;

Icon.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.string.isRequired,
  props: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  fill: iftheme.green,
  viewBox: '0 0 50 50'
};
