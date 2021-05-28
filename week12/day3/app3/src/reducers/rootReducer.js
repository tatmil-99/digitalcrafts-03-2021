import { ADD_NAMES } from "../action-types/actionTypes"

const initialState = {
  name: [],
}

const rootReducer = (state = initialState, action) => {

    switch(action.type) {
      case ADD_NAMES:
        return {...state, name: [{newName: "Todd"}, {newName: "Rodd"}]};
      default: 
        return state;
    }
}

export default rootReducer;