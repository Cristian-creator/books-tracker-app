import React from 'react'
import './SearchResults.css'

import { connect } from 'react-redux'; 
import SearchResult from './SearchResult/SearchResult';

function SearchResults({ results, showResultsBool, errorResultsNotFound }) {

    return (
        <div className="search-results">
            {
                showResultsBool && !errorResultsNotFound && results && results.map((result) => (
                    <SearchResult key={result.id} result={result} />
                ))
            }
            {
                showResultsBool && errorResultsNotFound && <div> No results found </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    results: state.results.results,
    showResultsBool: state.results.showResultsBool,
    errorResultsNotFound: state.results.errorResultsNotFound,
    // myBooks: state.myBooks.myBooksReducer
});

export default connect(mapStateToProps)(SearchResults);
