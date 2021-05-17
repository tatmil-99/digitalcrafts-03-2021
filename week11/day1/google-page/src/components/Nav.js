import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="nav-elements">
        <span>About</span>
        <span>Store</span>
        <span>Gmail</span>
        <span>Images</span>
      </div>
    )
  }
}
