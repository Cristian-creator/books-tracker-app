const express = require('express');
const router = express.Router();

const query = require('../queries/queries-books');

router.get('/get-my-books-list', query.getMyBooksList);
router.post('/add-book-to-my-books-list', query.addBookToMyBooksList);
router.delete('/delete-my-book', query.deleteMyBook);

module.exports = router;