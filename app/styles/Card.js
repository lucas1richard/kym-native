import theme from 'theme/iftheme';

/**
 * Function which creates an object to be inserted into StyleSheet
 * @param {Object} specific Override or add styles
 * @param {string} colorSpec theme color
 */
const card = (specific = {}, colorSpec) => {
  let backgroundColor = theme.white;
  if (colorSpec) {
    backgroundColor = theme[colorSpec];
  }
  if (!backgroundColor) {
    backgroundColor = colorSpec;
  }
  return {
    backgroundColor,
    marginTop: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    ...specific
  };
};

export default card;
