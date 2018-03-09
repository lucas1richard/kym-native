import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from 'components/Touchable';
import { Entypo } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import text from 'styles/Text';
import styles from './styles';

class Dropdown extends React.PureComponent { // eslint-disable-line
  constructor() {
    super();
    this.state = {
      dropVisible: false
    };
  }

  onToggleDropDown = () => {
    this.setState((state) => ({ dropVisible: !state.dropVisible }), () => {
      if (!this.state.dropVisible) {
        this.props.input.onBlur();
      }
    });
  }

  displayValue = (err, valid) => {
    let color = 'mediumGray';
    if (err) color = 'red';
    if (valid) color = 'green';
    return <Text style={text({ padding: 12, backgroundColor: 'rgba(0,0,0,0)', height: 48 }, color)}>{this.props.input.value || this.props.placeholder}</Text>;
  }

  render() {
    const { input, options, label, mask, meta } = this.props;
    const readyToShow = !this.state.dropVisible && (meta.touched || (input.value !== '' && meta.pristine));
    // const hideError = meta.error === 'Invalid date' || meta.error === 'Must be 18 or older' || specialError;
    const err = readyToShow && meta.invalid;
    const valid = readyToShow && meta.valid;
    let status = err ? 'error' : ( this.state.dropVisible ? 'active' : ''); // eslint-disable-line
    if (valid) {
      status = 'valid';
    }
    const fieldLabelKey = `fieldLabel${status}`;
    const errorKey = `error${status === 'error'}`;
    const inputStyleKey = `inputStyle${status}`;
    const textInputWrapperKey = `textInputWrapper${status}`;
    return (
      <View style={{ marginBottom: 20 }}>
        {label && <Text style={styles[fieldLabelKey]}>{label}</Text>}
        <View style={[styles[textInputWrapperKey], this.state.dropVisible ? { paddingBottom: 0 } : {}]}>
          <Touchable onPress={this.onToggleDropDown}>
            {this.displayValue(err, valid)}
          </Touchable>
          {this.state.dropVisible && options && (
            options.map((option, ix) => (
              <Touchable key={option.value} onPress={() => input.onChange(option.value)}>
                <View style={ix === 0 ? [styles.optionWrapperFirst] : [styles.optionWrapper]}>
                  <Text style={styles.optionLabel}>{option.label}</Text>
                  {option.value === input.value && <Entypo name="check" size={18} color={theme.green} />}
                </View>
              </Touchable>
            ))
          )}
          {err && <Text style={styles[errorKey]}>
            {Array.isArray(meta.error) ? meta.error[0] : meta.error}
          </Text>}
        </View>
      </View>
    );
  }
}

Dropdown.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.array,
  mask: PropTypes.func
};

export default Dropdown;
