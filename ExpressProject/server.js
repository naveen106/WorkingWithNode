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

///no need to use chains of chains of promises and less error prone code.
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






app.listen(PORT, () => { console.log(`Listening on ${PORT}...`) });