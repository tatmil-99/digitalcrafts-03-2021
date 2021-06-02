import { UPDATE_PASSWORD } from '../action-types/user-action-types';

export const updateUserPassword = (dispatch) => {
  return dispatch({
    type: UPDATE_PASSWORD,
  });
};