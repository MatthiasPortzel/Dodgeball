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

    socket.on("username input", function (data) {
        username = JSON.parse(data).username;

        //If they already have a username refuse to change it
        if (player.username !== undefined) return;

        player.setUsername(username);
        socket.broadcast.emit("user joined", JSON.stringify(player.toObj()));

        socket.emit("init", JSON.stringify({
            players: players.map(p => p ? p.toObj() : null),
            player: player.toObj()
        }));
    })

    socket.on('disconnect', function () {
        socket.broadcast.emit("player left", JSON.stringify(player.toObj()))
        players[player.id] = null;
        console.log(socket.playerID + " disconnected.");
    })

    console.log(socket.playerID + " connected.")
});
