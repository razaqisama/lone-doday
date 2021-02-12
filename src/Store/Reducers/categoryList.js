const intitialState = {
  categories: [],
  selectedCategory: null,
  loading: false
}

function categoriesReducer(state = intitialState, action){
  switch(action.type) {
    case "SET_CATEGORIES":
      return ({...state, categories: action.payload});
    case "SET_LOADING_CATEGORIES":
      return ({...state, loading: action.payload});
    case "SET_SELECTED_CATEGORY":
      return ({...state, selectedCategory: action.payload});
    default:
      return state
  }
}

export default categoriesReducer;