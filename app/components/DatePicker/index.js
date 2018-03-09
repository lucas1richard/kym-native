import React from 'react';
import Platform from 'Platform';
import { View, DatePickerIOS, DatePickerAndroid } from 'react-native';
import PropTypes from 'prop-types';

export default function DatePicker({ style = {}, ...rest }) {
  return (
    <View style={style}>
      {
        Platform.OS === 'ios'
          ? <DatePickerIOS {...rest} />
          : <DatePickerAndroid {...rest} />
      }
    </View>
  );
}

DatePicker.propTypes = {
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};
