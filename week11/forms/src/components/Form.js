import React, { Component } from 'react'
import "../App.css"

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    streetAddress: "", 
    postalCode: "",
    city: "", 
    state: "", 
    county: "", 
    phone: "",
  }

  handleInputFormValues = (event) => {
    // console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1 className="shipping-form-header">Forms React</h1>
        <div className="shipping-form-container">
          <form className="shipping-form">
            <input name="firstName" className="input-text" type="text" placeholder="First name" value={this.state.firstName} onChange={this.handleInputFormValues}
            ></input>

            <input name="lastName" className="input-text" type="text" placeholder="Last name" value={this.state.lastName} onChange={this.handleInputFormValues}></input>

            <input name="streetAddresss" className="input-text-street" type="text" placeholder="Street Address" value={this.state.streetAddress} onChange={this.handleInputFormValues}></input>

            <input name="apartment" className="input-text-apt" type="text" placeholder="Apt, suite" value={this.state.apartment} onChange={this.handleInputFormValues}></input>

            <input name="postalCode" className="input-text" type="text" placeholder="Postal Code" value={this.state.postalCode} onChange={this.handleInputFormValues}></input>

            <input name="city" className="input-text" type="text" placeholder="City" value={this.state.city} onChange={this.handleInputFormValues}></input>

            <input name="state" className="input-text" type="text" placeholder="State" value={this.state.state} onChange={this.handleInputFormValues}></input>

            <input name="county" className="input-text" type="text" placeholder="County" value={this.state.county} onChange={this.handleInputFormValues}></input>

            <input name="phone" className="input-text" type="text" placeholder="Phone" value={this.state.phone} onChange={this.handleInputFormValues}></input>
            
            <input className="shipping-input-btn" type="submit" placeholder="Submit"></input>
          </form>
        </div>
      </div>
    )
  }
}
