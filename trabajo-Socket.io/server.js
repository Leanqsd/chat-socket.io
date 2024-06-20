const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io') (server);

let messages = []

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);
    socket.on('new-message', function(data) {
    messages.push(data);
    io.sockets.emit('messages', messages);
    });
});

app.use(express.static('./public'));

app.get('/'), (req, res) => {
    res.sendFile('index.html', {root: __dirname}
)}

server.listen(8080, () => {
    console.log('servidor corriendo en http://localhost:8080');
});
