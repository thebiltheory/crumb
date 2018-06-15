import React, { Component } from 'react';

export default class Avatar extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            style={{ borderRadius: '50px', border: '2px solid #fff' }}
            src={this.props.src}
            height={this.props.size}
            weight={this.props.size}
            alt={this.props.alt}
          />
        </div>
      </div>
    );
  }
}
