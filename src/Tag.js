import React, { Component } from 'react';

export default class Tag extends Component {
  handleClick = (e) => {
    this.props.toggleTag(this.props.tagName);
  }
  render() {
    const selected = this.props.selected ? 'selected' : '';
    const classes = `tag ${selected}`;
    return (
      <div className={classes} onClick={this.handleClick}>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}
