import React from 'react'

export function CardSideBarBgcs({ onToggleCardBgc, card }) {
    const checkStyle = 'far fas fa-check'
    return (
        <React.Fragment>
            <div className="card-details-bgcs btn-card-side-bar">
                <div onClick={onToggleCardBgc} className={`red-bgc card-edit-square ${card.bgc && card.bgc === 'red' && checkStyle}`}></div>
                <div onClick={onToggleCardBgc} className={`green-bgc card-edit-square ${card.bgc && card.bgc === 'green' && checkStyle}`}></div>
                <div onClick={onToggleCardBgc} className={`yellow-bgc card-edit-square ${card.bgc && card.bgc === 'yellow' && checkStyle}`}></div>
            </div>
            <div className="card-details-bgcs btn-card-side-bar">
                <div onClick={onToggleCardBgc} className={`blue-bgc card-edit-square ${card.bgc && card.bgc === 'blue' && checkStyle}`}></div>
                <div onClick={onToggleCardBgc} className={`purple-bgc card-edit-square ${card.bgc && card.bgc === 'purple' && checkStyle}`}></div>
                <div onClick={onToggleCardBgc} className={`orange-bgc card-edit-square ${card.bgc && card.bgc === 'orange' && checkStyle}`}></div>
            </div>
        </React.Fragment>
    )
}
