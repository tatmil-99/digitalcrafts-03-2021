
import './App.css';
import React, { Component } from 'react';

export default class App extends Component {

  //create the constructor (props)
  //invoke super inside inside constructor, pass it props as argument
  //define this.state={}

  constructor(props) {
    super(props);
    //state management

    //initialize state
    this.state = {
      counter:0, 
      title: "State Management"
    };
    //this.setState
    //this is the built in function to manipulate any state var
    //only use this.setState to change state
  }

  

  render() {
    const {counter, title} = this.state
    
    return (
      <div>
        <h1>State Management</h1>
        <p>{title}</p>
        <p>Counter {counter}</p>
        <button onClick={() => this.setState({counter: counter + 1})}>Add</button>
        <button onClick={() => this.setState({counter: counter - 1})}>Subtract</button>
      </div>
    );
  }
}
