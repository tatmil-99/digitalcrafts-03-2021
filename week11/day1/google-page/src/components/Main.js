import React, { Component } from 'react';
import Logo from '../Logo';
import Search from './Search';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Logo/>
        <Search/>
      </div>
    )
  }
}
