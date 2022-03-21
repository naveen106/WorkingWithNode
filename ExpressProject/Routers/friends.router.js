const express = require('express');
const friendsController = require('../Controller/friends.controller');

/////// ROUTERS TO HANDLE URLS (like for friends a different router, and for messages a different one).
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
   console.log(`IP address: ${req.ip}`);
   next();
})

friendsRouter.get(`/`, friendsController.getAllFriends);
friendsRouter.get(`/:friendId`, friendsController.getSingleFriend);
friendsRouter.post(`/`, friendsController.postFriend); //add a friend to friends/array (simply our little database).

module.exports = friendsRouter;