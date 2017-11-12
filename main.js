const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const Player = require('./player.js').Player;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

http.listen(8080, function(){
    console.log('listening on *:8080');
});

var players = [];

io.on('connection', function(socket) {
    socket.playerID = players.length;
    players.push(new Player(players.length, socket));
    var player = players[socket.playerID];

    socket.on("username change", function (data) {
        data = JSON.parse(data);
        if (player.username !== undefined) return;

        player.setUsername(data.username, socket);
        socket.broadcast.emit("user joined", player.toJSON());
    })

    socket.on('disconnect', function () {
        players[socket.playerID] = null;
        console.log(socket.playerID + " disconnected.");
    })

    console.log(socket.playerID + " connected.")
});

process.on("SIGINT", function () {
    io.emit("closing");
    io.close();
    process.exit();
});
