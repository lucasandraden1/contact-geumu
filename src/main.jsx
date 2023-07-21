import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles.js';
/* import Hotjar from '@hotjar/browser';

const siteId = 3583411;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
)
