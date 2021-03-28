import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Home() {
    const [myBook, setMyBook] = useState({});  
    
    return (
        <div>
            user interface for add book on mybooks / wishlist - different forms and ready to go 
            <br/>
            dynamic rating - add ratings to books
        </div>
    )
}

export default Home
