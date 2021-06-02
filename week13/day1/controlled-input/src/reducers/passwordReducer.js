import { UPDATE_PASSWORD } from '../action-types/user-action-types'

const initialState = {
  password: '',
}

const password = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {...state, username: state.username};
    default:
      return state;
  }
};

export default password;