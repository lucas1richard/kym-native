import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from '../index';

describe('<Logo />', () => {
  const renderedComponent = (props = {}) => shallow(<Logo {...props} />);

  it('should render without blowing up', () => {
    expect(toJson(renderedComponent())).toMatchSnapshot();

    const props = {
      white: true
    };
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
  });
});
