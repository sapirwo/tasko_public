import React, { useState, useEffect } from 'react'

export function BoardChangeTitle({ board, onUpdateBoard, closeSideBar }) {

    const [boardTitle, setBoardTitle] = useState('')
    useEffect(() => { setBoardTitle(board.title) }, [board.title])

    const handleChange = ({ target }) => {
        setBoardTitle(target.value)
    }

    const onSubmit = ev => {
        ev.preventDefault()
        if (!boardTitle) return
        const updatedBoard = { ...board, title: boardTitle }
        onUpdateBoard(updatedBoard)
        closeSideBar()
    }

    return (
        <section className="board-change-title-container">
            <form onSubmit={onSubmit}>
                <label
                    htmlFor="input-new-board-title-board-side-bar">
                    New Title</label>
                <input
                    type="text"
                    id="input-new-board-title-board-side-bar"
                    placeholder="Enter new board title..."
                    onChange={handleChange}
                    value={boardTitle}
                    autoComplete="off"
                    autoFocus="on"
                />
                <button>Save</button>
            </form>
        </section>
    )
}





