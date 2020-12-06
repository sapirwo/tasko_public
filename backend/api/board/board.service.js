const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('board')
    try {
        const boards = await collection.find(criteria).sort([
            ['_id', -1]
        ]).toArray();
        return boards
    } catch (err) {
        console.log('ERROR: cannot find boards')
        throw err;
    }
}

async function getById(boardId) {
    const collection = await dbService.getCollection('board')
    try {
        const board = await collection.findOne({
            "_id": ObjectId(boardId)
        })
        return board
    } catch (err) {
        console.log(`ERROR: while finding board ${boardId}`)
        throw err;
    }
}

async function remove(boardId) {
    const collection = await dbService.getCollection('board')
    try {
        await collection.deleteOne({
            "_id": ObjectId(boardId)
        })
    } catch (err) {
        console.log(`ERROR: cannot remove board ${boardId}`)
        throw err;
    }
}

async function update(board) {
    const collection = await dbService.getCollection('board')
    board._id = ObjectId(board._id);
    board.updatedAt = Date.now()
    try {
        await collection.replaceOne({
            "_id": ObjectId(board._id)
        }, board)
        return board
    } catch (err) {
        console.log(`ERROR: cannot update board ${board._id}`)
        throw err;
    }
}

async function add(board) {
    const collection = await dbService.getCollection('board')
    try {
        const boardToAdd = {
            ...board,
            createdAt: Date.now()
        }
        await collection.insertOne(boardToAdd);
        return boardToAdd;
    } catch (err) {
        console.log(`ERROR: cannot insert board`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    if (filterBy.userId) {
        return {
            "members._id": filterBy.userId
        }
    }
    return {}
}