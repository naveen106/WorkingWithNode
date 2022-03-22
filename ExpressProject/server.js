//// PLEASE TAKE REFERENCE FROM 'index.js' file in **HTTP-SERVER** folder,
//// see and compare how easy to follow and clean code is written with EXPRESS framework.

const express = require('express');
const path = require('path');
const friendsRouter = require('./Routers/friends.router');
const messagesRouter = require('./Routers/messages.router');
const app = express();
const PORT = 3000;

/////////////////// MIDDLEWARES  ////////////////////

//this runs and after next() executes, it goes to next Middleware(if there is),
//otherwise it means it has reached the ENDPOINT. It runs the corresponding method(GET,POST etc) with given url.
//meaning sends url according our defined way and sends the response.

app.use((req, res, next) => { 

   const start = Date.now();
   next();
   
  console.log(`\nMethod:${req.method}, Url: ${req.baseUrl}${req.url}`);
  console.log(`Time taken: ${(Date.now() - start)}ms\n`);
   //console.log('url:' + path.join(__dirname, 'Views'));
   return;
});


app.set('view engine', 'hbs');
app.set('views', path.join('Views'));
// middleware to parse the request data provided as json object for post method.
app.use(express.json());

app.get('/', (req, res) => {
   res.render('index', {
      "title": 'This image looks beautiful',
      "header": 'Isn\'t this image really beautiful!',
   })
})

//serves everything under a specific path.
app.use('/site', express.static(path.join(__dirname, 'public')));
 
///// URL's are handled by ROUTER
///// CONTROLLER  handles RESPONSES for REQUESTS (manipulates database according to request's need and sends a response).
///// MODELS has database.

app.use('/messages', messagesRouter);
app.use('/friends', friendsRouter);

app.listen(PORT, () => { console.log(`Listening on ${PORT}...`) });