import React, { Component } from 'react';
import './App.css';

import Tabs from './Components/Tabs';
import Table from './Components/Table';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Tabs />
          <Table />
        </div>
      </div>

    );
  }
}

export default App;
