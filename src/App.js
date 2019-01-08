import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-4">
            Hello
            </div>
        </div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>{" "}
              </li>
            </ul>
            <hr />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
