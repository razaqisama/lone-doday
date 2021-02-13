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

export function setSelectCategory(payload) {
  return {
    type: "SET_SELECTED_CATEGORY",
    payload
  }
}


export function setSelectNews(payload){
  return {
    type: "SET_SELECT_NEWS",
    payload
  }
}


export function fetchLineToday() {
  return (dispatch, getState) => {
    dispatch(setLoadingCategories(true));
    dispatch(setLoadingNews(true));
    fetchData("http://localhost:3000/line")
    .then(({data}) => {
      dispatch(setCategories(data.result.categoryList));
      dispatch(setAllNews(data.result.categories));
      dispatch(setSelectCategory(data.result.categoryList[0]));
      dispatch(selectedNews());
      dispatch(setLoadingCategories(false));
      dispatch(setLoadingNews(false));
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function selectCategory(payload) {
  return (dispatch, getState) => {
    dispatch(setSelectCategory(payload));
    dispatch(selectedNews());    
  }
}

export function selectedNews() {
  return (dispatch, getState) => {
    const selectedCategory = getState().categoriesReducer.selectedCategory;
    const allNews = getState().newsReducer.allNews;
    let newsSelected = [];
    for(let i = 0; i < allNews.length; i++) {
      if(allNews[i].id === selectedCategory.id){
        newsSelected = allNews[i].templates;
        break;
      }
    }
    dispatch(setSelectNews(newsSelected));
  }
}