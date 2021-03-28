require('dotenv').config();

const database = require('../connections/books_tracker_api');

const getMyBooksList = async (req, res) => {

    const sql = `SELECT * FROM my_books_list`;

    const query = database.query(sql, [], (err, results) => {
        if(err) throw err;

        res.json({ results });
    });
}

const addBookToMyBooksList = (req, res) => {
    const { book_id, title, author, pageCount, category, averageRating, ratingsCount, description, coverImage } = req.body;

    const items = {book_id, title, author, pageCount, category, averageRating, ratingsCount, description, coverImage};

    let sql = `INSERT INTO my_books_list SET ?`;
    
    const query = database.query(sql, items, (err, results) => {
        if(err) throw err;

        res.json({ message: "SUCCESS" });
    });
}

const deleteMyBook = (req, res) => {
    const { book_id } = req.body;
    
    const sql = `DELETE FROM my_books_list WHERE book_id = '${book_id}'`;
    
    const query = database.query(sql, [], (err, results) => {
        if(err) throw err;

        res.json({ message: "SUCCESS" });
    });
}

module.exports = {
    getMyBooksList,
    addBookToMyBooksList,
    deleteMyBook
}