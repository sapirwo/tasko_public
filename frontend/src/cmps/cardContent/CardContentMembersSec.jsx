import React from 'react'
import eventBus from '../../services/event-bus-service'
import { useSelector } from 'react-redux';

export function CardContentMembersSec({ card, group }) {
    const { currBoard } = useSelector(state => state.board)

    const checkIfMemberIsOnBoard = memberToCheck => {
        const member = findMemberOnBoard(memberToCheck)
        if (!member) {
            const newCard = getCardWithoutMember(memberToCheck)
            eventBus.emit('editCard', { newCard, groupId: group.id })
        } else return true
    }

    const findMemberOnBoard = memberToFind => {
        return currBoard.members.find(member =>
            member._id === memberToFind._id)
    }

    const getCardWithoutMember = memberToRemove => {
        return {
            ...card,
            members: card.members.filter(member =>
                member._id !== memberToRemove._id)
        }
    }

    return (
        card.members.map(member => {
            return checkIfMemberIsOnBoard(member) &&
                member.imgUrl ?
                <img src={member?.imgUrl}
                    key={member._id}
                    alt="member"
                    className="img-member-on-card" />
                :
                <div className="username-on-card"
                    key={member._id}>{member.username[0].toUpperCase()}
                </div>
        })
    )
}

