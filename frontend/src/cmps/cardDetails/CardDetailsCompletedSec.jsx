import React from 'react'

export function CardDetailsCompletedSec({ onToggleIsCardCompleted, isCompleted }) {
    const isCardCompletedClass = isCompleted ? 'card-details-checked' : 'card-details-unchecked'
    return (
        < section className="card-details-card-completed flex" >
            <div
                className={isCardCompletedClass}
                onClick={onToggleIsCardCompleted}>
            </div>
            <p onClick={onToggleIsCardCompleted}>Completed Card</p>
        </section >
    )
}