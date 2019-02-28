//https://github.com/rtragle/github-magic/commit/6a888a19cdbb48b07bb6d23f82d000758e413954
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchForm from './SearchForm';
import LookupTable from './LookupTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      driverRef: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(driverRef) {
    this.setState({ driverRef });
  }

  render() {
    const { driverRef } = this.state;
    return (
      <div className="App">
        <h1>Driver Search</h1>
        <SearchForm onSearch={this.handleSearch} />
        {driverRef && (
          <div>
            <h2>Details</h2>
            <LookupTable driverRef={driverRef} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
