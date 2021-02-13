const intitialState = {
  allNews: [],
  selectedNews: [],
  loading: false
}

function newsReducer(state = intitialState, action){
  switch(action.type) {
    case "SET_ALLNEWS":
      return ({...state, allNews: action.payload});
    case "SET_LOADING_NEWS":
      return ({...state, loading: action.payload});
    case "SET_SELECT_NEWS":
      return ({...state, selectedNews: action.payload});
    default:
      return state
  }
}

export default newsReducer;