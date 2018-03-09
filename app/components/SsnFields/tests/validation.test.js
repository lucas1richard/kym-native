import { ssn } from 'utilities/validation';
import validate from '../validation';

describe('ssn validation', () => {
  it('should return Required if field is empty', () => {
    expect(validate('')).toEqual('Required');
    expect(validate()).toEqual('Required');
  });
  it('should run ssn validation on non-empty inputs', () => {
    expect(validate('513')).toEqual(ssn('513'));
    expect(validate('518641738')).toEqual(ssn('518641738'));
  });
});
