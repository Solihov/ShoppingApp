import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GridThemeProvider } from 'styled-bootstrap-grid';

const gridTheme = {
  breakpoints: { // defaults below
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 10,
  },
  col: {
    padding: 5,
  },
  container: {
    padding: 10,
    maxWidth: { // defaults below
      xxl: 1500,
      xl: 1440,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 290,
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GridThemeProvider gridTheme={gridTheme}>
      <App />
    </GridThemeProvider>
  </BrowserRouter>
)
