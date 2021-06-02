import { UPDATE_USERNAME } from '../action-types/user-action-types'

const initialState = {
  username: '',
}

const username = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      console.log(initialState)
      return {...state, username: state.username};
    default:
      return state;
  }
};

export default username;