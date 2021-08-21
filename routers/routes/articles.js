const express = require("express");
const articlesRouter = express.Router();

const {
    getAllArticles,
    getArticlesByAuthor,
    getAnArticleById,
    createNewArticle,
    updateAnArticleById,
    deleteArticleById,
} = require("../controllers/articles");


articlesRouter.get('/', getAllArticles);
articlesRouter.get('/search_1', getArticlesByAuthor);
articlesRouter.get('/search_2', getAnArticleById);
articlesRouter.post('/', createNewArticle);
articlesRouter.put('/:id', updateAnArticleById);
articlesRouter.delete('/:id', deleteArticleById);
module.exports = articlesRouter;