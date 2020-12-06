const express = require('express')
const {requireAuth} = require('../../middlewares/requireAuth.middleware')
const {getBoard, getBoards, deleteBoard, updateBoard, addBoard} = require('./board.controller')
const router = express.Router()

router.get('/',requireAuth, getBoards)
router.post('/',requireAuth, addBoard)
router.get('/:id',requireAuth, getBoard)
router.put('/:id',requireAuth,  updateBoard)
router.delete('/:id',requireAuth, deleteBoard)
router.put('/:id',  requireAuth, updateBoard)

module.exports = router