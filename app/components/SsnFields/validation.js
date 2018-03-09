import { ssn } from 'utilities/validation';

const ssnValidation = (value) => {
  if (!value) {
    return 'Required';
  }
  return ssn(value);
};

export default ssnValidation;
