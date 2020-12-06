import React from 'react'

export function CardDetailsDescSec({ handleSubmit, onEditDescription, onChangeEditDesc, card, isEditDescMode, newDesc }) {
    return (
        <section>
            <form onSubmit={handleSubmit}
                className="card-details-description-section"
                id="description-form"
            >
                <label className="flex">Description</label>
                <textarea
                    form="description-form"
                    cols="50" rows="3"
                    placeholder={card.description ? card.description : "Add a more detailed description..."}
                    onFocus={onEditDescription}
                    onBlur={onEditDescription}
                    title="save-description"
                    spellCheck="false"
                    onChange={onChangeEditDesc}
                    value={newDesc}
                />
                <button
                    className={`btn-save-description ${isEditDescMode ? 'shown' : 'hidden'}`}
                    title="save-description"
                >Save</button>
            </form>
        </section>
    )
}