import React from 'react';
import { storiesOf } from '@storybook/react';
import contentEnvelope from '../../envelope';

import List from './list';

const fakeData = [
  'subscription1', 'subscription2', 'subscription3', 'subscription4',
  'subscription1', 'subscription2', 'subscription3', 'subscription4',
  'subscription1', 'subscription2', 'subscription3', 'subscription4',
  'subscription1', 'subscription2', 'subscription3', 'subscription4',
  'subscription1', 'subscription2', 'subscription3', 'subscription4'
];

const stories = storiesOf('Grid', module);
stories
  .add('default one', () => contentEnvelope(
    <List data={fakeData} />
  ));
