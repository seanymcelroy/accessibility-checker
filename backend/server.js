const http = require('http');
const pa11y = require('pa11y');
// const PORT = process.env.PORT || 5000


http.createServer((req, res)=> {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET'
    }
    pa11y('https://www.bbc.com/').then((results) => {
        res.writeHead(200, headers);
        res.end(JSON.stringify({"results":results}));
    });
    // checkAccessibility('http://supervideo.com/')
}).listen(8080);

console.log(`Server running`)