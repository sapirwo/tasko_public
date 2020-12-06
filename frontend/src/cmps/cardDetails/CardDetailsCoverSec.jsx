import React from 'react'
import utillsService from '../../services/utillsService'
export function CardDetailsCoverSec({ card, onToggleCoverModal }) {
    const { title } = card
    const coverColor = card.coverColor && card.coverColor
    const coverUrl = card.coverUrl && card.coverUrl
    const img = coverUrl && utillsService.formatImgLink(coverUrl)
    const video = coverUrl && utillsService.formatYoutubeLink(coverUrl)

    return (
        <section className="card-details-cover-container ">
            {img && <img className="btnToPrevent" onClick={onToggleCoverModal} src={coverUrl} alt="Cover" />}
            {video && <iframe title={title} src={coverUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
            {coverColor && <div  onClick={onToggleCoverModal} className={`btnToPrevent cover-color ${coverColor}-cover`}></div>}
        </section>
    )
}