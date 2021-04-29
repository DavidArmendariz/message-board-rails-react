import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ActionCableProvider from './contexts/ActionCableContext';

ReactDOM.render(
  <React.StrictMode>
    <ActionCableProvider>
      <App />
    </ActionCableProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
