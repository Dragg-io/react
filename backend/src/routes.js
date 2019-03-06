const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

//Lista postagens
routes.get('/tweets', TweetController.index);
//Insere Postagens
routes.post('/tweets', TweetController.store);
//Da Likes
routes.post('/likes/:id', LikeController.store);

module.exports = routes;