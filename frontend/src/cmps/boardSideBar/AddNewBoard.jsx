import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addBoard } from '../../store/actions/boardActions'
import utillsService from '../../services/utillsService'

export function AddNewBoard({ goToMyBoards }) {

    const [title, setTitle] = useState('')
    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        setTitle(target.value)
    }

    const onSubmit = async ev => {
        ev.preventDefault()
        if (!title) return
        const newBoard = utillsService.getEmptyBoard(title, loggedInUser)
        dispatch(addBoard(newBoard))
        goToMyBoards()
    }

    return (
        <section className="add-new-board-container">
            <form onSubmit={onSubmit}>
                <label
                    htmlFor="input-new-board-title">
                    New Board</label>
                <input
                    type="text"
                    id="input-new-board-title"
                    placeholder="Enter title..."
                    name="New board title"
                    onChange={(ev) => handleChange(ev)}
                    autoComplete="off"
                    autoFocus="on"
                />
                <button>Save</button>
            </form>
        </section>
    )
}