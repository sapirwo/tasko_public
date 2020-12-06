import React from 'react'

export function CardDetailsHeader({
    onCloseCardDetails,
    onChangeCardTitle,
    newTitle,
    onHandleChangeCardTitle,
    group
}) {
    return (
        <header className="card-details-header">
            <div className="btn-close-card-details-container">
                <button onClick={(ev) => onCloseCardDetails(ev)}
                    className="btn-close-card-details">
                </button>
            </div>
            <form onSubmit={onChangeCardTitle}>
                <input
                    className="input-card-title"
                    type="text"
                    value={newTitle}
                    onChange={onHandleChangeCardTitle}
                    autoComplete="off"
                    onBlur={onChangeCardTitle}
                />
            </form>
            <p>in group <span>{group.title}</span></p>
        </header>
    )
}