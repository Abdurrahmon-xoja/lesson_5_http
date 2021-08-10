const http = require('http');


function serverFunction (request , response){
    console.log(request.headers);
    response.end('hello world')
}

const server = http.createServer(serverFunction);


server.listen(8080 , console.log('localhost:8080'))