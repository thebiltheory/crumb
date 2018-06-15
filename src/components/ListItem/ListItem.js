import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { gist } = this.props;
    console.log(gist);
    return (
      <li id={gist.id}>
        <h4>{gist.description}</h4>
        <span>Created {gist.created_at}</span>
        <span>Updated {gist.updated_at}</span>
        <span>Comments {gist.comments}</span>
      </li>
    );
  }
}
