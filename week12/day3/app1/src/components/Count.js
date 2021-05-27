import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { incrementCounter } from '../actions/countActions';
import { decrementCounter } from '../actions/countActions';

const Count = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch();
  // const incrementCounter = useSelector((state) => state.count)
  // const decrementCounter = useSelector((state) => state.count)

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => incrementCounter(dispatch)}>Add</button>
      <button onClick={() => decrementCounter(dispatch)}>Subtract</button>
    </div>
  )
}

export default Count
