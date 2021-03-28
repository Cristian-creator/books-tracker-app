import { SEARCH_BOOK, SHOW_RESULTS, ERROR_RESULTS_NOT_FOUND } from '../actions/search-books/search-books-types';

const initialState = { 
    results: [],
    showResultsBool: false,
    errorResultsNotFound: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_BOOK: 
            return {
                ...state,
                results: action.payload.results,
                errorResultsNotFound: action.payload.errorResultsNotFound
            };
        case SHOW_RESULTS:
            return {
                ...state,
                showResultsBool: action.payload
            };
        case ERROR_RESULTS_NOT_FOUND:
            return {
                ...state,
                results: action.payload.results,
                errorResultsNotFound: action.payload.errorResultsNotFound
            }
        default: return state;
    }
}