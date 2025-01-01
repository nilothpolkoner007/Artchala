import { Server } from 'socket.io';
import { config } from '../config/index.js';

export const initializeWebSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: config.corsOrigin,
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    socket.on('join-chat', (roomId) => {
      socket.join(roomId);
    });

    socket.on('send-message', (message) => {
      io.to(message.roomId).emit('new-message', message);
    });
  });

  return io;
};