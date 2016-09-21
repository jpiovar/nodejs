var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
	


	
    displayForm(res);
	
	
	console.dir(req.param);

    if (req.method == 'GET') {
        console.log("GET");
        
		/*var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');*/
		
    } else if (req.method == 'POST') {
        console.log("POST");
	}
	
	
    /*else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }  
	 
	/*
	var score = req.body.score;
      console.log(score);
      //do whatever you want
      res.writeHead(200, {'Content-Type': 'text/plain'}); 
      res.end('_testcb(\'{"message": "Welcome! Node.js Responding!"}\')');
	  */
});




function displayForm(res) {
    fs.readFile('ngInput.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}





server.listen(1185);

// Add headers

/*
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1185');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
*/
/*
var cors = require('cors');

// use it before all route definitions
server.use(cors({origin: 'http://localhost:1185'}));

*/
console.log("server listening on 1185");

