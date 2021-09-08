import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import contentEnvelope from '../../envelope';

import Card from './card';

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);
stories
  .add('default one', () => contentEnvelope(
    <Card
      title={text('title', 'Subscription1')}
      checked={boolean('checked', true)}
      onCheck={action('onClick')}
      content={text('content', 'content content contentcontentcontent content content content content')}
    />
  ));
