const http = require('http');
const server = http.createServer((req, res) =>{
    res.end(end)('hello');
});
server.listen(200, () =>{
    console.log('server is running.,..');
});