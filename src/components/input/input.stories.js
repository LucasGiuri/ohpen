import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import contentEnvelope from '../../envelope';

import Input, { TYPES } from './input';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);
stories
  .add('default one', () => contentEnvelope(
    <Input
      label={text('label', 'Username')}
      defaultValue={text('defaultValue', 'selector2')}
      type={select('type', TYPES, TYPES.dropdown)}
      options={['selector1', 'selector2']}
      onChange={action('onChange')}
    />
  ));
