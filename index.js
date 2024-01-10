import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import './styleguide.css';
import App from './App';
import { SnackbarProvider } from './components/SnackbarContext'; // Make sure you import SnackbarProvider from the correct file

ReactDOM.render(
  <SnackbarProvider>
      <App />
  </SnackbarProvider>,
  document.getElementById('app')
);
