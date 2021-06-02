import { UPDATE_USERNAME } from '../action-types/user-action-types';

export const updateUsername = (dispatch) => {
  return dispatch({
    type: UPDATE_USERNAME,
  });
};

