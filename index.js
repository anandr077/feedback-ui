import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import './styleguide.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const client = new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     retry: (failureCount, error) => {
    //       console.log('retry error', error);
    //       return !(error.status === 401);  // Stop retries if status is 401
    //     },
    //     onError: (error) => {
    //       console.log('error', error);
    //       if (error.status === 401) {
    //         handleRedirect();
    //       }
    //     },
    //   },
    // },
  });

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App /> 
  </QueryClientProvider>,
  document.getElementById('app')
);
