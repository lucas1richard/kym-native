import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import countdown from '../countdown';

const TestComponent = (props) => <div {...props} />;
jest.dontMock('moment');
const WrappedComponent = countdown(TestComponent);
const renderedComponent = (props = {}) => shallow(<WrappedComponent {...props} />);
let props;
let component;
describe('countdown hoc', () => {
  beforeEach(() => {
    props = {
      startTime: moment().format(),
      endTime: moment().add(2, 'days').format()
    };

    component = renderedComponent(props);
  });

  it('should take a startTime and endTime prop', () => {
    expect(component.props().startTime).toEqual(props.startTime);
    expect(component.props().endTime).toEqual(props.endTime);
  });

  it('should call startTimer during ComponentDidMount', () => {
    component = renderedComponent(props).instance();
    component.startTimer = jest.fn();
    component.componentDidMount();
    expect(typeof component.startTimer.mock.calls[0][0]).toBe('number');
    expect(component.startTimer.mock.calls.length).toEqual(1);
  });

  it('should call clearInterval during componentWillUnmount', () => {
    jest.useFakeTimers();
    component = renderedComponent(props).instance();
    component.componentWillUnmount();
    expect(clearInterval.mock.calls.length).toEqual(1);
    jest.clearAllTimers();
  });
});
describe('startTimer', () => {
  props = {
    startTime: moment().format(),
    endTime: moment().add(2, 'days').format()
  };
  beforeAll(() => {
    jest.useFakeTimers();
    component = renderedComponent(props).instance();
    component.state.timeLeft = 2000;
    component.updateTimeLeft = jest.fn();
  });

  it('should call updateTimeLeft before starting the countdown', () => {
    component.startTimer(component.state.timeLeft);
    expect(component.updateTimeLeft.mock.calls.length).toEqual(1);
  });

  it('should set this.interval ', () => {
    expect(component.interval !== null).toBe(true);
  });

  it('should call updateTimeleft every 1000ms', () => {
    jest.runTimersToTime(1000);
    expect(component.updateTimeLeft.mock.calls.length).toEqual(2);
  });

  it('should subtract 1000 from the current time', () => {
    expect(component.updateTimeLeft.mock.calls[1][0]).toEqual(1000);
  });
  jest.clearAllTimers();
});

describe('updateTimeLeft', () => {
  beforeEach(() => {
    props = {
      startTime: moment().format(),
      endTime: moment().add(2, 'days').format()
    };
    component = renderedComponent(props).instance();

    component.state.timeLeft = 2000;
  });

  it('should set the state to the new time', () => {
    component.setState = jest.fn();
    component.updateTimeLeft(1000);
    expect(component.setState.mock.calls.length).toEqual(1);
  });

  it('should remove this.interval if it is less that a second left ', () => {
    jest.useFakeTimers();
    component.startTimer(component.state.timeLeft);
    expect(clearInterval.mock.calls.length).toEqual(0);
    jest.runOnlyPendingTimers();
    component.updateTimeLeft(0);
    expect(clearInterval.mock.calls.length).toEqual(1);
    jest.clearAllTimers();
  });
});
