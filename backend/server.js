const http = require('http');
const pa11y = require('pa11y');
// const PORT = process.env.PORT || 5000
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET'
}


http.createServer((req, res)=> {
    if (req.method == 'POST') {
        // console.log('POST')
        var body = ''
        req.on('data', function(data) {
            body = JSON.parse(data)
            usePa11y(body.url, res)
        })
    }else {
    res.writeHead(200, headers)
    res.end(JSON.stringify({ "error": 'There was nothing we could do'}))
    }
}).listen(8080);


function usePa11y(link, response){
    // console.log("Pally linKK: "+ link)
    pa11y(link).then((results) => {
            response.writeHead(200, headers);
            response.end(JSON.stringify({"results":results}));
    });
}
console.log(`Server running`)