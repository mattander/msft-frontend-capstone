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
import getData from './actions/getData'
import { store } from './index'

class App extends Component {
  componentWillMount() {
    axios.get(shopDataURL)
      .then(resp => {
        store.dispatch(getData(resp.data));
        console.log('dispatched');
      })
  }

  render() {
    return (
      <div className="app">
        Hello
      </div>
    );
  }
}

export default App;