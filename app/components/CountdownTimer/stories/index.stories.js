import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import CountdownTimer from '../';

const Padding = styled.div`
  padding: 2rem;
`;

storiesOf('CountdownTimer', module)
  .add('default', () => (
    <Padding>
      <CountdownTimer startTime={moment().format()} endTime="2018-06-24T23:34:31-04:00" />
    </Padding>
  ));
