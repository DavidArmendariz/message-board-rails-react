import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import App from './App';
import QueryProvider from './providers/Query';

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
