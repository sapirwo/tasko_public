import React from 'react'
import { BoardSideBarMenu } from './BoardSideBarMenu'
import OutsideAlerter from '../OutsideAlerter'

export function BoardSideBar({ board, closeSideBar, onUpdateBoard, removeBoard }) {
    return (
        <section className="board-side-bar-container">
            <OutsideAlerter onClose={closeSideBar} btnToPrevent="swal">
                <div className="board-side-bar-content flex column">
                    <section className="board-side-bar-header">
                        <h2>Board Actions</h2>
                        <div
                            className="btn-close-board-side-bar"
                            onClick={closeSideBar}>&#9776;</div>
                    </section>
                    <BoardSideBarMenu
                        board={board}
                        onUpdateBoard={onUpdateBoard}
                        closeSideBar={closeSideBar}
                        removeBoard={removeBoard}
                    />
                </div>
            </OutsideAlerter>
        </section>
    )
}
