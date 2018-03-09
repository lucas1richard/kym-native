import { StyleSheet, Platform } from 'react-native';
import theme from 'theme/iftheme';
import StyleConverter from 'utilities/StyleConverter';

const style = {
  wrapper: {
    marginBottom: 40,
    backgroundColor: '#fff',
    width: '100%'
  },
  // wrapperAndroid: {
  //   marginBottom: 40
  // },
  error: {
    true: error(true),
    false: error(false)
  },
  fieldLabel: {
    error: fieldLabel({ color: theme.red }),
    valid: fieldLabel({ color: theme.green }),
    active: fieldLabel({ color: theme.darkBlue })
  },
  textInputWrapper: {
    error: textInputWrapper({ borderColor: theme.red }),
    valid: textInputWrapper({ borderColor: theme.green }),
    active: textInputWrapper({ borderColor: theme.darkBlue })
  },
  // textInputWrapperAndroid: {
  //
  // },
  inputStyle: {
    error: inputStyle({ color: theme.red }),
    valid: inputStyle({ color: theme.green }),
    active: inputStyle({ color: theme.darkBlue })
  }
};

const srcStyle = StyleConverter.flatten(style);
export const map = StyleConverter.map(style);
export default StyleSheet.create(srcStyle);


function inputStyle(addStyle = {}) {
  return {
    width: '100%',
    color: theme.darkGray,
    paddingVertical: 6,
    paddingHorizontal: 8,
    position: 'relative',
    fontWeight: '300',
    // height: 24,
    ...addStyle
  };
}

function textInputWrapper(addStyle = {}) {
  return {
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: theme.darkGray,
    width: '100%',
    ...addStyle
  };
}

/** The input label */
function fieldLabel(addStyle = {}) {
  return ({
    color: theme.darkGray,
    position: 'absolute',
    lineHeight: 22,
    letterSpacing: 0,
    top: Platform.OS === 'ios' ? -20 : -24,
    left: 0,
    fontWeight: '300',
    fontSize: 12,
    ...addStyle
  });
}

/**
 * Error text style
 * @param {boolean} err
 */
function error(err) {
  return {
    position: 'absolute',
    color: theme.red,
    fontSize: 12,
    top: 42,
    opacity: err ? 1 : 0
  };
}
