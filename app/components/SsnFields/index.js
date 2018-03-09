/**
* SsnFields
*/
import React from 'react';
import { Field } from 'redux-form/immutable';

import Fields from './Fields';
import validateSsn from './validation';

export class SsnFields extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Field
        name="ssn"
        component={Fields}
        validate={validateSsn}
      />
    );
  }
}

export default SsnFields;
