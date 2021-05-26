import React from 'react';
import { useSelector, useDispatch } from "react-redux"


const Count = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p></p>
      <button>Add</button>
      <button>Subtract</button>
    </div>
  )
}

export default Count
