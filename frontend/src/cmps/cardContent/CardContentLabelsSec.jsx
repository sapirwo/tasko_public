import React from 'react'

export function CardContentLabelsSec({ card,  toggleLabelsView, isLabelsFullDisplay, getLabelTitle}) {
    return (
        <section className="card-labels-wrapper flex">
            {
                card.labels.map(label =>
                    <div
                        key={label.id}
                        className={`card-label ${label.color}-label ${isLabelsFullDisplay && 'label-full-display'}`}
                        onClick={(ev) => toggleLabelsView(ev)}
                    >
                        {isLabelsFullDisplay && label.title && getLabelTitle(label.id)}
                    </div>)
            }
        </section>
    )
}