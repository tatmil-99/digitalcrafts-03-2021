import React, { Component } from 'react'
import MuscleCarSection from './MuscleCarSection'
import MotorcycleSection from './MotorcycleSection'
import ExoticCarSection from './ExoticCarSection'

class Garage extends Component {

  constructor(props) {
    super(props);

    this.state = {
    vehicles: [
      {
        motorcycles: [
          {
            American: [{
              name: "Indian"
            }]
          },
          {
            Foreign: [{
              name: "Honda"
            }]
          }
        ]
      },
    ]  
  }
}

  render() {
    const {name} = this.state.vehicles[0].motorcycles[0].American[0]
    
    return (
      <div>
        <h2>Garage:</h2>
        <h4>Motorcycles:</h4>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    )
  }
}

export default Garage;