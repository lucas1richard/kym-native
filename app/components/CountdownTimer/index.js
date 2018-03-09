/**
*
* CountdownTimer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { formatCountdown } from '../../utilities/countdownTimer';
import countdown from './countdown';

export class CountdownTimer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { days, hours, minutes, seconds } = this.props;
    const { display, show } = formatCountdown(days, hours, minutes, seconds);
    return (
      <Text>
        {show.days &&
          `${display.days} days `
        }
        {show.hours &&
          `${display.hours} hours `
        }
        {show.minutes &&
          `${display.minutes} minutes `
        }
        {show.seconds &&
          `${display.seconds} seconds`
        }
      </Text>
    );
  }
}

CountdownTimer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number
};

export default countdown(CountdownTimer);
