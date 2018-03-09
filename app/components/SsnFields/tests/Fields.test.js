import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SsnFields, { FirstInput, SecondInput, ThirdInput } from '../Fields';

describe('<Fields />', () => {
  const renderedComponent = (props = {}) => shallow(<SsnFields {...props} />);

  const props = {
    meta: {
      touched: false,
      error: 'Error'
    },
    input: {
      onBlur: jest.fn(),
      onChange: jest.fn()
    }
  };
  it('should render without blowing up', () => {
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
    props.meta.touched = true;
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
  });

  it('should handle the change class function', () => {
    const component = mount(<SsnFields {...props} />);
    const firstInput = component.find(FirstInput);
    const secondInput = component.find(SecondInput);
    const thirdInput = component.find(ThirdInput);

    firstInput.simulate('change', { target: { value: '11' } });
    expect(component.state('ssn1')).toEqual('11');

    secondInput.simulate('change', { target: { value: '12' } });
    expect(component.state('ssn2')).toEqual('12');

    thirdInput.simulate('change', { target: { value: '123' } });
    expect(component.state('ssn3')).toEqual('123');
  });
});
