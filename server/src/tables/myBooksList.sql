CREATE TABLE my_books_list (
    book_id VARCHAR(100),
    title VARCHAR(255),
    author VARCHAR(255),
    pageCount INT,
    category VARCHAR(255),
    averageRating FLOAT,
    ratingsCount INT,
    description VARCHAR(400),
    coverImage VARCHAR(255),
    PRIMARY KEY(book_id)
);