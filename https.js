const request = require('./request');
const response = require('./response');

function makeRequest(url, data) { 
   request.send(url,data);
   return response.read(data);
}

console.log(makeRequest('https://www.google.com', 'what is node.js?'));