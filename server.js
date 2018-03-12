// inspire form : https://github.com/academind/node-restful-api-tutorial

const http = require('http');
const app = require('./app')

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port,() => {
    console.log(`Server run on port ${port}`)
});
