const http = require('https');

http.get('https://www.youtube.com/' , res => {
    res.setEncoding('utf-8');

    res.on('data' , data => {
        console.log(data);
    })
})