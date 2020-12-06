"use strict";

module.exports = connectSockets;

function connectSockets(io) {
  io.on('connection', function (socket) {
    socket.on('boardId', function (boardId) {
      if (socket.currBoard) {
        socket.leave(socket.currBoard);
      }

      socket.join(boardId);
      socket.currBoard = boardId;
    });
    socket.on('updatedBoardClient', function (updatedBoard) {
      socket.broadcast.to(socket.currBoard).emit('updatedBoardServer', updatedBoard._id);
    });
  });
}