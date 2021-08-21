const articles = require("../../db/db");
const { uuid } = require('uuidv4');
const randomId = uuid();

//ticket_1
const getAllArticles = (req, res) => {
    res.status(200);
    res.json(articles);
}

//ticket_2
const getArticlesByAuthor = (req, res) => {
    const author = req.query.author;
    const findByAuthor = articles.filter((name) => {
        return name.author === author;
    })
    if (findByAuthor.length > 0) {
        res.status(200);
        res.json(findByAuthor);
    } else {
        res.json('theres no name such as same you entered');
    }

}


//ticket_3
const getAnArticleById = () => {
    app.get('/articles/search_2', (req, res) => {
        const id = req.query.id
        const searchById = articles.find((element) => {
            return element.id == id;
        })
        if (searchById) {
            res.status(200);
            res.json(searchById);
        } else {
            res.status(404);
            res.json("articles id is not found");
        }

    })
}


//ticket_4
const createNewArticle = () => {
    app.post('/articles', (req, res) => {

        const id = randomId;
        const title = req.body.title;
        const description = req.body.description;
        const author = req.body.author;
        const newObj = { id: randomId, title: title, description: description, author: author }
        articles.push(newObj);
        res.status(201);
        res.json(newObj);
    })
}



//ticket_5
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

module.exports = { getAllArticles, getArticlesByAuthor, getAnArticleById, createNewArticle, updateAnArticleById, deleteArticleById, deleteArticlesByAuthor }