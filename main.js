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


//ticket_3
app.use('/articles/search_2', articlesRouter);


//ticket_4
app.use('/articles', articlesRouter);


//ticket_5
app.use('/articles/:id', articlesRouter);

/*
const updateAnArticleById = () => {
    app.put('/articles/:id', (req, res) => {
        let id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const author = req.body.author;
        const findbyid = articles.find((element) => {
            return element.id == id;
        })
        if (findbyid) {
            res.status(202);
            findbyid.title = title;
            findbyid.description = description;
            findbyid.author = author;
            res.json(findbyid);
        } else {
            res.json('not find id');
        }
    })
}
updateAnArticleById();
*/
//ticket_6
const deleteArticleById = () => {

    app.delete('/articles/:id', (req, res) => {
        let id = req.params.id;
        const deleteById = articles.find((element, index) => {

            i = index;
            return element.id == id;
        })
        if (deleteById) {
            const successDeletedById = {
                success: true,
                message: `Success Delete article with id => ${id}`
            }
            articles.splice(i, 1);
            res.json(successDeletedById);
        } else {
            const faildDeleteById = {
                success: false,
                message: `Not Found atricle with id => ${id}`
            }
            res.json(faildDeleteById);
        }
    })
}
deleteArticleById();

//ticket_7
const deleteArticlesByAuthor = () => {
    app.delete('/articles', (req, res) => {
        let author = req.body.author;
        articles = articles.filter((ele) => {
            return ele.author !== author;
        })
        if (articles) {
            const successDeletedByAuthor = {
                success: true,
                message: `Success delete all the articles for the author => ${author}`
            }
            res.json(successDeletedByAuthor);
        } else {
            const faildDeleteByAuthor = {
                success: false,
                message: `Not Found atricles for this author => ${author}`
            }
            res.json(faildDeleteByAuthor);
        }
    })
}
deleteArticlesByAuthor();

app.listen(port, () => {
    console.log(`Your Server is listening on port ${port}`);
});