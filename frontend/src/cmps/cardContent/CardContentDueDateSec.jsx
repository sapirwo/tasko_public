import React from 'react'
import utillsService from '../../services/utillsService'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
export function CardContentDueDateSec({ card }) {
    return (
        <section>
            {new Date(card.dueDate) > new Date() ?
                <div className="card-content-date-container flex align-center">
                    <QueryBuilderIcon /><p>{utillsService.formatDate(card.dueDate)}</p>
                </div>
                :
                <div className="card-content-date-container flex align-center">
                    <QueryBuilderIcon /><p className="due-date-error">Due date is over!</p>
                </div>
            }
        </section>
    )
}