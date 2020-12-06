import React from 'react'

export function CardDetailsMemberSec({ card, onToggleMembersModal }) {

    return (
        <section className="card-details-member-imgs-container">
            <div>
                {card.members.length > 0 && <h3>MEMBERS</h3>}
                {card.members?.map((member, idx) =>
                    <div key={idx} className="member-img-in-card-details" onClick={onToggleMembersModal}>
                        <img src={member.imgUrl} alt={member.fullName} className="btnToPrevent"/>
                    </div>
                )}
            </div>
        </section>
    )
}