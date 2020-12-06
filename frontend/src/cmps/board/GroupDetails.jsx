import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { AddItem } from '../AddItem'
import { GroupHeader } from './GroupHeader'
import { CardList } from './CardList'


export class GroupDetails extends Component {

    state = {
        scrollDownToggle: false
    }

    onScrollCardsContainer = () => {
        const { scrollDownToggle } = this.state
        this.setState({ scrollDownToggle: !scrollDownToggle })
    }
    render() {
        const { group, onAddCard, onCardDetails, onRemoveGroup,
            onEditGroup, index, isDragStart } = this.props
        const { scrollDownToggle } = this.state

        return (
            <section className="group-wrapper">
                {!group.cards &&
                    <div className="group">
                        <div className="group-header">
                            <h2>{group.title}</h2>
                        </div>
                    </div>

                }
                {group.cards &&
                    (<Draggable draggableId={group.id} index={index}>
                        {provided => (
                            <div className="group"
                                {...provided.draggableProps}
                                ref={provided.innerRef}

                            >
                                <GroupHeader
                                    group={group}
                                    onRemoveGroup={onRemoveGroup}
                                    onEditGroup={onEditGroup}
                                    provided={provided}
                                />
                                <Droppable droppableId={group.id} type="task">
                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            <CardList
                                                group={group}
                                                onCardDetails={onCardDetails}
                                                isScrolledDown={scrollDownToggle}
                                                onScrollDown={this.onScrollCardsContainer}
                                                isDragStart={isDragStart}
                                            />
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                                <AddItem
                                    onAddItem={onAddCard}
                                    groupId={group.id}
                                    onScrollDown={this.onScrollCardsContainer}
                                />
                            </div>
                        )}
                    </Draggable>)
                }
            </section>
        )
    }
}
