import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
