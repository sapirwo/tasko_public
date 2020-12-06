const boardService = require('./board.service')
const logger = require('../../services/logger.service')

async function getBoard(req, res) {
    const board = await boardService.getById(req.params.id)
    res.send(board)
}

async function getBoards(req, res) {
    const boards = await boardService.query(req.query)
    logger.debug(boards);
    res.send(boards)
}
async function addBoard(req, res) {
    const board = await boardService.add(req.body)
    logger.debug(board);
    res.send(board)
}

async function deleteBoard(req, res) {
    await boardService.remove(req.params.id)
    res.end()
}

async function updateBoard(req, res) {
    const board = req.body;
    await boardService.update(board)
    res.send(board)
}

module.exports = {
    getBoard,
    getBoards,
    addBoard,
    deleteBoard,
    updateBoard
}