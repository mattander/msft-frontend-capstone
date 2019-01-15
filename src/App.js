import React, {
  Component
} from 'react';
import './App.scss';
import axios from 'axios';
import { shopDataURL } from './env/env';
import getData from './actions/getData';
import sortData from './actions/sortData';
import loaded from './actions/loaded';
import { store } from './index';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import ShoppingCart from './containers/ShoppingCartContainer';
import NotFound from './containers/404NotFound';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faChevronRight, faChevronLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faChevronRight, faChevronLeft, faCaretDown);

class App extends Component {
  componentWillMount() {
    axios.get(shopDataURL)
      .then(response => {
        store.dispatch(getData(response.data));
        store.dispatch(sortData(response.data));
      })
      .then(data => {
        store.dispatch(loaded(true));
      })
  }

  render() {
    return (
      <div className="app">
        {/* rubric68 - header always at the top */}
        <Header />
        <div id="bodyContent" className="container mt-3 mb-5">
          <Switch>
            <Route path={'/shop/:category/:subcategory'} component={Shop} />
            <Route path={'/shop/:category'} component={Shop} />
            {/* rubric70 - clicking shop all takes user to shopping page */}
            <Route exact path={'/shop'} component={Shop} />
            {/* rubric71 - clicking cart takes user to cart */}
            <Route exact path={'/shopping-cart'} component={ShoppingCart} />
            {/* rubric69 - clicking home takes user to home page */}
            <Route exact path={'/'} component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;