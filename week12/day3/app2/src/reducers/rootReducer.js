const initialState = {
  username: "Tate",
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case "CHANGE_NAME":
      return {...state, username: state.username = "Joe"}
    default:
      return state;
  }
}

export default rootReducer;