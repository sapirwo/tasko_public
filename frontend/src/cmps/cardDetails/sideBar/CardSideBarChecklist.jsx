import React from 'react'

export function CardSideBarChecklist({ onAddChecklist, onChangeChecklistTitle, checklistTitle }) {
    return (
        <section className="btn-card-side-bar">
            <form onSubmit={onAddChecklist}>
                <input
                    type="text"
                    placeholder="Checklist title..."
                    className="add-checklist-input"
                    autoComplete="off"
                    title="add-checklist"
                    value={checklistTitle}
                    onChange={onChangeChecklistTitle}
                />
            </form>
        </section>
    )
}