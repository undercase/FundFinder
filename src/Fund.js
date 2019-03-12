import React, {Component} from 'react';

export default class Fund extends Component {
  render() {
    return (
      <div className="fund">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
