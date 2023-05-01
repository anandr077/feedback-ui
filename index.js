import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
import "./styleguide.css";
import App from "./App";
import { SnackbarProvider } from './components/SnackbarContext'; // Make sure you import SnackbarProvider from the correct file

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
