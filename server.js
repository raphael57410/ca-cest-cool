require('dotenv').config();
const http = require('http');

const app = require('./back/app.js');

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
    console.log(`app is running: http:// localhost: ${process.env.PORT || 3000}`);
});