import axios from 'axios';
import { SEARCH_BOOK , SHOW_RESULTS, ERROR_RESULTS_NOT_FOUND} from './search-books-types';
import store from '../../store';

const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

export const searchBook = (inputValue) => async (dispatch) => {

    if(inputValue && /^[a-zA-Z]+$/.test(inputValue)) {
        let value = inputValue.split(' ').join('+');
        
        let i = value.length - 1;
        while(value[i] == '+') {
            value = value.slice(0, -1);   
        }

        const { data: { items } } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}+intitle:keyes&key=AIzaSyCFky66nNwhc9gxwx03Z-ZR7xlTIOdI8hQ`);
        // console.log(value,'title',items[0]);
        if(typeof items !== 'undefined' && items.length > 0) {
            return dispatch({
                type: SEARCH_BOOK,
                payload: {
                    results: items.slice(0, 4),
                    errorResultsNotFound: false
                }
            })
        }
        
        let { data: { items: items1 } } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}+inauthor:keyes&key=AIzaSyCFky66nNwhc9gxwx03Z-ZR7xlTIOdI8hQ`);
        if(typeof items1 !== 'undefined' && items1.length > 0) {
            return dispatch({
                type: SEARCH_BOOK,
                payload: {
                    results: items1.slice(0, 4),
                    errorResultsNotFound: false
                }
            })
        }
        store.dispatch(toggleResultsError(true));

    } else if(inputValue && !/^[a-zA-Z]+$/.test(inputValue)) {
        store.dispatch(toggleResultsError(true));
    } else {
        return dispatch({
            type: SEARCH_BOOK,
            payload: []
        })
    }
}

export const toggleResultsError = (bool) => (dispatch) => {
    return dispatch({
        type: ERROR_RESULTS_NOT_FOUND,
        payload: {
            results: [],
            errorResultsNotFound: bool
        }
    })
}

export const showResults = (bool) => (dispatch) => {
    return dispatch({
        type: SHOW_RESULTS,
        payload: bool
    })
}