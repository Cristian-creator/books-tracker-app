import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';
import './Navbar.css';

function Navbar() {

    return (
        <div className="navbar">
            <Link to="/"><h1> Books <span>Tracker</span> </h1></Link>
            <div class="">
                <Link to="/">Home</Link>
                <Link to="/my-books">MyBooks</Link>
                <Link to="/wish-list">WishList</Link>
            </div>
            <div className="search-div">
                <SearchInput />
                <SearchResults />
            </div>           
            <i className="fas fa-user-alt"></i>
        </div>
    )
}

export default Navbar
