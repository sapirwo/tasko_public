import React from 'react'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
export function CardContentChecklistSec({ card }) {
    return (
        <section className="card-content-icons flex justify-start align-center">
            {card.isCompleted && <span className='card-content-card-completed far fas fa-check'></span>}
            {card.description && <span>&#9776;</span>}
            {card.checklist && card.checklist.totalTodos &&
                <span className="card-content-checklist flex align-center" >
                    <AssignmentTurnedInOutlinedIcon />
                    <span className="checklist-preview">
                        {card.checklist.doneTodos}/{card.checklist.totalTodos}
                    </span>
                </span>
            }
        </section>
    )
}