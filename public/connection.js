const socket = io();

socket.on('getJSON', function(msg){
    console.log("Received JSON yo");
    jsonString = msg;
    readJson(msg);
});

canvas.addEventListener('click', () => {
    let json = generateJson();
    console.log("Sending JSON yo");
    socket.emit('sendJSON', json);
});