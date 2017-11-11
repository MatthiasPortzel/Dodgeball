const app = require('express')();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const Player = require('./player.js').Player;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(8080, function(){
    console.log('listening on *:8080');
});

var players = [];

io.on('connection', function(socket) {
    socket.playerID = players.length;
    players.push(new Player(players.length));

    socket.on("username change", function (data) {
        console.log(`Player with id ${socket.playerID} changed username to ${JSON.parse(data).username}`);

    })

    console.log(socket.playerID + " connected.")
});
