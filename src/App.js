import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import './App.css';

// import Tabs from './Components/Tabs';
import User from './Components/User';
import Table from './Components/Table';

const RouterPath = (id) => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Table} />
      <Route path={`/users + ${id}`} component={User} />
    </Switch>
  </BrowserRouter>);

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Tabs /> */}
        <Table />

      </div>

    );
  }
}

export default App;
