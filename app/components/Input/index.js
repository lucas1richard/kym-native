import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import theme from 'theme/iftheme';
import styles from './styles';

class Input extends React.Component {
  static propTypes = {
    noMargin: PropTypes.bool,
    style: PropTypes.object,
    input: PropTypes.object,
    innerRef: PropTypes.func,
    meta: PropTypes.object,
    validateAtLength: PropTypes.bool,
    specialError: PropTypes.string
  };

  render() {
    const { noMargin, style, input, innerRef, meta = {}, validateAtLength, specialError, ...field } = this.props;
    const readyToShow = validateAtLength ? input.value.length === validateAtLength : meta.touched || (input.value !== '' && meta.pristine);
    // const hideError = meta.error === 'Invalid date' || meta.error === 'Must be 18 or older' || specialError;
    const err = readyToShow && meta.invalid;
    const valid = readyToShow && meta.valid;
    let status = err ? 'error' : ( meta.active ? 'active' : ''); // eslint-disable-line
    if (valid) {
      status = 'valid';
    }
    const fieldLabelKey = `fieldLabel${status}`;
    const errorKey = `error${status === 'error'}`;
    const inputStyleKey = `inputStyle${status}`;
    const textInputWrapperKey = `textInputWrapper${status}`;

    return (
      <View>
        <Text style={styles[fieldLabelKey]}>
          {field.label}
        </Text>
        <View noMargin={noMargin} style={styles.wrapper}>
          <View style={styles[textInputWrapperKey]}>
            <TextInput
              ref={innerRef}
              underlineColorAndroid="transparent"
              onChangeText={input.onChange}
              style={styles[inputStyleKey]}
              placeholder={field.label}
              placeholderTextColor={theme.mediumGray}
              {...input}
              {...field}
              returnKeyType={field.returnKeyType || 'next'}
            />
          </View>
        </View>
        <Text style={styles[errorKey]}>
          {Array.isArray(meta.error) ? meta.error[0] : meta.error}
        </Text>
      </View>
    );
  }
}


export default Input;
