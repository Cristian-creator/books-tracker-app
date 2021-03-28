import React, { useState } from 'react';

import { connect } from 'react-redux';
import { searchBook, showResults } from '../../store/actions/search-books/search-books-actions';

import onClickOutside from 'react-onclickoutside';

function SearchInput({ searchBook, showResults, showResultsBool }) {
    const [currentInputValue, setCurrentInputValue] = useState('');

    SearchInput.handleClickOutside = () => {
        setTimeout(() => {
            showResults(false);
        }, 150);
    }

    const turnOnResults = () => {
        if(!showResultsBool) {
            showResults(true);
        }
    } 

    let timer;

    const startTimer = () => {
        timer = window.setTimeout(() => {
            doneTyping();
        }, 1500);
    }

    const stopTimer = () => {
        window.clearTimeout(timer);
    }
    
    const doneTyping = () => {
        searchBook(currentInputValue); 
    }

    return (
        <>
            <input onClick={turnOnResults} onKeyUp={startTimer} onKeyDown={stopTimer} onChange={(e) => setCurrentInputValue(e.target.value)} type="text" name="" id="" placeholder="Search books"/>
        </>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => SearchInput.handleClickOutside
};

const mapStateToProps = (state) => ({
    showResultsBool: state.results.showResultsBool
});

SearchInput = onClickOutside(SearchInput, clickOutsideConfig);
SearchInput = connect(mapStateToProps, { searchBook, showResults })(SearchInput);

export default SearchInput;
// export default connect(mapStateToProps, { searchBook, showResults })( onClickOutside(SearchInput, clickOutsideConfig));
// export default onClickOutside( connect(mapStateToProps, { searchBook, showResults })( SearchInput), clickOutsideConfig);
