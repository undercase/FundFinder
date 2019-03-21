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
  search() {
    // Create inverted index dictionary
    let invertedIndexFunds = {};
    funds.forEach((fund, index) => {
        fund.tags.forEach(tag => {
          if (tag in invertedIndexFunds) {
            invertedIndexFunds[tag].add(index);
          } else {
            invertedIndexFunds[tag] = new Set([index]);
          }
        });
    });
    let filteredFunds = this.state.searchTags.size == 0 ? funds.slice() : Array.from(Array.from(this.state.searchTags).reduce((accumulator, tag) => {
      return tag in invertedIndexFunds ? new Set([...accumulator, ...invertedIndexFunds[tag]]) : accumulator;
    }, new Set([]))).map(fundIndex => funds[fundIndex]);
    let fundSearch = new Fuse(filteredFunds, fuseOptions);
    console.log(filteredFunds);
    return this.state.searchValue ? fundSearch.search(this.state.searchValue) : filteredFunds;
  }
  render() {
    const results = this.search().map((result) => {
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
