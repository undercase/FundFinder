import React, { Component } from 'react';
import Fuse from 'fuse.js';

import './App.css';

import funds from './Data.js';

import SearchBar from './SearchBar.js';
import Fund from './Fund.js';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMachCharLength: 1,
  keys: [
    'name',
    'description'
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
    const searchResults = this.state.searchValue ? fundSearch.search(this.state.searchValue) : funds;
    const results = searchResults.map((result) => {
      return (
        <Fund key={result.name} data={result} />
      );
    });
    return (
      <div className="App">
        <SearchBar handleSearchChange={this.handleSearchChange} />
        <div className="funds">
          {results}
        </div>
      </div>
    );
  }
}
