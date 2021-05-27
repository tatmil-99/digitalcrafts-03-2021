import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeNameFunction } from "../components/actions/username-actions"

const UserName = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  return (
    <div>
      <h1>Username: {username}</h1>
      <button onClick={() => changeNameFunction(dispatch)}>Change Name</button>
    </div>
  )
}

export default UserName
