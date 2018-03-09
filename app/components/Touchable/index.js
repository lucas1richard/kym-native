import Platform from 'Platform';
import TouchableNativeFeedback from 'TouchableNativeFeedback';
import TouchableOpacity from 'TouchableOpacity';

const Touchable = {
  android: TouchableNativeFeedback,
  ios: TouchableOpacity
};

export default Touchable[Platform.OS];
