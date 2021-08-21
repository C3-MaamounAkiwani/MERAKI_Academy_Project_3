const express = require('express');
const app = express();
const port = 5000;
const articlesRouter = require('./routers/routes/articles');
app.use(express.json());

//ticket_1
app.use('/articles', articlesRouter);


app.listen(port, () => {
    console.log(`Your Server is listening on port ${port}`);
});