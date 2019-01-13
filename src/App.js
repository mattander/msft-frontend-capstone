import React, {
  Component
} from 'react';
import './App.scss';
import axios from 'axios';
import { shopDataURL } from './env/env';
import getData from './actions/getData';
import loaded from './actions/loaded';
import { store } from './index';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import ShoppingCart from './containers/ShoppingCart';
import NotFound from './containers/404NotFound';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faChevronRight, faChevronLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faChevronRight, faChevronLeft, faCaretDown);

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
        {/* rubric68 - header always at the top */}
        <Header />
        <div className="container">
          <Switch>
            {/* rubric69 - clicking home takes user to home page */}
            <Route exact path="/" component={Home} />
            {/* rubric70 - clicking shop all takes user to shopping page */}
            <Route exact path="/Shop" component={Shop} />
            {/* rubric71 - clicking cart takes user to cart */}
            <Route exact path="/shopping-cart" component={ShoppingCart} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;