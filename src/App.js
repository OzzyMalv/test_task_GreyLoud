import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch, hashHistory } from 'react-router-dom';
import './App.css';

// import Tabs from './Components/Tabs';
import User from './Components/User';
import Page from './Components/Page';

const RouterPath = (id) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Page} />
      <Route component={User} />
    </Switch>
  </BrowserRouter>);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Page />
      </div>

    );
  }
}

export default App;
