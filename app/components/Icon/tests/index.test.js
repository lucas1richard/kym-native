import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import React from 'react';

import Icon from '../index';

const renderedComponent = (props = {}) => mount(<Icon {...props} />);

describe('<Icon />', () => {
  it('should render an svg', () => {
    expect(renderedComponent({ name: 'leftArrow' }).find('svg').length).toEqual(1);
  });

  it('should accept a name prop', () => {
    expect(renderedComponent({ name: 'leftArrow' }).prop('name')).toEqual('leftArrow');
  });

  it('should call handleClick function once', () => {
    const handleClick = jest.fn();
    renderedComponent({ onClick: handleClick, name: 'leftARrow' }).find('svg').simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });

  it('mounts my component properly', () => {
    const props = {
      width: '25',
      name: 'leftArrow',
      onClick: jest.fn()
    };
    expect(mountToJson(renderedComponent(props))).toMatchSnapshot();
  });
});
