const intitialState = {
  allNews: [],
  loading: false
}

function newsReducer(state = intitialState, action){
  switch(action.type) {
    case "SET_ALLNEWS":
      return ({...state, categories: action.payload});
    case "SET_LOADING_NEWS":
      return ({...state, loading: action.payload});
    default:
      return state
  }
}

export default newsReducer;