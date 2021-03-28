import { combineReducers } from 'redux';
import myBooksReducer from './myBooksReducer';
import searchBookReducer from './searchBookReducer';

export default combineReducers({
    myBooks: myBooksReducer,
    results: searchBookReducer
})