const express = require('express');
const app = express();
const db = require('./db/db');
const port = 5000;
let articles = require('./db/db');
const articlesRouter = require('./routers/routes/articles');
app.use(express.json());


//ticket_1
app.use('/articles', articlesRouter);


//ticket_2
app.use('/articles/search_1', articlesRouter);


//ticket_3
app.use('/articles/search_2', articlesRouter);


//ticket_4
app.use('/articles', articlesRouter);


//ticket_5
app.use('/articles/:id', articlesRouter);


//ticket_6
app.use('/articles/:id', articlesRouter);


//ticket_7
app.use('/articles', articlesRouter);

app.listen(port, () => {
    console.log(`Your Server is listening on port ${port}`);
});