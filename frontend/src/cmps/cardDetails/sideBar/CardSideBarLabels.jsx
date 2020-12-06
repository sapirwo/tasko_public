import React from 'react'

export function CardSideBarLabels({ onToggleCardLabel }) {
    return (
        <React.Fragment>
            <div className="card-details-labels btn-card-side-bar">
                <div title="add-label" onClick={() => onToggleCardLabel('red')} className="red-label card-edit-square"></div>
                <div title="add-label" onClick={() => onToggleCardLabel('green')} className="green-label card-edit-square"></div>
                <div title="add-label" onClick={() => onToggleCardLabel('yellow')} className="yellow-label card-edit-square"></div>
            </div>
            <div className="card-details-labels btn-card-side-bar">
                <div title="add-label" onClick={() => onToggleCardLabel('blue')} className="blue-label card-edit-square"></div>
                <div title="add-label" onClick={() => onToggleCardLabel('purple')} className="purple-label card-edit-square"></div>
                <div title="add-label" onClick={() => onToggleCardLabel('orange')} className="orange-label card-edit-square"></div>
            </div>
        </React.Fragment>
    )
}
