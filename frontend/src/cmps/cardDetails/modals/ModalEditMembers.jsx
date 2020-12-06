import React from 'react'
import OutsideAlerter from '../../OutsideAlerter'

export function ModalEditMembers({ members, onToggleMembersModal, onToggleMember,
    assignMembers, originCmp }) {

    return (
        <section className={`modal-edit-members-container ${originCmp}`}>
            <OutsideAlerter onClose={onToggleMembersModal} btnToPrevent="btnToPrevent">
                <section>
                    <h2>{((originCmp === 'card-details-cmp') && 'Members') || 'USERS'}</h2>
                    <div onClick={onToggleMembersModal} className="modal-edit-members-close-btn"></div>
                    <h3>{((originCmp === 'card-details-cmp') && 'BOARD MEMBERS') || 'ADD USERS TO BOARD'}</h3>
                    {members &&
                        <div className="members-container-in-edit-members-modal">
                            {members.map(member =>
                                <div className="member-in-edit-members-modal"
                                    key={member._id}
                                    onClick={() => onToggleMember(member)}>
                                    {member.imgUrl ?
                                        <img src={member.imgUrl} alt="member" />
                                        :
                                        <div className="username-in-edit-members-modal">{member.username[0].toUpperCase()}</div>
                                    }
                                    <p>{member.fullName}</p>
                                    {assignMembers && assignMembers.find(assignMember => assignMember._id === member._id) &&
                                        <div className="member-asigned-to-card far fas fa-check"></div>
                                    }
                                </div>
                            )}
                        </div>
                    }
                </section>
            </OutsideAlerter>
        </section>
    )
}



