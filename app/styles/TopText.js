import { Platform } from 'react-native';

/**
 * Creates a dashed line beneath the contents
 * @param {Object} specs
 */
const topText = (specs = {}) => ({
  paddingVertical: 30,
  marginTop: -1,
  marginHorizontal: -1,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: 'gray',
  borderStyle: 'dashed',
  borderRadius: Platform.ios ? 0 : 1,
  ...specs
});

export default topText;
