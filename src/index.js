import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {
  Provider
} from 'react-redux'
import reducer from './reducers/reducer.js'
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

export const store = createStore(reducer);
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>,
  root
);