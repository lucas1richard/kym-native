import theme from 'theme/iftheme';

/**
 * The outer skin
 * @param {string} color
 * @param {{ vertical: number, horizontal: number }} [padding]
 */
export const wrapperStyle = (color, height = 65, selected) => {
  let backgroundColor = theme[color] || theme.white;
  let borderColor;
  if (color) {
    borderColor = theme[`darker${color.replace('dark', '')}`] || theme[color] || theme.mediumGray;
  } else {
    borderColor = theme.darkBlue;
  }
  if (typeof selected !== 'undefined') {
    backgroundColor = theme.white;
    if (selected) {
      borderColor = theme[color];
    } else {
      borderColor = '#A4AAB3';
    }
  }
  return ({
    backgroundColor,
    borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    height,
    paddingHorizontal: 8
  });
};

/**
 * The button text
 */
export const titleStyle = (color, size = 18, selected, textAlign = 'center') => {
  let displayColor = color ? theme.white : theme.darkBlue;
  if (typeof selected !== 'undefined') {
    if (selected) {
      displayColor = theme[color];
    } else {
      displayColor = '#A4AAB3';
    }
  }
  return ({
    fontSize: size,
    width: '100%',
    textAlign,
    color: displayColor
  });
};
