import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MyBooks from './components/BooksList/MyBooks';
import Home from './components/Home/Home';
import { useEffect } from 'react';

import axios from 'axios';
import { getMyBooks } from  './store/actions/mybooks/mybooks-actions';

import { connect } from 'react-redux';
import MyBook from './components/BooksList/MyBook/MyBook';
import WishList from './components/WishList/WishList';


function App({ getMyBooks, myBooks }) {
  
  const myBooksRoutes =  myBooks.map((item) => <Route key={item.book_id} path={`/my-books/${item.book_id}`} component={() => <MyBook book={item} /> } />)

  useEffect(() => {
    getMyBooks();
  }, []);


  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
              <Route exact path="/my-books" component={MyBooks} />
              <Route exact path="/wish-list" component={WishList} />
              <Route exact path="/" component={Home} />
              { myBooksRoutes }
            </Switch>
        </Router>
   </div>
  );
}

const mapStateToProps = (state) => ({
  myBooks: state.myBooks.myBooksReducer
});

export default connect(mapStateToProps, { getMyBooks })(App);
