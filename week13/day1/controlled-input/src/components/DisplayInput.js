import { useDispatch, useSelector } from 'react-redux';

const DisplayInput = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <div>
      <h1>User Info</h1>
      <p>{userInfo}</p>
      <p>{userInfo}</p>
    </div>
  );
};

export default DisplayInput
