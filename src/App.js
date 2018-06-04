import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import User from './Components/User/User';
import Page from './Components/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Page} />
            <Route
              path="/user/:userName"
              component={props => <User data={props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
