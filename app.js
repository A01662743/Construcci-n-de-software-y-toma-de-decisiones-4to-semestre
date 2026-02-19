console.log("Hola desde node!");

const filesystem = require("fs");

filesystem.writeFileSync('hola.txt', 'Hola desde node');

const http = require('http');
const server =http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
})

server.listen(3000);