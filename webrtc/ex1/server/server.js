import express from 'express';
import { createServer } from "node:http";
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (origin.startsWith("http://localhost:")) {
        return callback(null, true);
      }
      callback(new Error('Not allowed by CORS'));
    }
  }
});

io.on("connection", (socket) => {
  console.log(`[SERVER] ✅ User connected: ${socket.id}`);

  socket.on("join-room", (roomId) => {
    console.log(`[SERVER] User ${socket.id} is joining room: ${roomId}`);
    socket.join(roomId);
    
    // Notify others in the room that a new user has joined
    socket.to(roomId).emit("user-joined", socket.id);
  });

  socket.on("offer", (data) => {
    console.log(`[SERVER] Relaying offer from ${socket.id} in room ${data.roomId}`);
    socket.to(data.roomId).emit("offer", { offer: data.offer, from: socket.id });
  });

  socket.on("answer", (data) => {
    console.log(`[SERVER] Relaying answer from ${socket.id} in room ${data.roomId}`);
    socket.to(data.roomId).emit("answer", { answer: data.answer, from: socket.id });
  });

  socket.on("ice-candidate", (data) => {
    console.log(`[SERVER] Relaying ICE candidate from ${socket.id} in room ${data.roomId}`);
    socket.to(data.roomId).emit("ice-candidate", { candidate: data.candidate, from: socket.id });
  });

  socket.on("disconnect", (reason) => {
    console.log(`[SERVER] ❌ User disconnected: ${socket.id}. Reason: ${reason}`);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`[SERVER] Server is running on http://localhost:${PORT}`);
});
