import React from 'react'
import TopMyBooksList from './TopMyBooksList/TopMyBooksList'
import './MyBooks.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MyBookStyled from './MyBookStyled';
import nerdEmoji from '../../images/nerd.png'

import { removeMyBook } from '../../store/actions/mybooks/mybooks-actions';

function MyBooks({ myBooks, removeMyBook }) {

    const removeThisBook = (book_id) => {
        removeMyBook(book_id);
    }

    return (
        <div className="my-books-container">
            <img src={nerdEmoji} alt="" />
            <TopMyBooksList />
            <div class="my-books-div">
                {
                    myBooks.map((item) => (
                        <div key={item.book_id} class="">
                            <MyBookStyled className="my-book-styled" coverImage={item.coverImage} />
                            <div class="details-show-on-hover">
                                <Link to={`/my-books/${item.book_id}`}>
                                    <button> Details </button>
                                </Link> 
                                <button onClick={() => removeThisBook(item.book_id)}> Remove </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    myBooks: state.myBooks.myBooksReducer
});

export default connect(mapStateToProps, { removeMyBook } )(MyBooks);
