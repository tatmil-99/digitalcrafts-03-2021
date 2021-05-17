import React, { Component } from 'react'

export default class Class extends Component {
  constructor(props) {
    super(props)
    //point of using constuctor in react is to initialize state
    this.state = {
      //state is a container that can hold data and let us have access to it
      count: 0
    }
  }
  //this refers to the entire class
  //this allows you to have access to things on this class
  //this is unique to a class in JS

  //setState allows you to access the state object
  render() {
    return (
      <div>
        <h1>Class.js</h1>
        <p>count: {this.state.count}</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Add</button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>Subtract</button>
      </div>
    )
  }
}




