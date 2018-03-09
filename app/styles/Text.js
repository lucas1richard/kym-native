import theme from 'theme/iftheme';

/**
 * Function which creates an object to be inserted into StyleSheet
 * @param {Object} specific Override or add styles
 * @param {string} colorSpec theme color
 */
const text = (specific = {}, colorSpec) => {
  let color = theme.blue;
  if (colorSpec) {
    color = theme[colorSpec];
  }
  if (!color) {
    color = colorSpec;
  }
  return {
    color,
    fontSize: 18,
    ...specific
  };
};

export default text;
