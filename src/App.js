import React, { Component } from 'react';
import Fuse from 'fuse.js';

import './App.css';

import SearchBar from './SearchBar.js';
import funds from './Data.js';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMachCharLength: 1,
  keys: [
    'name'
  ]
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }
  handleSearchChange = (searchValue) => {
    this.setState({ searchValue });
  }
  render() {
    let fundSearch = new Fuse(funds, fuseOptions);
    const searchResults = fundSearch.search(this.state.searchValue);
    const results = searchResults.map((result) => {
      return (
        <h1 key={result.name}>{result.name}</h1>
      );
    });
    return (
      <div className="App">
        <SearchBar handleSearchChange={this.handleSearchChange} />
        {results}
      </div>
    );
  }
}
