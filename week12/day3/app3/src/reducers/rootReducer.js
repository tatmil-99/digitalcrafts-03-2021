const initialState  = [

]

const rootReducer = (state = initialState, action) => {
  
 
    switch(action.type) {
      case "ADD_NAMES":
        return state = {name: "Todd"}
      default: 
        return state;
    }
  
}
console.log(initialState)
export default rootReducer;