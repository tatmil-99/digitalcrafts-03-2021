import { useSelector } from 'react-redux';

const DisplayInput = () => {
  const userInfo = useSelector((state) => state.userInfo);
  
  return (
    <div>
      <h1>User Info</h1>
      <p>{userInfo.username}</p>
      <p>{userInfo.password}</p>
    </div>
  );
};

export default DisplayInput
