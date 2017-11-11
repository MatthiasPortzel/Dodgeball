const app = require('express')();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(8080, function(){
    console.log('listening on *:8080');
});

io.on('connection', function(socket){
    socket.playerID = Math.random().toFixed(8);

    socket.on("username change", function (data) {
        console.log(`Player with id ${socket.playerID} changed username to ${data}`);
    })

    console.log(socket.playerID + " connected.")
});
