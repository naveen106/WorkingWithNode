const friends = require('../Models/friends.model');
// const model = require('../Models/friends.model');

function getAllFriends(req, res) {
   res.json(friends);
};

function getSingleFriend(req, res) {
   const friendId = +req.params.friendId;
   const friend = friends[friendId];
   //console.log(friends[friendId]);

   if (friend)
      res.json(friend);

   else 
      res.status(404).send("Error: Friend does not exist.");   
}

function postFriend(req,res) {

   //if no data is passed to the body || Content type is not application/json, then
   //express.json() will provide empty object(in place of 'req.body').
   //therefore, we don't need to specifically check for 'req.body', we can check for 'name' property.
   if (!req.body.name) {
      return res.status(400).send({
         error: 'Missing friend name.'
      })
   }


   //app.use(express.json()) middleware will parse json
   //and return 'req.body' as object, and then we can get 'name' property 
   //of added friend from parsed json file.
   const newFriend = {
      name: req.body.name,
      id: friends.length
   };

   //we got the details for our new friend, time to add it to our friends array/list.
   friends.push(newFriend);
   res.json(newFriend);
}


module.exports = {
   getAllFriends,
   getSingleFriend,
   postFriend
}