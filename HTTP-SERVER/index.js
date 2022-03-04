const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {

   if(req.url === '/home'){
      res.writeHead(200, {
         'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ id: 1, name: `Sir Issac Newton` }));
   }
   
   if (req.url === '/message') { 
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