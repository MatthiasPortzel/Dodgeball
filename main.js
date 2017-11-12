const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const Player = require('./player.js').Player;
const Projectile = require('./projectile.js').Projectile;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

http.listen(8080, function(){
    console.log('listening on *:8080');
});

var players = [];
var projectiles = [];
var leftTeam = 0;
var rightTeam = 0;

io.on('connection', function(socket) {
    socket.playerID = players.length;

    var team;
    if (leftTeam === rightTeam) {
        team = [-1, 1][Math.round(Math.random())];
    }else {
        team = leftTeam < rightTeam ? -1 : 1;
    }

    if (team === -1) {
        leftTeam ++;
    }else {
        rightTeam ++;
    }

    players.push(new Player(players.length, team));
    var player = players[socket.playerID];

    socket.on("username input", function (data) {
        username = JSON.parse(data).username;

        //If they already have a username refuse to change it
        if (player.username !== undefined) return;

        player.setUsername(username);
        socket.broadcast.emit("user joined", JSON.stringify(player.toObj()));

        socket.emit("init", JSON.stringify({
            players: players.map(p => p ? p.toObj() : null),
            projectiles: projectiles.map(p => p.toObj()),
            player: player.toObj()
        }));
    });

    socket.on('disconnect', function () {
        socket.broadcast.emit("player left", JSON.stringify(player.toObj()));
        if (player.team === -1) {
            leftTeam --;
        }else {
            rightTeam --;
        }
        players[player.id] = null;
        console.log(socket.playerID + " disconnected.");
    });

    socket.on("move", function (y) {
        y = parseInt(y, 10);
        if (y && Math.abs(player.y - y) === 2 && y > 0 && y < 450 - 20) {
            player.y = y;
            socket.broadcast.emit("move", socket.playerID + "@" + y);
        }else {
            console.log(player.y, y);
        }
    });

    socket.on("shoot", function (angle) {
        if (player.ammoCount === 0) return;
        var p = new Projectile(
            player.team === -1 ? Player.width/2 : 720 - Player.height/2,
            player.y + Player.height/2,
            parseFloat(angle, 10),
            player.id)
        projectiles.push(p);
        player.ammoCount --;
        socket.broadcast.emit("shoot", JSON.stringify(p.toObj()));
    });

    setInterval(function () {
        for (var p of projectiles) {
            p.update();
        }
    }, 1000);

    console.log(socket.playerID + " connected.")
});
