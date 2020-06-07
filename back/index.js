const http = require('http');

const initializeEnvVariables = require('./secrets');
initializeEnvVariables();

const port = process.env.PORT || 8085;
const app = require('./app');
const server = http.createServer(app);

server.listen(port, () => {
  console.log('SERVER STARTED ON PORT ' + port);
});
