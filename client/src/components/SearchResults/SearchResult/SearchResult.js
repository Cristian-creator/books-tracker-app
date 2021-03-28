import React from 'react'
import SearchResultHero from '../SearchResultHero.js/SearchResultHero';
import './SearchResult.css'

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { addMyBook } from '../../../store/actions/mybooks/mybooks-actions';
import { connect } from 'react-redux';

function SearchResult({ myBooks, result, addMyBook }) {
    const { id, volumeInfo: { authors, description, pageCount, categories, title, imageLinks, averageRating, ratingsCount } }  = result;

    const findAuthor = (myArr) =>  myArr.filter((item) => item.includes(" "));

    const filterStrings = (str) => {
        if(str) {
            if(str.includes(`'`)) str = str.replace(`'`, '`');
            if(str.includes(`"`)) str = str.replace(`"`, '``');    
        }
        return str;
    }

    const addToList = () => {
        const authorResult = findAuthor(authors); 
        const body = {
            book_id: id,
            title: filterStrings(title),
            author: filterStrings(authorResult[0]),
            pageCount: pageCount ? pageCount : 0,
            category: categories ?  filterStrings(categories.toString()) : '',
            averageRating: averageRating ? averageRating : 0,
            ratingsCount: ratingsCount ? ratingsCount : 0,
            description: description ? filterStrings(description.substring(0, 200)) : '',
            coverImage: imageLinks.thumbnail
        };

        addMyBook(body);
    }   

    const addToWishList = () => {
        // axios.post()
    }

    const checkIfResultExistsInMyBooks = () => myBooks.filter((item) => item.book_id == id).length ? true : false;
 
    const addToMyBooksListDiv = !checkIfResultExistsInMyBooks() ? (
        <OverlayTrigger
                    key="top"
                    placement="top"
                    className="search-result-tooltip"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Add to MyBooks list.
                        </Tooltip>
                    }
                >
                    <i class="fas fa-check" onClick={addToList} ></i>
            </OverlayTrigger>
    ) : (
        null
    );

    return (
        <div className="search-result" >
            {/* <img src={imageLinks.smallThumbnail} alt="" srcSet="" /> */}
            <SearchResultHero img={imageLinks.smallThumbnail} />
            <h5> { title.length > 45 ? `${title.substring(0, 45)}...` : title } </h5>
            <p> by { authors.length > 45 ? `${authors.substring(0, 45)}...` : authors } </p>
            <div class="search-result-utils">
            { 
                addToMyBooksListDiv
            }
            <OverlayTrigger
                    key="top2"
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top2`}>
                            Add to WishList.
                        </Tooltip>
                    }
                >
                    <i class="far fa-clock" onClick={addToWishList} ></i>
            </OverlayTrigger>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    myBooks: state.myBooks.myBooksReducer
});

export default connect(mapStateToProps, { addMyBook })(SearchResult);
