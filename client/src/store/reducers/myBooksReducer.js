import { GET_MYBOOKS, REMOVE_MY_BOOK, ADD_MY_BOOK } from '../actions/mybooks/mybooks-types';

const initialState= {
    myBooksReducer: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MYBOOKS:
            return {
                ...state,
                myBooksReducer: action.payload
            }
        case ADD_MY_BOOK:
            return {
                ...state,
                myBooksReducer: [...state.myBooksReducer, action.payload]
            }
        case REMOVE_MY_BOOK:
            return {
                ...state,
                myBooksReducer: state.myBooksReducer.filter(item => item.book_id !== action.payload)
            }
        default: return state;
    }
}

