var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3000);

function handler (req, res) {
  // // // fs.readFile(__dirname + '/src/index.html',
  // // function (err, data) {
  // //   if (err) {
  // //     res.writeHead(500);
  // //     return res.end('Error loading index.html');
  // //   }
  // //   res.writeHead(200);
  // //   res.end(data);
  // };
}

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    // socket.on('my other event', function (data) {
    //     console.log(data);
    // });
    var n = "";
    socket.on('name', function(name){
        n = name
    });

    socket.on('clientMessage',function(content){
        console.log(content)
        
        socket.emit('serverMessage','你 : ' + content);
        socket.broadcast.emit('serverMessage', n + ' : ' + content);

    })
});
      
