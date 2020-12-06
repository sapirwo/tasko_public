import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { CardContent } from '../cardContent/CardContent'

export function CardPreview({ card, idx, group }) {

    return (
         <Draggable draggableId={card.id} index={idx}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref= {provided.innerRef}
                > 
                     <CardContent 
                     card={card} 
                     group={group}
                     />
                 </div>
            )} 
        </Draggable>
    )
}
