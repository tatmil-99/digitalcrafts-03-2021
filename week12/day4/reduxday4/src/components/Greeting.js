import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { changeFakeDataToJoe } from "../actions/greetingActions"

const Greeting = () => {
  const dispatch = useDispatch();
  const fakeData  = useSelector((state) => state.fakeData)
  return (
    <div>
      <h1>Hello redux</h1>
      {fakeData.map(data => <p>{data.userName}</p>)}
      <button onClick={() => (changeFakeDataToJoe(dispatch))}>Click</button>
      
    </div>
  )
}

export default Greeting
