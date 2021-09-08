import React from 'react';
import { storiesOf } from '@storybook/react';
import contentEnvelope from '../../envelope';

import Layout from './layout';

const stories = storiesOf('Layout', module);
stories
  .add('default one', () => contentEnvelope(
    <Layout>
        <div>test</div>
    </Layout>
  ));
