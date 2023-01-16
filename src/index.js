import * as ReactDOM from 'react-dom/client';

import React, { StrictMode } from 'react';

import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import Favicon from 'react-favicon';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <Favicon url="public/favicon.svg" />
    <App />
  </StrictMode>
);
