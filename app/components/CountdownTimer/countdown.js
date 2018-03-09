import moment from 'moment';
import React from 'react';

import PropTypes from 'prop-types';

function countdown(Component) {
  class WrappedComponent extends React.PureComponent { //eslint-disable-line
    constructor() {
      super();
      this.state = {
        timeLeft: null
      };
      this.updateTimeLeft = this.updateTimeLeft.bind(this);
      this.startTimer = this.startTimer.bind(this);
    }


    componentDidMount() {
      const { startTime, endTime } = this.props;
      const end = moment(endTime).format('x');
      const start = moment(startTime).format('x');
      const diff = end - start;
      this.startTimer(diff);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
    startTimer(startTime) {
      this.updateTimeLeft(startTime);
      this.interval = setInterval(() => {
        this.updateTimeLeft(this.state.timeLeft - 1000);
      }, 1000);
    }
    updateTimeLeft(newTime) {
      if (newTime < 1000) {
        clearInterval(this.interval);
      }
      this.setState({
        timeLeft: newTime
      });
    }
    render() {
      const days = Math.floor(moment.duration(this.state.timeLeft).asDays());
      const hours = moment.duration(this.state.timeLeft).hours();
      const minutes = moment.duration(this.state.timeLeft).minutes();
      const seconds = moment.duration(this.state.timeLeft).seconds();
      return (<Component
        {...this.props}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />);
    }
  }

  WrappedComponent.propTypes = {
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired
  };

  return WrappedComponent;
}

export default countdown;
