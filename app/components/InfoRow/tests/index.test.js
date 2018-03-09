import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import InfoRow, { Wrapper, Value, Label } from '../InfoRow';

describe('<InfoRow />', () => {
  const renderedComponent = (props = {}) => shallow(<InfoRow {...props} />);

  const props = {
    label: 'Test Label',
    value: 'test',
    valueColor: 'blue',
    indented: false,
    noBorder: false,
    last: false,
    labelValue: 'test',
    valueClick: jest.fn()
  };
  it('should render without blowing up', () => {
    expect(toJson(renderedComponent(props))).toMatchSnapshot();
  });

  describe('<Wrapper />', () => {
    it('should render without blowing up', () => {
      expect(toJson(shallow(<Wrapper noBorder />))).toMatchSnapshot();
      expect(toJson(shallow(<Wrapper />))).toMatchSnapshot();
      expect(toJson(shallow(<Wrapper indented />))).toMatchSnapshot();
      expect(toJson(shallow(<Wrapper center />))).toMatchSnapshot();
    });
  });

  describe('<Value />', () => {
    it('should render without blowing up', () => {
      expect(toJson(shallow(<Value valueColor="blue" onClick={() => jest.fn()} />))).toMatchSnapshot();
    });
  });

  describe('<Label />', () => {
    it('should render without blowing up', () => {
      expect(toJson(shallow(<Label />))).toMatchSnapshot();
    });
  });
});
