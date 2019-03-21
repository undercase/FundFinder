import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    this.props.handleSearchChange(event.target.value);
  }
  render() {
    let placeholder = 'Search for a Fund...';
    return (
      <input className='searchBar' type="text" placeholder={placeholder} value={this.state.value} onChange={this.handleChange} />
    );
  }
}
