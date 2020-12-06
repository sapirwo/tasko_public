import asyncStorageService from './asyncStorageService';
import httpService from './httpService'


export default {
    query,
    getById,
    remove,
    save,
    updateBoard
}

function query(loggedInUser) {
    const user = loggedInUser || JSON.parse(sessionStorage.getItem('user'))
    if (!user) return asyncStorageService.query('boards');
    return httpService.get(`board?userId=${user._id}`);
}

function getById(boardId, loggedInUser) {
    const user = loggedInUser || JSON.parse(sessionStorage.getItem('user'))
    if (!user) return asyncStorageService.get(boardId);
    return httpService.get(`board/${boardId}`)
}

function remove(boardId, loggedInUser) {
    const user = loggedInUser || JSON.parse(sessionStorage.getItem('user'))
    if (!user) return asyncStorageService.remove(boardId);
    return httpService.delete(`board/${boardId}`)
}

function save(board, loggedInUser) {
    const user = loggedInUser || JSON.parse(sessionStorage.getItem('user'))
    if (!user) return asyncStorageService.post(board);
    return httpService.post('board', board)
}

function updateBoard(board, loggedInUser) {
    const user = loggedInUser || JSON.parse(sessionStorage.getItem('user'))
    if (!user) return asyncStorageService.put(board);
    return httpService.put(`board/${board._id}`, board)
}