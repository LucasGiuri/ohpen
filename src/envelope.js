import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  optionsKnob
} from '@storybook/addon-knobs';

const modes = {
  light: 'light',
  dark: 'dark'
};

const Page = styled.div`
  background-color: ${(props) => (props.theme.mode === modes.light ? '#F0FFFF' : '#333333')};
  border: 1px solid #eee;
  fontFamily: 'Source Sans Pro';
  padding: 24px;
  width: ${(props) => props.width};
  height: 100%;
`;

export default (content, width = '90%') => (
  <ThemeProvider theme={{ mode: optionsKnob('Theme', modes, modes.light, { display: 'inline-radio' }) }}>
    <Page width={width}>
      {content}
    </Page>
  </ThemeProvider>
);
