const initialState = {
    boards: [],
    currBoard: null,
    isLabelsFullDisplay: true,
}

export default function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return {
                ...state,
                boards: action.boards
            }
        case 'SET_CURR_BOARD':
            return {
                ...state,
                currBoard: action.currBoard
            }
        case 'BOARD_REMOVE':
            return {
                ...state,
                boards: state.boards.filter(board => board._id !== action.boardId)
            }
        case 'ADD_BOARD':
            return {
                ...state,
                boards: [action.board, ...state.boards]
            }
        case 'TOGGLE_LABEL_DISPLAY':
            return {
                ...state,
                isLabelsFullDisplay: !state.isLabelsFullDisplay
            }
        default:
            return state;
    }
}