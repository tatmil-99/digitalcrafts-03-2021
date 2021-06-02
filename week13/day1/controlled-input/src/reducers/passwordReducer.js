import { UPDATE_PASSWORD } from '../action-types/user-action-types'

const initialState = {
  password: '',
}

const password = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {password: state.password = action.payload};
    default:
      return state;
  }
};

export default password;