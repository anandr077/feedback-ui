// SnackbarContext.js
import React, { createContext, useState } from 'react';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ snackbarOpen, snackbarMessage, showSnackbar, closeSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
