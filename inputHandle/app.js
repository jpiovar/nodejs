var http = require('http'); 
http.createServer(function (req, res) {
      if (req.method == 'POST'){
		console.log(req.body.yourScore)
	  }
      
      //do whatever you want
      //res.writeHead(200, {'Content-Type': 'text/plain'}); 
      //res.end('_testcb(\'{"message": "Welcome! Node.js Responding!"}\')'); 
}).listen(9001); 

console.log('run on 9001');