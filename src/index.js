import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Privacy from './Privacy';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/FocusZone-Website' element={<App />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
