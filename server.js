const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);

var json = '[{"x":0,"y":0,"color":2,"colorBit":false},{"x":100,"y":0,"color":15,"colorBit":false},{"x":200,"y":0,"color":15,"colorBit":false},{"x":300,"y":0,"color":15,"colorBit":false},{"x":400,"y":0,"color":2,"colorBit":false},{"x":500,"y":0,"color":15,"colorBit":false},{"x":600,"y":0,"color":15,"colorBit":false},{"x":700,"y":0,"color":15,"colorBit":false},{"x":0,"y":100,"color":15,"colorBit":false},{"x":100,"y":100,"color":2,"colorBit":false},{"x":200,"y":100,"color":15,"colorBit":false},{"x":300,"y":100,"color":2,"colorBit":false},{"x":400,"y":100,"color":15,"colorBit":false},{"x":500,"y":100,"color":15,"colorBit":false},{"x":600,"y":100,"color":15,"colorBit":false},{"x":700,"y":100,"color":15,"colorBit":false},{"x":0,"y":200,"color":15,"colorBit":false},{"x":100,"y":200,"color":15,"colorBit":false},{"x":200,"y":200,"color":2,"colorBit":false},{"x":300,"y":200,"color":15,"colorBit":false},{"x":400,"y":200,"color":15,"colorBit":false},{"x":500,"y":200,"color":15,"colorBit":false},{"x":600,"y":200,"color":15,"colorBit":false},{"x":700,"y":200,"color":15,"colorBit":false},{"x":0,"y":300,"color":15,"colorBit":false},{"x":100,"y":300,"color":15,"colorBit":false},{"x":200,"y":300,"color":2,"colorBit":false},{"x":300,"y":300,"color":15,"colorBit":false},{"x":400,"y":300,"color":15,"colorBit":false},{"x":500,"y":300,"color":15,"colorBit":false},{"x":600,"y":300,"color":15,"colorBit":false},{"x":700,"y":300,"color":15,"colorBit":false},{"x":0,"y":400,"color":15,"colorBit":false},{"x":100,"y":400,"color":2,"colorBit":false},{"x":200,"y":400,"color":2,"colorBit":false},{"x":300,"y":400,"color":2,"colorBit":false},{"x":400,"y":400,"color":15,"colorBit":false},{"x":500,"y":400,"color":15,"colorBit":false},{"x":600,"y":400,"color":15,"colorBit":false},{"x":700,"y":400,"color":15,"colorBit":false},{"x":0,"y":500,"color":15,"colorBit":false},{"x":100,"y":500,"color":2,"colorBit":false},{"x":200,"y":500,"color":15,"colorBit":false},{"x":300,"y":500,"color":2,"colorBit":false},{"x":400,"y":500,"color":15,"colorBit":false},{"x":500,"y":500,"color":15,"colorBit":false},{"x":600,"y":500,"color":15,"colorBit":false},{"x":700,"y":500,"color":15,"colorBit":false},{"x":0,"y":600,"color":15,"colorBit":false},{"x":100,"y":600,"color":2,"colorBit":false},{"x":200,"y":600,"color":15,"colorBit":false},{"x":300,"y":600,"color":2,"colorBit":false},{"x":400,"y":600,"color":15,"colorBit":false},{"x":500,"y":600,"color":15,"colorBit":false},{"x":600,"y":600,"color":15,"colorBit":false},{"x":700,"y":600,"color":15,"colorBit":false},{"x":0,"y":700,"color":15,"colorBit":false},{"x":100,"y":700,"color":15,"colorBit":false},{"x":200,"y":700,"color":15,"colorBit":false},{"x":300,"y":700,"color":15,"colorBit":false},{"x":400,"y":700,"color":15,"colorBit":false},{"x":500,"y":700,"color":15,"colorBit":false},{"x":600,"y":700,"color":15,"colorBit":false},{"x":700,"y":700,"color":15,"colorBit":false}]';;

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});
  
io.on('connection', function(socket){
    console.log('a user connected');
    socket.emit('getJSON', json);

    socket.on('sendJSON', function(msg) {
        //console.log(msg);
        console.log("Received Update Yo")
        json = msg;
        io.emit('getJSON', msg);
    });
});

http.listen(3000, () => console.log('Example app listening on port 3000!'))