import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardSideBarLabels } from './CardSideBarLabels'
import { CardCover } from '../modals/CardCover'
import { cloudinaryService } from '../../../services/cloudinaryService'
import { CardSideBarBgcs } from './CardSideBarBgcs'
import { CardSideBarChecklist } from './CardSideBarChecklist'
import { CardDatePicker } from './CardDatePicker'
import utillsService from '../../../services/utillsService'
import { alertRemove } from '../../../services/alertService'

export class _CardSideBar extends Component {

    state = {
        toggleBgcAccordion: false,
        toggleLablesModal: false,
        toggleDatePicker: false,
        checklistTitle: ''
    }

    onToggleBgAccordion = () => {
        this.setState(prevState => ({ toggleBgcAccordion: !prevState.toggleBgcAccordion }))
    }

    onToggleCardCoverModal = () => {
        const { onToggleCoverModal } = this.props
        onToggleCoverModal()
    }

    onToggleLablesModal = () => {
        this.setState(prevState => ({ toggleLablesModal: !prevState.toggleLablesModal }))
    }

    onRemoveCurrCard = async () => {
        const { onRemoveCard, card, group } = this.props
        try {
            await alertRemove('card')
            onRemoveCard(group.id, card.id)
        } catch (err) {
            console.log(err)
        }
    }

    onChangeChecklistTitle = ({ target }) => {
        const checklistTitle = target.value
        this.setState({ checklistTitle })
    }

    onToggleDatePicker = () => {
        this.setState(prevState => ({ toggleDatePicker: !prevState.toggleDatePicker }))
    }

    onToggleCardBgc = ({ target }) => {
        const { onEditCard, group, card } = this.props
        const bgcName = target.className.split('-')[0]
        let newCard = { ...card }
        if (card.bgc === bgcName) delete newCard.bgc
        else newCard = { ...card, bgc: bgcName }
        onEditCard(newCard, group.id)
        this.setState(prevState => ({ toggleBgcAccordion: !prevState.toggleBgcAccordion, }))
    }

    onAddChecklist = (ev) => {
        ev.preventDefault()
        const { checklistTitle } = this.state
        const { onEditCard, group,
            onToggleTodoInput, getChecklistProgress,
            onToggleChecklistAcc, card } = this.props
        if (card.checklist) return
        const newChecklist = utillsService.getEmptyChecklist(checklistTitle)
        const newCard = { ...card, checklist: newChecklist }
        onEditCard(newCard, group.id)
        getChecklistProgress(newCard)
        onToggleTodoInput()
        this.setState({ checklistTitle: '' })
        onToggleChecklistAcc()
    }

    setUploadedImg = async (ev) => {
        const uploadedImgUrl = await cloudinaryService.uploadImg(ev)
        const { card, group, onUpdateBoard, currBoard } = this.props
        const newCard = { ...card, coverUrl: uploadedImgUrl }
        const newGroup = {
            ...group, cards: group.cards.map(_card => {
                if (_card.id === card.id) return newCard
                return _card
            })
        }
        const newBoard = {
            ...currBoard, groups: currBoard.groups.map(_group => {
                if (_group.id === newGroup.id) return newGroup
                return _group
            }),
            style: { coverUrls: [uploadedImgUrl, ...currBoard.style.coverUrls] }
        }
        onUpdateBoard(newBoard)
        this.onToggleCardCoverModal()
    }

    onSetCardCover = (coverContent, coverType) => {
        const { card, onEditCard, group } = this.props
        const newCard = { ...card }
        if (!coverType) {
            const { src } = coverContent.target
            delete newCard.coverColor
            newCard.coverUrl = src
        } else {
            delete newCard.coverUrl
            newCard.coverColor = coverType
        }
        onEditCard(newCard, group.id)
        this.onToggleCardCoverModal()
    }

    onAddDueDate = dueDate => {
        const { onAddDueDate } = this.props
        this.setState({ toggleDatePicker: false })
        onAddDueDate(dueDate)
    }
    
    render() {
        const { toggleBgcAccordion, toggleLablesModal,
            toggleDatePicker, checklistTitle } = this.state
        const { isAddingChecklist, onToggleMembersModal, onToggleCardLabel,
            onToggleChecklistAcc, card, isEditCoverModal } = this.props
        return (
            <section className="card-side-bar">
                <h3>Actions</h3>
                <button className="btn-card-side-bar btnToPrevent" onClick={onToggleMembersModal}>Members</button>
                <button className="btn-card-side-bar btn-label-sidebar"
                    onClick={this.onToggleLablesModal}>Label</button>
                {toggleLablesModal &&
                    <CardSideBarLabels
                        onToggleCardLabel={onToggleCardLabel}
                        onToggleLablesModal={this.onToggleLablesModal} />
                }
                <button className={card.bgc ? `btn-card-side-bar ${card.bgc}-bgc ` : 'btn-card-side-bar'}
                    onClick={this.onToggleBgAccordion}>Background</button>
                {toggleBgcAccordion &&
                    <CardSideBarBgcs
                        onToggleCardBgc={this.onToggleCardBgc}
                        card={card}
                    />
                }
                <button className={card.checklist ? 'btn-card-side-bar muted ' : 'btn-card-side-bar'}
                    onClick={onToggleChecklistAcc}>Checklist</button>
                {isAddingChecklist &&
                    <CardSideBarChecklist
                        onAddChecklist={this.onAddChecklist}
                        onChangeChecklistTitle={this.onChangeChecklistTitle}
                        checklistTitle={checklistTitle}
                    />
                }
                <button className="btn-card-side-bar flex align-center" onClick={this.onToggleDatePicker}>
                    Due Date
                </button>
                {toggleDatePicker &&
                    <CardDatePicker onAddDueDate={this.onAddDueDate} card={card} />
                }
                <button className="btn-card-side-bar btnToPrevent" onClick={this.onToggleCardCoverModal}>Cover</button>
                {isEditCoverModal &&
                    <CardCover
                        setUploadedImg={this.setUploadedImg}
                        onSetCardCover={this.onSetCardCover}
                        onToggleCardCoverModal={this.onToggleCardCoverModal} />
                }
                <button className="btn-card-side-bar" onClick={this.onRemoveCurrCard} >Remove Card</button>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        currBoard: state.board.currBoard
    }
}

export const CardSideBar = connect(mapStateToProps, null)(_CardSideBar)


