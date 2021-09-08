import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import contentEnvelope from '../../envelope';

import Button from './button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories
  .add('default one', () => contentEnvelope(
    <Button
      text={text('title', 'Log in')}
      onClick={action('onClick')}
    />
  ));
