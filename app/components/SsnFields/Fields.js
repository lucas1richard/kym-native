/**
* Fields
*/
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import theme from 'theme/iftheme';
import styles from './styles';

export class Fields extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      ssn1: '',
      ssn2: '',
      ssn3: ''
    };
  }

  change(value, key, max, nextComp) {
    Promise.resolve(this.setState({ [key]: value })).then(() => {
      this.props.input.onBlur();
      this.props.input.onChange(`${this.state.ssn1}${this.state.ssn2}${this.state.ssn3}`);
      if (value.length === max && nextComp) {
        nextComp.focus();
      }
    });
  }

  render() {
    const { meta } = this.props;
    const error = meta.touched && meta.error;
    const valid = meta.touched && !meta.error;
    let inputWrapper = !error ? styles.textInputWrapper : styles.textInputWrapperError;
    if (valid) {
      inputWrapper = [styles.textInputWrapper, { borderColor: theme.green }];
    }
    return (
      <View style={styles.wrapper}>
        <Text valid={valid}>Social Security Number</Text>
        <View style={styles.flexWrapper}>
          <View style={[inputWrapper, { width: '33%' }]}>
            <TextInput
              onChangeText={(value) => this.change(value, 'ssn1', 3, this.ssn2)}
              value={this.state.ssn1}
              maxLength={3}
              error={error}
              style={styles.input}
              keyboardType="numeric"
              placeholder="###"
              valid={valid}
              returnKeyType="done"
            />
          </View>
          <View style={[inputWrapper, { width: '25%' }]}>
            <TextInput
              onChangeText={(value) => this.change(value, 'ssn2', 2, this.ssn3)}
              value={this.state.ssn2}
              maxLength={2}
              ref={(comp) => { this.ssn2 = comp; }}
              error={error}
              style={styles.input}
              keyboardType="numeric"
              placeholder="##"
              valid={valid}
              returnKeyType="done"
            />
          </View>
          <View style={[inputWrapper, { width: '37%' }]}>
            <TextInput
              onChangeText={(value) => this.change(value, 'ssn3', 4)}
              value={this.state.ssn3}
              maxLength={4}
              ref={(comp) => { this.ssn3 = comp; }}
              error={error}
              style={styles.input}
              keyboardType="numeric"
              placeholder="####"
              valid={valid}
              returnKeyType="done"
            />
          </View>
        </View>
        {error && <Text show={error} style={{ color: 'red' }}>Not a valid SSN</Text>}
      </View>
    );
  }
}

Fields.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object
};

export default Fields;
