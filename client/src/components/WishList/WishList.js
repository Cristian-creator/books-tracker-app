import React from 'react'
import thinking from '../../images/thinking1.png'
import './WishList.css'

function WishList() {
    return (
        <div className="wish-list-container">
            <div class="top-wish-list">
                <h1> Wish list </h1>
                <span></span>
            </div>
            <img src={thinking} alt="thinking" />
        </div>
    )
}

export default WishList
