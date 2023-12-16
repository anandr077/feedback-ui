import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import './styleguide.css';
import App from './App';
import { SnackbarProvider } from './components/SnackbarContext'; // Make sure you import SnackbarProvider from the correct file
import StateYearProvider from './components2/MenubarStateYear/StateYearProvider';

ReactDOM.render(
  <StateYearProvider>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </StateYearProvider>,
  document.getElementById('app')
);
