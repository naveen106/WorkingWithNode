function encrypt(data) { 
   return 'encrypted data';
}
function send(url, data) { 
   console.log(`Sending ${encrypt(data)} to ${url}`);
}

module.exports = { send }