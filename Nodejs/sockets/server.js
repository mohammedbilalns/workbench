import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const users = new Set();

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  socket.on('join', (username) => {
    socket.username = username;
    users.add(username);
    io.emit('userJoined', username)
    io.emit('userList', Array.from(users));


  })

  socket.on('message', (message) => {
    io.emit('message', message);
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);

    users.forEach((user) => {
      if (user === socket.username) {
        users.delete(user);
        io.emit('userLeft', user);
      }
    });
    io.emit('userList', Array.from(users));
  });


})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

