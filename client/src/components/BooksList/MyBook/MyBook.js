import React from 'react';
import MyBookStyled from '../MyBookStyled';
import './MyBook.css';

export default function MyBook({ book }) {

    const { book_id, title, author, pageCount, category, averageRating, ratingsCount, description, coverImage } = book;
    
    const averageRatingStars = averageRating ? (
        <h1> { averageRating } </h1>
    ) : null;

    const ratingDetails = ratingsCount ? (<span> Rating details: {ratingsCount} { ratingsCount > 1 ? 'ratings' : 'rating'} </span>) : null;
    const numberOfPages = pageCount ? (<span> Number of pages: {pageCount} </span>) : null;
    const bookCategory = category ? (<span> Categories: {category} </span>) : null;

    return (
        <div className="my-book-container">
           <MyBookStyled size={"big"} coverImage={coverImage} />
           <div class="my-book-informations">
                <h2> {title} </h2>
                <h3> by {author} </h3>
                <div class="my-book-ratings">
                    { averageRatingStars }
                    { ratingDetails }
                </div>
                { bookCategory }
                { numberOfPages }
                {/* <span> {description.length > 199 ? `${description}...` : `${description}`} </span> */}
                <p className="my-book-description"> {description.length > 199 ? `${description}...` : `${description}`} </p>
           </div>
        </div>
    )
}