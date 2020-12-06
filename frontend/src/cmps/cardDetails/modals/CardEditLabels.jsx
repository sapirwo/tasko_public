import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../../services/customHooks';
import { updateBoard } from '../../../store/actions/boardActions';
import OutsideAlerter from '../../OutsideAlerter'

export function CardEditLabels({ onEditLabelColor, onToggleCardLabel, currLabel, card }) {

    const [label, setCurrLabel] = useState(currLabel)

    const [lableTitle, handleChange] = useForm({ title: currLabel.title })
    const { currBoard } = useSelector(state => state.board)
    const dispatch = useDispatch()

    function getLabelTitle(color) {
        const currColor = currBoard.labels.find(label => label.color === color)
        return currColor.title
    }

    function isLabelOn(color) {
        if (card.labels) {
            if (card.labels.find(label => label.color === color)) return 'far fas fa-check'
        }
    }

    function onSubmit(ev) {
        ev.preventDefault();
        if (!label) return
        const lableToUpdate = currBoard.labels.find(_label => _label.id === label.id)
        lableToUpdate.title = lableTitle.title
        const updatedBoard = { ...currBoard }
        updatedBoard.labels = updatedBoard.labels.map(_label => {
            if (_label.id === label.id) return lableToUpdate;
            else return _label
        })
        dispatch(updateBoard(updatedBoard))
    }

    function handleLabelClick(color) {
        onToggleCardLabel(color);
        if (onToggleCardLabel(color)) {
            handleChange({ value: '', field: "title" })
            setCurrLabel(null)
        }
        else {
            const selectedLabel = currBoard.labels.find(label => label.color === color)
            setCurrLabel(selectedLabel)
            handleChange({ value: selectedLabel.title, field: "title" })
        }
    }

    const labelStyle = 'flex space-between align-center'
    const isDisabled = !label ? true : false
    return (
        <section className="modal-edit-label-container">
            <OutsideAlerter onClose={onEditLabelColor} btnToPrevent="btnToPrevent">
                <section>
                    <h2>Labels</h2>
                    <div
                        className="modal-edit-label-close-btn"
                        onClick={onEditLabelColor}>
                    </div>
                    <form onSubmit={(ev) => onSubmit(ev)}>
                        <input type="text" name="title" onChange={handleChange}
                            value={lableTitle.title} placeholder="Select Label to edit..."
                            autoComplete="off" disabled={isDisabled}
                        />
                    </form>
                    <h3>COLORS</h3>
                    <div className="labels-container-in-modal-edit-label">
                        <div onClick={() => handleLabelClick('red')} className={`red-label ${labelStyle}`}>{getLabelTitle('red')}<span className={isLabelOn('red')}></span></div>
                        <div onClick={() => handleLabelClick('green')} className={`green-label ${labelStyle}`}>{getLabelTitle('green')}<span className={isLabelOn('green')}></span></div>
                        <div onClick={() => handleLabelClick('blue')} className={`blue-label ${labelStyle}`}>{getLabelTitle('blue')}<span className={isLabelOn('blue')}></span></div>
                        <div onClick={() => handleLabelClick('purple')} className={`purple-label ${labelStyle}`}>{getLabelTitle('purple')}<span className={isLabelOn('purple')}></span></div>
                        <div onClick={() => handleLabelClick('yellow')} className={`yellow-label ${labelStyle}`}>{getLabelTitle('yellow')}<span className={isLabelOn('yellow')}></span></div>
                        <div onClick={() => handleLabelClick('orange')} className={`orange-label ${labelStyle}`}>{getLabelTitle('orange')}<span className={isLabelOn('orange')}></span></div>
                    </div>
                </section>
            </OutsideAlerter>
        </section>
    )
}
