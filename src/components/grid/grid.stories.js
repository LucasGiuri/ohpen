import React from 'react';
import { storiesOf } from '@storybook/react';
import contentEnvelope from '../../envelope';
import { mockData } from '../../constants';

import Grid from './grid';

const stories = storiesOf('Grid', module);
stories
  .add('default one', () => contentEnvelope(
    <Grid data={mockData} />
  ));
