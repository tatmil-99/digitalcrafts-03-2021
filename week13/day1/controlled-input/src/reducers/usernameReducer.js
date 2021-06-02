import { UPDATE_USERNAME } from '../action-types/user-action-types'

const initialState = {
  username: '',
}

const username = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {username: state.username = action.payload};
    default:
      return state;
  }
};

export default username;