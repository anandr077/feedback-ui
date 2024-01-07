import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import './styleguide.css';
import App from './App';
import { SnackbarProvider } from './components/SnackbarContext'; // Make sure you import SnackbarProvider from the correct file
import OnboardingProvider from './components2/Onboard/OnboardingProvider';

ReactDOM.render(
  <SnackbarProvider>
    <OnboardingProvider>
      <App />
    </OnboardingProvider>
  </SnackbarProvider>,
  document.getElementById('app')
);
