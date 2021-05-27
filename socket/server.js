const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');


let broadcaster = [];

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on("error", e => console.log(e));


// Set static folder
const botName = {
  username: 'channel',
  name: 'channel',
  avatar: '/icon.png'
};


// Run when client connects
io.on('connection', socket => {

// Streaming

socket.on("broadcaster", ({ room }) => {
  broadcaster[room] = socket.id;
  socket.broadcast.emit("broadcaster");
});

socket.on("watcher", ({ room }) => {
  socket.to(broadcaster[room]).emit("watcher", socket.id);

});
socket.on("offer", (id, message) => {
  socket.to(id).emit("offer", socket.id, message);
});
socket.on("answer", (id, message) => {
  socket.to(id).emit("answer", socket.id, message);
});
socket.on("candidate", (id, message) => {
  socket.to(id).emit("candidate", socket.id, message);
});


  // Chat App
  
  socket.on('joinRoom', ({ user, room }) => {
    const u = userJoin(socket.id, user, room);

    socket.join(room);

    // Send users and room info
    io.to(room).emit('roomUsers', {
      room: room,
      users: getRoomUsers(room)
    });
    
    // Broadcast when a user connects
    socket.broadcast
      .to(room)
      .emit(
        'activity',
        formatMessage(room, botName, {
          type: 1,
          text: `@${u.user.username} has joined the channel`
        })
      );

  
  });

  // Listen for chatMessage
  socket.on('sendMessage', req => {

    const u = getCurrentUser(socket.id);

    io.to(req.room).emit('message', formatMessage(req.room, u.user, req.data));

  });
  

  socket.on('streamingend', ({room}) => {
    socket.to(broadcaster[room]).emit("disconnectPeer", socket.id);

  });
  // Runs when client disconnects
  socket.on('disconnect', () => {



      const u = userLeave(socket.id);

    
      if (u) {

          // Send users and room info
          io.to(u.room).emit('roomUsers', {
            room: u.room,
            users: getRoomUsers(u.room).filter(us => us.user.username !== u.user.username)
          });
          
          
        // console.log(`@ ${u.user.username} has left the channel`)
        io.to(u.room).emit(
          'activity',
          formatMessage(u.room, botName, {
            type: 0,
            text: `@ ${u.user.username} has left the channel`
          })
        );
      }
      
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));