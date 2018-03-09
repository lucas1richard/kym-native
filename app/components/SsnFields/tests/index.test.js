import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SsnFields from '../';

describe('<SsnFields', () => {
  const renderedComponent = (props = {}) => shallow(<SsnFields {...props} />);

  it('should render without blowing up', () => {
    expect(toJson(renderedComponent())).toMatchSnapshot();
  });
});
