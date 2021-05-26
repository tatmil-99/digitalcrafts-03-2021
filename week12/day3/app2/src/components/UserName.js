import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const UserName = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  return (
    <div>
      <h1>Username: {username}</h1>
      <button onClick={() => dispatch({type: "CHANGE_NAME"})}>Change Name</button>
    </div>
  )
}

export default UserName
