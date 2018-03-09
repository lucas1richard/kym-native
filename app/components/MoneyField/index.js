/**
* MoneyField
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { moneyMask } from 'utilities/masks';
import { normalizeMoney } from 'utilities/normalizers';
import Input from 'components/Input';

function MoneyField({ ...rest }) {
  return (
    <Field
      component={Input}
      {...rest}
      format={moneyMask}
      normalize={normalizeMoney}
      keyboardType="numeric"
      returnKeyType="done"
    />
  );
}

MoneyField.propTypes = {
  rest: PropTypes.object
};

export default MoneyField;
