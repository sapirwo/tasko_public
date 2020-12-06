import React from 'react'
import { useState, useEffect } from 'react'
import { GroupHeaderModal } from './GroupHeaderModal'

export function GroupHeader({ group, onEditGroup, onRemoveGroup, provided }) {

    const [newHeader, setNewHeader] = useState('')
    const [isHeaderModal, setIsHeaderModal] = useState(false)

    useEffect(() => { setNewHeader(group.title) }, [group.title])

    const handleChange = ({ target }) => {
        setNewHeader(target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault() 
        if (!newHeader) {
        setNewHeader(group.title)
        editGroup(group.title)
        } else editGroup(newHeader) 
    }

    function editGroup(title){
        const editedGroup = { ...group, title }
        onEditGroup(editedGroup)
    }

    const toggleHeaderModal = () => {
        setIsHeaderModal(!isHeaderModal)
    }

    return (
        <section className="group-header" {...provided.dragHandleProps}>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-group-title"
                    type="text"
                    value={newHeader}
                    onChange={handleChange}
                    autoComplete="off"
                    onBlur={handleSubmit}
                />
            </form>
            <button className="btnToPrevent" onClick={toggleHeaderModal}>...</button>
            {isHeaderModal &&
                <GroupHeaderModal
                    onRemoveGroup={onRemoveGroup}
                    groupId={group.id}
                    toggleHeaderModal={toggleHeaderModal}
                />}
        </section>
    )
}


