import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CountdownTimer } from '../';

describe('<CountdownTimer', () => {
  const renderedComponent = (props = {}) => shallow(<CountdownTimer {...props} />);

  it('should render without blowing up', () => {
    const props = {
      days: 3,
      hours: 14,
      minutes: 40,
      seconds: 40
    };
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
  });

  it('should show minutes and seconds', () => {
    const props = {
      days: 0,
      hours: 0,
      minutes: 40,
      seconds: 40
    };
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
  });
});
