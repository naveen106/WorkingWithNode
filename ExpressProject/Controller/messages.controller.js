function getMessages(req, response){
   response.send("Poor me, no one has spoken to me yet, no messages to show.");
}

function postMessages(req, res) { 
   //console.log(`Updatig data....`); 
   res.send(`Updating data...`);
}

module.exports = {
   getMessages,
   postMessages
};