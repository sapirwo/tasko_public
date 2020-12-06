module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('boardId', boardId => {
            if (socket.currBoard) {
                socket.leave(socket.currBoard)
            }
            socket.join(boardId)
            socket.currBoard = boardId;
        })
        socket.on('updatedBoardClient', updatedBoard => {
            socket.broadcast.to(socket.currBoard).emit('updatedBoardServer', updatedBoard._id)
        })
    })
}