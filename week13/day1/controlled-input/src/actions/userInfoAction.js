import { SET_USER_INFO } from '../action-types/user-action-types'

export const updateUserInfo = (dispatch, username, password) => {
  return dispatch({
    type: SET_USER_INFO,
    payload: { username, password }
  });
};