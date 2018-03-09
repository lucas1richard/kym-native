import React from 'React';
import PropTypes from 'prop-types';
import Touchable from 'components/Touchable';
import { View, Text } from 'react-native';

import { wrapperStyle, titleStyle } from './styled';

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    accessibilityLabel: PropTypes.string,
    textAlign: PropTypes.string,
    small: PropTypes.bool,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    testID: PropTypes.string,
    hasTVPreferredFocus: PropTypes.bool
  };

  render() {
    const { accessibilityLabel, color, onPress, title, hasTVPreferredFocus, disabled, testID, children, small, selected, textAlign } = this.props;
    const accessibilityTraits = ['button'];
    if (disabled) {
      accessibilityTraits.push('disabled');
    }
    let height;
    let size;
    if (small) {
      height = 40;
      size = 14;
    }
    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={accessibilityTraits}
        hasTVPreferredFocus={hasTVPreferredFocus}
        testID={testID}
        disabled={disabled}
        onPress={onPress}
      >
        <View style={wrapperStyle(color, height, selected)}>
          {children || (
            <Text style={titleStyle(color, size, selected, textAlign)}>
              {title}
            </Text>
          )}
        </View>
      </Touchable>
    );
  }
}

export default Button;
