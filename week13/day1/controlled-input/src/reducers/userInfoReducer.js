const initialState = {

}

const userInfo = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USERNAME':
      return {username: state.username = action.payload};
    default:
      return state;
  }
};