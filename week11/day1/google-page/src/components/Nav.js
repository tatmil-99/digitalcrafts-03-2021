import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="nav-elements">
        <span className="outer-links">About</span>
        <span className="inner-link-left">Store</span>
        <span className="inner-link-right">Gmail</span>
        <span className="outer-links">Images</span>
      </div>
    )
  }
}
