import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import App from './components/App.jsx';

render(
  <App />,
  
  document.getElementById('root'),
);
