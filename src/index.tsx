import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

enum FormContentTypes {
  nationalID = 'nationalID',
  passport = 'passport',
  taxID = 'taxID',
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App selectedType={FormContentTypes.passport} id={1} />
  </React.StrictMode>,
);
