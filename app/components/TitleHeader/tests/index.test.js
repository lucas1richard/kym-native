import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TitleHeader from '../';

describe('<TitleHeader />', () => {
  const renderedComponent = (props = {}) => shallow(<TitleHeader {...props} />);

  const props = {
    title: 'Title',
    description: 'Description'
  };
  it('should render without blowing up', () => {
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
  });
});
