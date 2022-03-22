const path = require('path'); //node built-in module

function getMessages(req, res) {
   //res.send("Poor me, no one has spoken to me yet, no messages to show.");

   //Notice that the function used to send File is "sendFile()" instead of 'send()'.
   //__dirname is built-in variable containing name of source file that is being executed.(and that is server.js).
   
   //res.sendFile(path.join(__dirname, '..', 'public', 'yourLieInApril.jpg'));  //join function will join and make the path from provided arguments.

   res.render('messages', {
      "friend": 'Elon Musk'
   })
}

function postMessages(req, res) { 
   //console.log(`Updatig data....`); 
   res.send(`Updating data...`);
}

module.exports = {
  getMessages,
  postMessages,
};