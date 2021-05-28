import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNames } from "../actions/changeArrActions"

const ChangeArr = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  return (
    <div>
      <h1>Names</h1>
      {name.map((data) => (
        <p>{data.newName}</p>
        ))
      }
      <button onClick={() => addNames(dispatch)}>Add Names</button>
    </div>
  )
}

export default ChangeArr
