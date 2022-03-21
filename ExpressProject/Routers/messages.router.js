const express = require('express');
const messageController = require('../Controller/messages.controller');
const messagesRouter = express.Router();

// messagesRouter.use('/messages', (req, res, next) => {
//    next();
// });
messagesRouter.get(`/`, messageController.getMessages);
messagesRouter.post(`/`, messageController.postMessages); //add a message to 'messages' (well we don't have any messages).

module.exports = messagesRouter;