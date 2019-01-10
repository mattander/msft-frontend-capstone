import React, {
  Component
} from 'react';
import './App.css';
import axios from 'axios';
import { shopDataURL } from './env/env';
import getData from './actions/getData';
import loaded from './actions/loaded';
import { store } from './index';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import Category from './containers/Category';
import Footer from './components/Footer';

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
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Footer />
      </div>
    );
  }
}

export default App;