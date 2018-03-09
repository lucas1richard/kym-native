/**
*
* RadioButtonGroup
*
*/
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';

class RadioButtonGroup extends React.PureComponent { // eslint-disable-line
  render() {
    const { input, options, meta, radioWidth, children, floatingLabelText, ...rest } = this.props;
    return (
      <View style={{ marginBottom: 40 }}>
        {floatingLabelText && <Text>{floatingLabelText}</Text>}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {options && options.map((option, index) =>
            (
              <Button
              key={index}
              meta={meta}
              onPress={() => input.onChange(option.value)}
              color={option.value === input.value ? 'green' : false}
              {...rest}
              width={radioWidth}
              title={option.label}
              inputValue={option.value}
            />
            )
          )}
          {children}
          <Text
            color="red"
            show={meta.touched && meta.error}
          >{meta.error}</Text>
        </View>
      </View>
    );
  }
}

RadioButtonGroup.propTypes = {
  rest: PropTypes.object,
  meta: PropTypes.object,
  options: PropTypes.array,
  input: PropTypes.object,
  radioWidth: PropTypes.string,
  children: PropTypes.node
};

export default RadioButtonGroup;
