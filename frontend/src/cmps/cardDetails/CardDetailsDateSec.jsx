import React from 'react'
import { CardDatePicker } from './sideBar/CardDatePicker'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
export function CardDetailsDateSec({ card, onAddDueDate, onRemoveDueDate }) {
    return (
        <section className="card-details-date-container">
            <div className="card-details-date-content flex align-center">
                <CardDatePicker onAddDueDate={onAddDueDate} card={card} label="Due Date" />
                <span className="icon-cancel" onClick={(onRemoveDueDate)}>
                    <RemoveCircleOutlineIcon />
                </span>
            </div>
        </section>
    )
}