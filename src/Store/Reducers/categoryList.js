const intitialState = {
  categories: [],
  loading: false
}

function categoriesReducer(state = intitialState, action){
  switch(action.type) {
    case "SET_CATEGORIES":
      return ({...state, categories: action.payload});
    case "SET_LOADING_CATEGORIES":
      return ({...state, loading: action.payload});
    default:
      return state
  }
}

export default categoriesReducer;