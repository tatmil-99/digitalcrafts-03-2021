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
              americanName: "Indian"
            }]
          },
          {
            Foreign: [{
              foreignName: "Honda"
            }]
          }
        ]
      },
    ]  
  }
}

  render() {
    const {americanName} = this.state.vehicles[0].motorcycles[0].American[0]
    const {foreignName} = this.state.vehicles[0].motorcycles[1].Foreign[0]


    return (
      <div>
        <h2>Garage:</h2>
        <h4>Motorcycles:</h4>
        <ul>
          <li>{americanName}</li>
          <li>{foreignName}</li>
        </ul>
      </div>
    )
  }
}

export default Garage;