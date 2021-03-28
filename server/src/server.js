require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const middlewares = require('./middlewares');

const app = express();
const port = process.env.PORT || 1337;

// Middlewares
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

// --- books
const booksRoutes = require('./routes/routes-books');
app.use('/books', booksRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));