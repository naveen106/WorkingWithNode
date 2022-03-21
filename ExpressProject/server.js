
//// PLEASE TAKE REFERENCE FROM 'index.js' file in **HTTP-SERVER** folder,
//// see and compare how easy to follow and clean code is written with EXPRESS framework.


const express = require('express');
//const res = require('express/lib/response');
const app = express();

const messageController = require('./Controller/messages.controller');
const friendsController = require('./Controller/friends.controller');


const PORT = 3000;



/////////////////// MIDDLEWARES
//this runs and after next() executes, it goes to next Middleware(if there is),
//otherwise it means it has reached the ENDPOINT. It runs the corresponding method(GET,POST etc) with given url.
//meaning sends url according our defined way and sends the response.

app.use((req, res, next) => {    //.use() function to create middleware.

   const start = Date.now();
   next();
   
   console.log(`Method:${req.method}, Url: ${req.url}`);   
   console.log(`Time taken: ${(Date.now()-start)}ms\n`);
});
 

// middleware to parse the request data provided as json object for post method.
app.use(express.json());




///////////////////SEND RESPONSE FOR GET REQUEST 
app.get(`/friends`, friendsController.getAllFriends);
app.get(`/friends/:friendId`, friendsController.getSingleFriend);
app.get(`/messages`, messageController.getMessages);


///////////////// SEND RESPONSE FOR POST REQUEST
app.post(`/friends`, friendsController.postFriend); //add a friend to friends/array (simply our little database).
app.post(`/messages`, messageController.postMessages); //add a message to 'messages' (well we don't have any messages).



app.listen(PORT, () => { console.log(`Listening on ${PORT}...`) });