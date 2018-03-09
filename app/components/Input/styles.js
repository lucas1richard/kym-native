import { StyleSheet, Platform } from 'react-native';
import theme from 'theme/iftheme';

export const style = {
  wrapper: {
    marginBottom: 20,
    backgroundColor: '#fff',
    width: '100%'
  },
  errortrue: error(true),
  errorfalse: error(false),
  fieldLabel: fieldLabel(),
  fieldLabelerror: fieldLabel({ color: theme.red }),
  fieldLabelvalid: fieldLabel({ color: theme.green }),
  fieldLabelactive: fieldLabel({ color: theme.darkBlue }),
  textInputWrapper: textInputWrapper({ borderColor: '#A4AAB3' }),
  textInputWrappererror: textInputWrapper({ borderColor: theme.red }),
  textInputWrappervalid: textInputWrapper({ borderColor: theme.green }),
  textInputWrapperactive: textInputWrapper({ borderColor: theme.darkBlue }),
  inputStyle: inputStyle(),
  inputStyleerror: inputStyle({ color: theme.red }),
  inputStylevalid: inputStyle({ color: theme.green }),
  inputStyleactive: inputStyle({ color: theme.darkBlue })
};

export default StyleSheet.create(style);

function inputStyle(addStyle = {}) {
  return {
    width: '100%',
    color: theme.darkGray,
    backgroundColor: '#fff',
    position: 'relative',
    fontWeight: '300',
    height: 24,
    ...addStyle
  };
}

function textInputWrapper(addStyle = {}) {
  return {
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.darkGray,
    width: '100%',
    padding: 12,
    ...addStyle
  };
}

/** The input label */
function fieldLabel(addStyle = {}) {
  return ({
    color: theme.darkGray,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
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
