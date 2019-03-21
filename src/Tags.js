import React, { Component } from 'react';

import Tag from './Tag.js';

import { tags as tagList } from './Data.js';

export default class Tags extends Component {
  render() {
    const tags = tagList.map(tag => <Tag key={tag.name} tagName={tag.name} selected={this.props.selectedTags.has(tag.name)} toggleTag={this.props.toggleTag}>{tag.title}</Tag>);
    return (
      <div className="tags">
        {tags}
      </div>
    );
  }
}
