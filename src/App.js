import React, {
  Component
} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';
import { shopDataURL } from './env/env';
import getData from './actions/getData';
import loaded from './actions/loaded';
import { store } from './index';
import Test from './containers/Test';

class App extends Component {
  componentWillMount() {
    axios.get(shopDataURL)
      .then(resp => {
        store.dispatch(getData(resp.data));
        store.dispatch(loaded(true));
      })
  }

  render() {
    return (
      <div className="app">
        Hello<br />
        <Test />
      </div>
    );
  }
}

export default App;