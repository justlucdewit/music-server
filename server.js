const express = require('express');
const bodyParser = require('body-parser')
const uuid = require('uuid');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const sessions = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\frontend\\src\\index.html');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '\\frontend\\src\\style.css');
});

app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + '\\frontend\\src\\main.js');
});

app.post('/login', (req, res) => {
    const userId = uuid.v4();
    const user = {
        id: userId,
        name: req.body.name
    }

    sessions.push(user);

    res.send(user);
})

app.get('/sessions', (req, res) => {
    res.send(sessions);
});

io.on('connection', (socket) => {
    socket.on('play_note', msg => {
        console.log('[play_note] message: ' + msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});