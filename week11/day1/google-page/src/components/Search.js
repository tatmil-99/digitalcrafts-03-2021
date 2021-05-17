import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input className="search-input"></input><br/>
            <div className="buttons">
              <button className="left-btn">Google Search</button>
              <button className="right-btn">I'm Feeling Lucky</button>
            </div>
        </form>
      </div>
    )
  }
}
