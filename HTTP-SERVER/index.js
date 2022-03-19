//const { resolveSoa } = require('dns');
const http = require('http');
const PORT = 3000;
const friends = [
   {
      id: 0,
      name: "Alfred Nobel"
   },

   {
      id: 1,
      name: "Sir Isaac Newton"
   },

   {
      id: 2,
      name: "Albert Einstein"
   }
]
const server = http.createServer((req, res) => {
 
   const address = req.url.split('/');  //formed array, ["", 'friends', '1'] //if index/id passed is '1'
  // console.log(address);
   
   if (address.length > 3) {
      res.statusCode = 404;
      res.end();
   }

   if (req.method == "POST" && adddress[1] === `friends`) {
      req.on("data", (data) => {
         const friend = data.toString();
         console.log(`Request: ` + data);
         friends.push(JSON.parse(friend));
      });
      req.pipe(res);
   }
   
   let friendIndex=null;  
   console.log(typeof (address[2]));

   if (address[2] !== '' && address.length === 3)
      friendIndex = +address[2];

   if(req.method === "GET" && address[1] === 'friends'){     
   //   console.log('friendIndex: '+friendIndex);
      if (friendIndex != null && friendIndex < friends.length) {
         res.writeHead(200, {
            'Content-Type': 'application/json'
         });
         res.end(JSON.stringify(friends[friendIndex]));
      }
            
      if (friendIndex === null && address.length < 3)
         res.end(JSON.stringify(friends));         
      
      else { 
         res.statusCode = 404;
         res.end();
      }

   }
   
   if (req.method === "GET" && address[1] === 'message') { 
      if (address.length > 2){
         res.statusCode = 404;
         res.end();
         return;
      }
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<body>');
      res.write('<ul>');
      res.write('<li>Hi Naveen!</li>');
      res.write("<li>What are your thoughts on Node.js</li>");
      res.write('</ul>');
      res.write('</body>')
      res.write('</html>');
      res.end();
   }

   else {
      res.statusCode = 404;
      res.end();
   }
});

server.listen(PORT, () => { console.log(`Listening on port ${PORT}...`)});  //localhost