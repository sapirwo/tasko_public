import React, { useState } from 'react'
import utillsService from '../services/utillsService'

export function AddItem({ onScrollDown, groupId, onAddItem }) {

    const [title, setTitle] = useState('')
    const [isAddingMode, setAddingMode] = useState(false)

    const handleInput = ({ target: { value } }) => {
        setTitle(value)
    }

    //ADDING 3 TYPES OF CARDS: YOUTUBE/IMG/TEXT
    const createItem = ev => {
        ev.preventDefault()
        if (!title) return
        if (!groupId) {
            const group = utillsService.getEmptyGroup(title)
            onAddItem(group)
        } else {
            let card;
            if (title.includes('youtube')) {
                const youtubeLink = utillsService.formatYoutubeLink(title)
                if (youtubeLink) card = utillsService.getEmptyCard('My Video', youtubeLink)
                else card = utillsService.getEmptyCard(title)
            } else if (utillsService.formatImgLink(title)) {
                card = utillsService.getEmptyCard('My Photo', title)
            } else card = utillsService.getEmptyCard(title)
            onAddItem(card, groupId)
            onScrollDown()
        }
        setAddingMode(false)
    }

    const onAddingMode = () => {
        setAddingMode(!isAddingMode)
    }

    const typeOfItem = groupId ? 'card' : 'group'
    const wrapperClassName = typeOfItem === 'group' ? 'group-wrapper' : ''
    const subWrapperClassName = typeOfItem === 'group' ? 'group' : 'btn-add-card-wrapper'
    const btnClassName = typeOfItem === 'group' ? 'btn-add-group' : 'btn-add-card'
    const inputPlaceHolder = typeOfItem === 'group' ? 'Group title...' : 'Card title or URL...'

    return (
        <section className={wrapperClassName}>
            <div className={subWrapperClassName}>
                {!isAddingMode ?
                    <button
                        className={btnClassName}
                        onClick={onAddingMode}
                    >+ Add{isAddingMode && 'ing'} another {typeOfItem}
                    </button>
                    :
                    <div>
                        <form onSubmit={createItem}>
                            <button
                                className="btn-add-group-card-accordion">Add {typeOfItem}
                            </button>
                            <input
                                className="input-add-group-card-accordion"
                                name="title"
                                type="text"
                                onChange={handleInput}
                                placeholder={inputPlaceHolder}
                                autoComplete="off"
                            />
                        </form>
                        <button
                            className="btn-close-add-group-card"
                            onClick={onAddingMode}>
                        </button>
                    </div>
                }
            </div>
        </section >
    )
}

