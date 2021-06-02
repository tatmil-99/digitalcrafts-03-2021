import { UPDATE_PASSWORD } from '../action-types/user-action-types';

export const updateUserPassword = (dispatch, inputValue) => {
  return dispatch({
    type: UPDATE_PASSWORD,
    payload: inputValue,
  });
};