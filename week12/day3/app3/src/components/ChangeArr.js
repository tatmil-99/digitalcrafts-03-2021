import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const ChangeArr = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name);
  const name1 = useSelector((state) => state.name1);

  return (
    <div>
      <h1>Names</h1>
      <p>{name}</p>
      <p>{name1}</p>
      <button onClick={() => dispatch({type: "ADD_NAMES"})}>Add Names</button>
    </div>
  )
}

export default ChangeArr
