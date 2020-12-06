import React from 'react'
import { useSelector } from 'react-redux';


export function CardDetailsLabelsSec({ card, onEditLabelColor }) {
    const { currBoard } = useSelector(state => state.board)

    const getLabelTitle = lableId => {
        const currLabel = currBoard.labels.find(label => label.id === lableId)
        return currLabel.title
    }

    return (
        <section className="card-details-labels-container">
            <div >
                {card.labels.map(label =>
                    <div
                        key={label.id}
                        className={`${label.color}-label card-details-label btnToPrevent`}
                        onClick={() => onEditLabelColor(label)}
                    >
                        {label.title && <div className="btnToPrevent">{getLabelTitle(label.id)}</div>}
                    </div>
                )}
            </div>
        </section>
    )
}