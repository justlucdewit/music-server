const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    console.log(__dirname + '\index.html')
    res.sendFile(__dirname + '\\frontend\\src\\index.html');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});