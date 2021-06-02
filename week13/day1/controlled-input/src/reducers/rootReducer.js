import { combineReducers } from 'redux';
import usernameReducer from './usernameReducer';
import passwordReducer from './passwordReducer';
import userInfoReducer from './userInfoReducer';

const rootReducer = combineReducers({
  usernameReducer,
  passwordReducer,
  userInfoReducer,
});

export default rootReducer;