import { CHANGE_GOV_OFFICIAL, INSERT_FAKE_JOE } from "../action-types/action-type"

const initialState = {
  fakeData: [],
  governmentOfficials: ["Mayor"]
}

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case INSERT_FAKE_JOE:
      return { fakeData: [{ userName: "Joe", height: "7.1" }] };
    case CHANGE_GOV_OFFICIAL:
      return { ...state, governmentOfficials: [...state.governmentOfficials, "senator"]};
    default:
      return state;
  }
}

export default rootReducer;