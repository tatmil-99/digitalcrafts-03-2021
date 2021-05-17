import React, { Component } from 'react'

export default class FirstName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: ""
    }
  }

  render() {
    return (
      <div>
        <h3>First Name:</h3>
        <form>
          <input>
          </input>
        </form>
      </div>
    )
  }
}
