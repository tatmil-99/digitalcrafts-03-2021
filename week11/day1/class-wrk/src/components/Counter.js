import React, { Component } from 'react'

export default class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
    count: 0
  }
}

  render() {
    return (
      <div>
        <h3>Counter:</h3>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Add</button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>Subtract</button>
      </div>
    )
  }
}
