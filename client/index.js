import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import App from './App.jsx';
import './styles.css';


// Render Main Application
render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
