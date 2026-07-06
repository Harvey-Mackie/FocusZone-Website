import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Privacy from './Privacy';
import Terms from './Terms';
import Waitlist from './Waitlist';
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
        <Route path='/terms' element={<Terms />} />
        <Route path='/waitlist' element={<Waitlist />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
