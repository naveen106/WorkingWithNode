const express = require('express');
const res = require('express/lib/response');
const app = express();

const PORT = 3000;

//// PLEASE TAKE REFERENCE FROM 'index.js' file **HTTP-SERVER** folder,
//// see and compare how easy to follow and clean code is written with EXPRESS framework.

const friends = [
   {
      id: 0,
      name: `Sir Isaac Newton`
   },
   {
      id: 1,
      name: `Alfred Nobel`
   },
   {
      id: 2,
      name: `Albert Einstein`
   }
];




/////////////////// MIDDLEWARES
//this runs and after next() executes, it goes to next Middleware(if there is),
//otherwise it means it has reached the ENDPOINT. It runs the corresponding method(GET,POST etc) with given url.
//meaning sends url according our defined way.

app.use((req, res, next) => {    //.use() function to create middleware.

   const start = Date.now();
   next();
   
   console.log(`Method: ${req.method}, Url: ${req.url}`);   
   console.log(`Time taken: ${(Date.now()-start)}ms`);
});
 

// middleware to parse the request data provided as json object for post method.
app.use(express.json());









///////////////////SEND RESPONSE FOR GET REQUEST 
app.get(`/friends`, (req, res) => {
   res.json(friends);
});

app.get(`/friends/:friendId`, (req, resp) => {
   const friendId = +req.params.friendId;
   console.log(friends[friendId]);
   
   if (friends[friendId])
      resp.json(friends[friendId]);
   
   else {
      resp.status(404).send("Error: Friend does not exist.");
   }
})
   
app.get(`/messages`, (req, response) => { 
   response.send("Poor me, no one has spoken to me yet, no messages to show.")
})










///POST REQUEST TO ADD FRIENDS (UPLOAD DATA)
app.post(`/friends`,(req, res) => {

   //if no data is passed to the body || content type is not application/json
   //express.json() will provide empty object(in place of 'req.body').
   //therefore, we don't need to specifically check for 'req.body', we can check for 'name' property.
   if (!req.body.name) {
      return res.status(400).send({
         error: 'Missing friend name.'
      })      
   }


   //app.use(express.json()) middleware will parse json
   //object and return 'req.body' as object, and then we can get 'name' property of added friend from parsed json file.
   const newFriend = {
      name: req.body.name,
      id: friends.length
   };
   
   //we got the details for our new friend, time to add it to our friends array/list.
   friends.push(newFriend);
   res.json(newFriend);
})




app.listen(PORT, () => { console.log(`Listening on ${PORT}...`) });