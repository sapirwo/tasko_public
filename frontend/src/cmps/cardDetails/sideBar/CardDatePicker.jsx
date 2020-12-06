import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export function CardDatePicker({ card, onAddDueDate, label }) {

    return (
        <section className="date-picker-container flex justify-center align-center">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    label={label}
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yy"
                    margin="normal"
                    value={card.dueDate || new Date()}
                    minDate={new Date()}
                    minDateMessage='Due date is passed!'
                    onChange={onAddDueDate}
                    KeyboardButtonProps={{ 'aria-label': 'change date' }}
                />
            </MuiPickersUtilsProvider>
        </section>
    );
}



