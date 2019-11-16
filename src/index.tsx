import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    body {
      color: #ebedec;
      background: #3d3d3b;
    }
  
    a:link {
      color: #b2c8f5;
    }
  
    a:visited {
      color: #7f81d8;
    }
  
    .Profile__Icon i {
      color: #ebedec;
    }
  }
`;

ReactDom.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('content') as HTMLElement,
);
