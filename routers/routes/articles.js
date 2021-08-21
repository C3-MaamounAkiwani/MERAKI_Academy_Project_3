const express = require("express");
const articlesRouter = express.Router();

const {
    getAllArticles,
    getArticlesByAuthor,
    getAnArticleById,
    createNewArticle,
    updateAnArticleById,
    deleteArticleById,
    deleteArticlesByAuthor
} = require("../controllers/articles");


articlesRouter.get('/', getAllArticles);
articlesRouter.get('/search_1', getArticlesByAuthor);

module.exports = articlesRouter;