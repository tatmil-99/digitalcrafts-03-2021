import React from 'react';
import { useSelector, useDispatch } from "react-redux"

const Count = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => dispatch({type: "ADD"})}>Add</button>
      <button onClick={() => dispatch({type: "SUBTRACT"})}>Subtract</button>
    </div>
  )
}

export default Count
