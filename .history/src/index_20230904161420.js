import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router } from "react-router-dom";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter >
 
  <Router basename='/loginauth' >
    <App />
  </Router>
  </
  </>
);

