import React from 'react'

export function CardContentCoverSec({ card }) {
    return (
        <section>
            {  card.coverUrl?.includes('youtube') ?
                <iframe title={card.title} src={card.coverUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                :
                card.coverUrl && <img src={card.coverUrl} alt="Card Cover" />
            }
            {card.coverColor && <div className={`card-cover ${card.coverColor}-cover`}></div>}
        </section>

    )
}