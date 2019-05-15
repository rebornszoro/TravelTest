const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs')
var text = fs.readFileSync('index.json','utf8')


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
//  res.write(text);
//  res.end();
});


//var server = new http.Server();

server.listen(port, hostname, () => {
  console.log(`Server running at http:\/\/${hostname}:${port}/`);
});

server.on('request', function (request, response) {
  var url = require('url').parse(request.url);
  console.log(url);
  var filename = url.pathname.substring(1);
  fs.readFile(filename,'utf8',function(err,content){
//    console.log('content');
    if(err){
      response.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      response.writeHead(404,{
        'Content-Type': 'text/plain;charset=UTF-8'
      });
      response.write(err.message);
      response.end();
    }
    else{
      response.setHeader('Content-Type', 'application/json');
      response.writeHead(200,{
        'Content-Type': 'application/json'
      });
      response.write(content);
      response.end();
//      console.log('responsed');
    }
  });
});

