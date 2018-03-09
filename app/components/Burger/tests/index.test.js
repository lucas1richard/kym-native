import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Burger, { Wrapper } from '../';

describe('<Burger', () => {
  const renderedComponent = (props = {}) => shallow(<Burger {...props} />);

  it('should render without blowing up', () => {
    expect(toJson(renderedComponent())).toMatchSnapshot();
  });

  describe('Wrapper', () => {
    it('shoudl render without blowing up', () => {
      const component = shallow(<Wrapper />);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
