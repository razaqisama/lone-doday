import {fetchData} from '../hooks/apiReq';


export function setCategories(payload) {
  return {
    type: "SET_CATEGORIES",
    payload
  }
}

export function setLoadingCategories(payload) {
  return {
    type: "SET_LOADING_CATEGORIES",
    payload
  }
}

export function setAllNews(payload) {
  return {
    type: "SET_ALLNEWS",
    payload
  }
}

export function setLoadingNews(payload) {
  return {
    type: "SET_LOADING_NEWS",
    payload
  }
}

export function fetchLineToday() {
  return (dispatch, getState) => {
    dispatch(setLoadingCategories(true));
    dispatch(setLoadingNews(true));
    fetchData("https://today.line.me/id/portaljson")
    .then(response => {
      dispatch(setLoadingCategories(false));
      dispatch(setLoadingNews(false));
      console.log(response);
    })
    .catch(err => {
      console.log(err)
    })
  }
}