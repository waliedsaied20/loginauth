import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from "react-router-dom";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <
  <Router basename='/loginauth' >
    <App />
  </Router>
  </>
);

