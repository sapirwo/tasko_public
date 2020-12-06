import boardService from "../../services/boardService"
import socketService from '../../services/socketService';

export {
    loadBoards,
    loadBoard,
    saveBoard,
    updateBoard,
    removeBoard,
    addBoard,
    toggleLabelsDisplay
}

function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.query();
            dispatch({
                type: 'SET_BOARDS',
                boards: boards
            });

        } catch (err) {
            console.log('BordActions: err in loadBoards', err);
        }
    };
}

function loadBoard(boardId) {
    return async dispatch => {
        try {
            const board = await boardService.getById(boardId);
            dispatch({
                type: 'SET_CURR_BOARD',
                currBoard: board
            });
        } catch (err) {
            console.log('BordActions: err in loadBoard', err);
        }
    };
}

function saveBoard(_board) {
    return async dispatch => {
        try {
            const board = await boardService.save(_board)
            dispatch({
                type: 'SET_CURR_BOARD',
                currBoard: board
            });
            return board
        } catch (err) {
            console.log('BordActions: err in saveBoard', err);
        }
    }
}

function updateBoard(board) {
    return async dispatch => {
        try {
            dispatch({
                type: 'SET_CURR_BOARD',
                currBoard: board
            });
            await boardService.updateBoard(board)
            socketService.emit('updatedBoardClient', board);
        } catch (err) {
            console.log('BordActions: err in updateBoard', err);
        }
    }
}

function removeBoard(boardId) {
    return async dispatch => {
        try {
            await boardService.remove(boardId);
            dispatch({
                type: 'BOARD_REMOVE',
                boardId
            });
        } catch (err) {
            console.log('BoardActions: err in removeBoard', err);
        }
    };
}

function addBoard(_board) {
    return async dispatch => {
        try {
            const board = await boardService.save(_board)
            dispatch({
                type: 'ADD_BOARD',
                board
            });
        } catch (err) {
            console.log('BoardActions: err in addBoard', err);
        }
    }
}

function toggleLabelsDisplay() {
    return async dispatch => {
        try {
            dispatch({
                type: 'TOGGLE_LABEL_DISPLAY'
            })
        } catch (err) {
            console.log('BoardActions: err in toggleLabelDisplay', err)
        };
    }
}