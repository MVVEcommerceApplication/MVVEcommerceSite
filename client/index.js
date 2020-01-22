import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import App from './components/App.jsx';
import store from './store';
import './styles.css';


// Render Main Application
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
