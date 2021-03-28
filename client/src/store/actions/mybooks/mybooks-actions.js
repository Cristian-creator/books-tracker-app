import axios from 'axios';
import { GET_MYBOOKS, ADD_MY_BOOK, REMOVE_MY_BOOK } from './mybooks-types';

export const getMyBooks = () => async (dispatch) => {
    
    const { data: { results }} = await axios.get('/books/get-my-books-list');

    return dispatch({
        type: GET_MYBOOKS,
        payload: results
    })
}

export const addMyBook = (body) => async (dispatch) => {

    try {
        const request = await axios.post('/books/add-book-to-my-books-list', body);
        
        return dispatch({
            type: ADD_MY_BOOK,
            payload: body
        })
    } catch (error) {
        throw error;
    }

}

export const removeMyBook = (book_id) => async (dispatch) => {

    const request = await axios.delete('/books/delete-my-book', { data: { book_id} });

    return dispatch({
        type: REMOVE_MY_BOOK,
        payload: book_id
    })
}