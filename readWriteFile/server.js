var http = require('http');
var fs = require('fs');


var dataS = null;	 
	 
fs.readFile('subor.txt', function(err, data) {

  
	
  if (err) throw err; // Fail if the file can't be read.
  
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data); // Send the file data to the browser.
  }).listen(9001);
  
  console.log('Server running at http://localhost:9001/');

});


fs.writeFile("suborOutput.txt", "data output", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 


