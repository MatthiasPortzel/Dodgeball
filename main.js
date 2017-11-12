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

    socket.on("username change", function (data) {
        players[socket.playerID].setUsername(JSON.parse(data).username, socket);
    })

    for (var player of players) {
        if (player && player.id !== socket.playerID) {
            player.socket.broadcast.emit("user joined", players[socket.playerID].username);
        }
    }

    socket.on('disconnect', function () {
        players[socket.playerID] = null;
        console.log(socket.playerID + " disconnected.");
    })

    console.log(socket.playerID + " connected.")
});
