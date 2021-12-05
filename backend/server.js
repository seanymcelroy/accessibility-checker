const http = require('http');
// const PORT = process.env.PORT || 5000


http.createServer((req, res)=> {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET'
    }
    res.writeHead(200, headers);
    res.end(JSON.stringify({message:'Welcome'}));
}).listen(8080);

// console.log(`Server running on ${PORT}`)