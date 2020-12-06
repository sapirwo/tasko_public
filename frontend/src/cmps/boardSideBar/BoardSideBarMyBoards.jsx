import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadBoards } from '../../store/actions/boardActions';
import { Loader } from '../Loader';
import { useHistory } from "react-router-dom";

export function BoardSideBarMyBoards({ board, closeSideBar }) {
    const dispatch = useDispatch()
    const history = useHistory();
    const boards = useSelector(state => state.board.boards)
    useEffect(() => {
        loadUserBoards() // eslint-disable-next-line
    }, [])

    const loadUserBoards = () => {
        dispatch(loadBoards())
    }

    const onGoToBoard = boardId => {
        if (boardId === board._id) {
            closeSideBar()
            return
        }
        history.push(`/board/${boardId}`)
        closeSideBar()
    }

    if (!boards) return (<Loader />)
    return (
        < section className="my-boards-container" >
            <div className="my-boards-content">
                {boards.map((board, idx) => {
                    return (
                        <section key={idx} className="board-preview" onClick={() => onGoToBoard(board._id)}>
                            <h3>{board.title}</h3>
                            <img className="board-img" src={board.bgImgUrl} alt={board.title} />
                            <div className="member-imgs-container">
                                {board.members?.map(member =>
                                    <img className="member-img" key={member._id} src={member.imgUrl} alt="member" />)}
                            </div>
                        </section>
                    )
                })}
            </div>
        </section >
    )
}