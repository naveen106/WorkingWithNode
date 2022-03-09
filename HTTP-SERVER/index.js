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
   
   const categories = req.url.split('/');  //formed array, ["", 'friends', '1'] //if index/id passed is '1'
   let friendIndex;
   if (categories.length > 3) {
      res.statusCode = 404;
      res.end();
   }
   (categories.length > 2) ? friendIndex = +categories[2] : friendIndex = null;   
      
   if(categories[1] === 'friends'){
      res.writeHead(200, {
         'Content-Type': 'application/json'
      });
      
      if (friendIndex<3)
         res.end(JSON.stringify(friends[friendIndex]));
      
      else if(categories.length > 3) {
         res.statusCode = 404;
         res.end();
      }
         
      else
         res.end(JSON.stringify(friends));
   }
   
   if (categories[1] === 'message') { 
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

server.listen(PORT, () => { console.log(`Listening on port ${PORT}`)});  //localhost