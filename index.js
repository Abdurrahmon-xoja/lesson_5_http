const http = require('http');
const os = require('os');



function serverFunction (request,respons){
    console.log(request.headers);
    respons.end('babu hello')
}

const server = http.createServer(serverFunction)


server.listen(8080 , () => {
    console.log('http://' + os.networkInterfaces().en0[1].address + ':' + 8080);
});