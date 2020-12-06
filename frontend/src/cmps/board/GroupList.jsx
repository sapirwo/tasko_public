import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GroupDetails } from './GroupDetails'
import { AddItem } from '../AddItem'
import { updateBoard, loadBoard } from '../../store/actions/boardActions'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


class _GroupList extends Component {

    state = {
        isDragStart: false
    }

    onDragEnd = result => {
        this.setState({ isDragStart: false })
        const { currBoard, onEditGroup, updateBoard } = this.props
        const { destination, source, draggableId, type } = result
        if (!destination || (destination.droppableId === source.droppableId &&
            destination.index === source.index)) {
            return
        }
        if (type === 'group') {
            const newGroupOrder = Array.from(currBoard.groups)
            const groupToMove = newGroupOrder.find(group => group.id === draggableId)
            newGroupOrder.splice(source.index, 1)
            newGroupOrder.splice(destination.index, 0, groupToMove)
            const updatedBoard = { ...currBoard, groups: newGroupOrder }
            updateBoard(updatedBoard)
            return
        }
        const startGroupId = source.droppableId
        const endGroupId = destination.droppableId
        const startGroup = currBoard.groups.find(group => group.id === startGroupId)
        const startGroupCard = startGroup.cards.find(card => card.id === draggableId)
        const endGroup = currBoard.groups.find(group => group.id === destination.droppableId)
        const endGroupCard = endGroup.cards.find(card => card.id === draggableId)
        if (endGroupId === startGroupId) {
            const newCards = Array.from(endGroup.cards)
            newCards.splice(source.index, 1)
            newCards.splice(destination.index, 0, endGroupCard)
            const newGroup = { ...endGroup, cards: newCards }
            onEditGroup(newGroup)
            return
        }
        else if (endGroupId !== startGroupId) {
            const newCardsStart = Array.from(startGroup.cards)
            newCardsStart.splice(source.index, 1)
            const newStartGroup = { ...startGroup, cards: newCardsStart }
            const newCardsEnd = Array.from(endGroup.cards)
            newCardsEnd.splice(destination.index, 0, startGroupCard)
            const newEndGroup = { ...endGroup, cards: newCardsEnd }
            this.onEditGroups(newStartGroup, newEndGroup, startGroupId, endGroupId)
        }
    };

    onDragStart = result => {
        const { type } = result
        if (type === 'group') return
        else this.setState({ isDragStart: true })
    }

    onEditGroups = (startGroup, endGroup, startGroupId, endGroupId) => {
        const { currBoard, updateBoard } = this.props
        const startGroupIdx = currBoard.groups.findIndex(group => group.id === startGroupId)
        const endGroupIdx = currBoard.groups.findIndex(group => group.id === endGroupId)
        const board = {
            ...currBoard, groups: currBoard.groups.map((group, idx) => {
                if (idx === startGroupIdx) {
                    return startGroup
                } else if (idx === endGroupIdx) {
                    return endGroup
                }
                return group
            })
        }
        updateBoard(board)
    }

    render() {
        const { currBoard, onAddCard, onCardDetails,
            onRemoveGroup, onEditGroup, onAddGroup } = this.props
        const { groups } = currBoard
        const { isDragStart } = this.state

        return (
            <section className="groups-container-wrapper">
                <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
                    <Droppable droppableId="all-groups" direction="horizontal" type="group">
                        {provided => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="groups-container"
                            >
                                {
                                    groups.map((group, index) =>
                                        <GroupDetails
                                            key={group.id}
                                            group={group}
                                            onAddCard={onAddCard}
                                            onCardDetails={onCardDetails}
                                            onRemoveGroup={onRemoveGroup}
                                            onEditGroup={onEditGroup}
                                            index={index}
                                            isDragStart={isDragStart}
                                        />)
                                }
                                <AddItem onAddItem={onAddGroup} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </section>
        )
    }
}

const mapDispatchToProps = {
    updateBoard,
    loadBoard
}

export const GroupList = connect(null, mapDispatchToProps)(_GroupList)
