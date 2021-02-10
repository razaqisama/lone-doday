import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import categoriesReducer from './Reducers/categoryList';
import newsReducer from './Reducers/news';

const rootReducer = combineReducers({
  categoriesReducer,
  newsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store