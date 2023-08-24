// SnackbarContext.js
import React, { createContext, useState } from 'react';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarLink, setSnackbarLink] = useState(null);

  const showSnackbar = (message, link) => {
    setSnackbarMessage(message);
    setSnackbarLink(link);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
    setSnackbarLink(null);
  };

  return (
    <SnackbarContext.Provider
      value={{
        snackbarOpen,
        snackbarMessage,
        snackbarLink,
        showSnackbar,
        closeSnackbar,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
