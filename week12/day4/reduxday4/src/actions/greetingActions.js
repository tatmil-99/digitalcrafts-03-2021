import { CHANGE_GOV_OFFICIAL } from "../action-types/action-type";

export const changeFakeDataToJoe = (dispatch) => {
  return dispatch({type: "INSERT_FAKE_JOE"});
}

export const changeGovOfficial = (dispatch) => {
  return dispatch({type: "CHANGE_GOV_OFFICIAL"})
}