import React, {Component} from 'react';

export default class Fund extends Component {
  render() {
    return (
      <div className="fund">
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}
