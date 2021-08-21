const express = require('express');
const app = express();
const db = require('./db/db');
const port = 5000;
const articles = require('./db/db');
const articlesRouter = require('./routers/routes/articles');
app.use(express.json());


//ticket_1
app.use('/articles', articlesRouter);


//ticket_2
app.use('/articles/search_1', articlesRouter);


app.listen(port, () => {
    console.log(`Your Server is listening on port ${port}`);
});