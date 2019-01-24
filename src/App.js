import React, {
  Component
} from 'react';
import './App.scss';
import axios from 'axios';
import { shopDataURL } from './env/env';
import getData from './actions/getData';
import loaded from './actions/loaded';
import sortData from './actions/sortData'
import { store } from './index';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import ShoppingCart from './containers/ShoppingCartContainer';
import Product from './containers/ProductContainer'
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/404NotFound';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faChevronRight, faChevronLeft, faCaretDown, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faChevronRight, faChevronLeft, faCaretDown, faStar);

class App extends Component {
  componentWillMount() {
    axios.get(shopDataURL)
      .then(response => {
        store.dispatch(getData(response.data));
        store.dispatch(sortData(response.data));
      })
      .then(data => {
        store.dispatch(loaded(true));
      });
  }

  render() {
    return (
      <div className="app">
        {/* rubric68 - header always at the top */}
        <Header />
        <div id="bodyContent" className="mb-5">
          <Switch>
            <Route path={'/product'} component={Product} />
            <Route path={'/shopping/:category/:subcategory'} component={Shop} />
            <Route path={'/shopping/:category'} component={Shop} />
            {/* rubric70 - clicking shop all takes user to shopping page */}
            <Route exact path={'/shopping'} component={Shop} />
            {/* rubric56 - url #/cart will take you to the cart */}
            <Route exact path={'/shopping-cart'} component={ShoppingCart} />
            {/* rubric62 - The contact page is accessible at http://localhost:8080/#/contact */}
            <Route exact path={'/contact'} component={Contact} />
            {/* rubric64 - The about page is accessible at http://localhost:8080/#/about  */}
            <Route exact path={'/about'} component={About} />
            {/* rubric13 - The home page is accessible at http://localhost:8080/#  */}
            <Route exact path={''} component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;