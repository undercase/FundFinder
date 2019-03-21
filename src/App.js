import React, { Component } from 'react';
import Fuse from 'fuse.js';

import './App.css';

import { funds } from './Data.js';

import SearchBar from './SearchBar.js';
import Fund from './Fund.js';
import Tags from './Tags.js';

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
      searchValue: '',
      searchTags: new Set([])
    };
  }
  handleSearchChange = (searchValue) => {
    this.setState({ searchValue });
  }
  toggleSearchTag = (tag) => {
    this.setState(previousState => {
      let searchTags = new Set(previousState.searchTags);
      if (previousState.searchTags.has(tag)) {
        searchTags.delete(tag);
      } else {
        searchTags.add(tag);
      }
      return { searchTags };
    });
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
        <Tags selectedTags={this.state.searchTags} toggleTag={this.toggleSearchTag} />
        <div className="funds">
          {results}
        </div>
      </div>
    );
  }
}
