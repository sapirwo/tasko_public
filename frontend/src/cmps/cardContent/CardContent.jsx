import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLabelsDisplay } from '../../store/actions/boardActions';
import { CardContentCoverSec } from './CardContentCoverSec';
import { CardContentMembersSec } from './CardContentMembersSec';
import { CardContentLabelsSec } from './CardContentLabelsSec';
import { CardContentChecklistSec } from './CardContentChecklistSec';
import { CardContentDueDateSec } from './CardContentDueDateSec';

export function CardContent({ card, group }) {

    const dispatch = useDispatch()
    const { isLabelsFullDisplay, currBoard } = useSelector(state => state.board)
    const cardBgc = card.bgc && card.bgc

    const toggleLabelsView = ev => {
        ev.stopPropagation()
        dispatch(toggleLabelsDisplay())
    }

    const getLabelTitle = lableId => {
        const currLabel = currBoard.labels.find(label => label.id === lableId)
        return currLabel?.title
    }

    return (
        <section className={`card-content ${cardBgc && `${cardBgc}-bgc`}`} >
            {(card.coverUrl || card.coverColor) &&
                <CardContentCoverSec card={card} />
            }
            {card.members &&
                <CardContentMembersSec card={card} group={group} />
            }
            {card.labels &&
                <CardContentLabelsSec
                    card={card}
                    isLabelsFullDisplay={isLabelsFullDisplay}
                    toggleLabelsView={toggleLabelsView}
                    getLabelTitle={getLabelTitle}
                />
            }
            <p>{card.title}</p>
            <CardContentChecklistSec card={card} />
            {card.dueDate &&
                <CardContentDueDateSec card={card} />
            }
        </section>
    )
}
