import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

addDecorator(withInfo({
  source: false,
  propTablesExclude: [ThemeProvider]
}));

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

