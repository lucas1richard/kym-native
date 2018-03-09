import React from 'react';
import { Picker, View, Text } from 'react-native';
import PropTypes from 'prop-types';

function PickerComponent({ input, children, label, ...rest }) {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <Picker
        selectedValue={input.value}
        onValueChange={input.onChange}
        {...rest}
      >
        {children}
      </Picker>
    </View>
  );
}

PickerComponent.propTypes = {
  input: PropTypes.object.isRequired,
  children: PropTypes.node,
  label: PropTypes.string
};

export default PickerComponent;
