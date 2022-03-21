//// PLEASE TAKE REFERENCE FROM 'index.js' file in **HTTP-SERVER** folder,
//// see and compare how easy to follow and clean code is written with EXPRESS framework.

const express = require('express');
const friendsRouter = require('./Routers/friends.router');
const messagesRouter = require('./Routers/messages.router');
const app = express();
const PORT = 3000;

/////////////////// MIDDLEWARES  ////////////////////

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

///// URL's are handled by ROUTER
///// CONTROLLER  handles RESPONSES for REQUESTS (manipulates database according to request's need).
///// MODELS has database.

app.use('/messages', messagesRouter);
app.use('/friends', friendsRouter);

app.listen(PORT, () => { console.log(`Listening on ${PORT}...`) });