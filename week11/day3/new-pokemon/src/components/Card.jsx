import React, { Component } from 'react'
import './cardContainer.css'

export default class Card extends Component {
  render() {
    const {hp,name, sprites} = this.props.pokemon
    const uppercased = name.toUpperCase()
    return (
      <div>
        {/* <img onMouseLeave={()=> this.setState({flip: !this.state.flip})} onMouseOver={()=> this.setState({flip: !this.state.flip})} src={this.state.flip ?  sprites.back : sprites.front } alt="" /> */}

        <h3>{uppercased}</h3>
        <p> 🧡 HP: {hp}</p>         
      </div>
    )
  }
}
