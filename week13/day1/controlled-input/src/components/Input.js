import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from '../actions/usernameAction';
import { updateUserPassword } from '../actions/passwordAction';

const Input = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const password = useSelector((state) => state.password);

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>Username:</label>
        <input type="text" onChange={(e) => console.log(e.target.value)}></input>
        <br></br>
        <label>Password:</label>
        <input type="password"></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Input
