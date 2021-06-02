import { UPDATE_USERNAME } from '../action-types/user-action-types';

export const updateUsername = (dispatch, inputValue) => {
  return dispatch({
    type: UPDATE_USERNAME,
    payload: inputValue,
  });
};

