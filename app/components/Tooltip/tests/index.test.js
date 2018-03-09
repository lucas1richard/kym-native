import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tooltip from '../';

describe('<Tooltip />', () => {
  const renderedComponent = (props = {}) => shallow(<Tooltip {...props} />);

  const props = {
    minWidth: '200px',
    right: '0px'
  };
  it('should render without blowing up', () => {
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
    props.fromBelow = true;
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
  });
});
