import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 40,
    backgroundColor: '#fff',
    width: '100%'
  },
  flexWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    backgroundColor: '#fff',
    position: 'relative',
    fontWeight: '300',
    height: 24
    // borderColor: theme.darkGray,
    // borderWidth: 1,
    // padding: 8,
    // borderRadius: 4
  },
  textInputWrapper: {
    borderRadius: 4,
    padding: 8,
    borderColor: theme.darkGray,
    borderWidth: 1
  },
  textInputWrapperError: {
    borderRadius: 4,
    padding: 8,
    borderColor: 'red',
    borderWidth: 1
  }
});

export default styles;
