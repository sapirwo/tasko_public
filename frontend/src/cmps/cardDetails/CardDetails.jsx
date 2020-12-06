import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CardSideBar } from './sideBar/CardSideBar';
import { CardEditLabels } from './modals/CardEditLabels'
import { ModalEditMembers } from './modals/ModalEditMembers'
import { CardDetailsHeader } from './CardDetailsHeader';
import { CardDetailsCompletedSec } from './CardDetailsCompletedSec';
import { CardDetailsMemberSec } from './CardDetailsMembersSec';
import { CardDetailsLabelsSec } from './CardDetailsLabelsSec';
import { CardDetailsDescSec } from './CardDetailsDescSec';
import { CardDetailsChecklistSec } from './CardDetailsChecklistSec';
import { CardDetailsCoverSec } from './CardDetailsCoverSec';
import { CardDetailsDateSec } from './CardDetailsDateSec';
import utillsService from '../../services/utillsService'

class _CardDetails extends Component {

    state = {
        newTitle: '',
        newDesc: '',
        newTodoTitle: '',
        isEditTitleMode: false,
        isEditLabelsModal: false,
        isEditDescMode: false,
        isAddingTodo: false,
        isAddingChecklist: false,
        isEditingMember: false,
        isEditCoverModal: false,
        currLabel: null,
        checklistProgress: null,
    }

    componentDidMount() {
        const card = this.getCurrCard()
        if (card.checklist) this.getChecklistProgress(card)
        const { title, description } = card
        this.setState({ newTitle: title, newDesc: description })
    }

    onToggleIsCardCompleted = () => {
        const { onEditCard } = this.props
        const card = this.getCurrCard()
        const group = this.getCurrGroup()
        const newCard = { ...card, isCompleted: !card.isCompleted }
        onEditCard(newCard, group.id)
    }

    onToggleEditCardTitle = () => {
        this.setState(prevState => ({ isEditTitleMode: !prevState.editMode }))
    }

    onHandleChangeCardTitle = ({ target }) => {
        this.setState({ newTitle: target.value });
    }

    onChangeCardTitle = (ev) => {
        ev.preventDefault()
        const card = this.getCurrCard()
        const group = this.getCurrGroup()
        if (!this.state.newTitle) {
            this.setState({ newTitle: card.title, isEditTitleMode: false })
            return
        }
        const { newTitle } = this.state
        const editedCard = { ...card, title: newTitle }
        this.props.onEditCard(editedCard, group.id)
        this.setState({ isEditTitleMode: false })
    }

    onAddTodo = (ev) => {
        ev.preventDefault()
        const { newTodoTitle } = this.state
        const { onEditCard } = this.props
        if (!newTodoTitle) return
        const card = this.getCurrCard()
        const group = this.getCurrGroup()
        const updatedCard = { ...card }
        const newTodo = utillsService.getEmptyTodo(newTodoTitle)
        updatedCard.checklist.todos ?
            updatedCard.checklist.todos.push(newTodo) :
            updatedCard.checklist.todos = [newTodo]
        onEditCard(updatedCard, group.id)
        this.setState({ newTodoTitle: '' })
        this.onChangeChecklistTodos(updatedCard)
        this.getChecklistProgress(card)
    }

    onAddTodoTitle = ({ target }) => {
        const newTodoTitle = target.value
        this.setState({ newTodoTitle })
    }

    onToggleTodoInput = () => {
        this.setState(prevState => ({ isAddingTodo: !prevState.isAddingTodo }))
    }

    onEditLabelColor = (currLabel) => {
        const { isEditingMember, isEditCoverModal } = this.state
        if (isEditCoverModal) this.onToggleCoverModal()
        if (isEditingMember) this.onToggleMembersModal()
        this.setState(prevState => ({ isEditLabelsModal: !prevState.isEditLabelsModal }))
        currLabel && this.setState({ currLabel })
    }
    onToggleCoverModal = () => {
        const { isEditingMember, isEditLabelsModal } = this.state
        if (isEditingMember) this.onToggleMembersModal()
        if (isEditLabelsModal) this.onEditLabelColor()
        this.setState(prevState => ({ isEditCoverModal: !prevState.isEditCoverModal }))
    }
    onChangeEditDesc = ({ target }) => {
        this.setState({ newDesc: target.value })
    }

    onEditDescription = ({ type }) => {
        if (type === 'blur') {
            const { newDesc } = this.state
            const group = this.getCurrGroup()
            const card = this.getCurrCard()
            const newCard = { ...card, description: newDesc }
            this.props.onEditCard(newCard, group.id)
            this.setState(prevState => ({ isEditDescMode: !prevState.isEditDescMode }))
            return
        }
        this.setState(prevState => ({ isEditDescMode: !prevState.isEditDescMode }))
    }

    doneTodoToggle = todoId => {
        const { onEditCard } = this.props
        const group = this.getCurrGroup()
        const card = this.getCurrCard()
        const todo = card.checklist.todos.find(todo => todo.id === todoId)
        const newTodo = { ...todo, isDone: !todo.isDone }
        const newTodos = card.checklist.todos.map(todo => {
            if (todo.id === todoId) return newTodo
            return todo
        })
        const newCard = { ...card }
        newCard.checklist.todos = newTodos
        onEditCard(newCard, group.id)
        this.getChecklistProgress(newCard)
        this.onChangeChecklistTodos(newCard)
    }

    getChecklistProgress = (card) => {
        let precents = null
        if (!card.checklist.todos) precents = 0
        else {
            const numOfTodos = card.checklist.todos.length
            const done = card.checklist.todos.filter(todo => todo.isDone)
            precents = (done.length / numOfTodos) * 100
        }
        this.setState({ checklistProgress: precents })
    }

    onRemoveCheckList = () => {
        const { onEditCard } = this.props
        const card = this.getCurrCard()
        const group = this.getCurrGroup()
        const newCard = { ...card }
        delete newCard.checklist
        onEditCard(newCard, group.id)
    }
    onToggleChecklistAcc = () => {
        const card = this.getCurrCard()
        if (card.checklist) return
        this.setState(prevState => ({ isAddingChecklist: !prevState.isAddingChecklist }))
    }

    onChangeChecklistTodos = (card) => {
        const { onEditCard } = this.props
        const group = this.getCurrGroup()
        card.checklist.doneTodos = card.checklist.todos.filter(todo => todo.isDone).length
        card.checklist.totalTodos = card.checklist.todos.length
        onEditCard(card, group.id)
    }

    onToggleMembersModal = () => {
        const { isEditCoverModal, isEditLabelsModal } = this.state
        if (isEditCoverModal) this.onToggleCoverModal()
        if (isEditLabelsModal) this.onEditLabelColor()
        this.setState(prevState => ({ isEditingMember: !prevState.isEditingMember }))
    }

    onToggleCardMember = (memberToToggle) => {
        const { onEditCard } = this.props
        const card = this.getCurrCard()
        const group = this.getCurrGroup()
        if (!card.members) {
            const newCard = { ...card, members: [memberToToggle] }
            return onEditCard(newCard, group.id)
        }
        const member = card.members.find(member => member._id === memberToToggle._id)
        if (member) {
            const newMembers = card.members.filter(member => member._id !== memberToToggle._id)
            const newCard = { ...card, members: newMembers }
            if (!newCard.members.length) delete newCard.members
            return onEditCard(newCard, group.id)
        }
        const newCard = { ...card, members: [...card.members, memberToToggle] }
        onEditCard(newCard, group.id)
    }

    onToggleCardLabel = (color) => {
        const { onEditCard, currBoard } = this.props
        const card = this.getCurrCard()
        const group = this.getCurrGroup()
        const labelToToggle = currBoard.labels.find(label => label.color === color)

        if (!card.labels) {
            const newCard = { ...card, labels: [labelToToggle] }
            onEditCard(newCard, group.id)
            return
        }
        const cardLabel = card.labels.find(label => label.id === labelToToggle.id)
        if (cardLabel) {
            const newCard = {
                ...card,
                labels: card.labels.filter(label => label.id !== labelToToggle.id)
            }
            if (!newCard.labels.length) delete newCard.labels
            onEditCard(newCard, group.id)
            return cardLabel
        } else {
            const newCard = {
                ...card, labels: [...card.labels, labelToToggle]
            }
            onEditCard(newCard, group.id)
        }
    }

    onAddDueDate = dueDate => {
        const { onEditCard } = this.props
        const card = this.getCurrCard()
        const group = this.getCurrGroup()
        const newCard = { ...card, dueDate }
        onEditCard(newCard, group.id)
    }

    onRemoveDueDate = () => {
        const card = this.getCurrCard()
        const group = this.getCurrGroup()
        const { onEditCard } = this.props
        const newCard = { ...card }
        delete newCard.dueDate
        onEditCard(newCard, group.id)
        this.setState({ toggleDatePicker: false })
    }

    getCurrGroup = () => {
        const { currBoard, groupId } = this.props
        return currBoard.groups.find(group => group.id === groupId)
    }

    getCurrCard = () => {
        const { cardId } = this.props
        const group = this.getCurrGroup()
        return group?.cards.find(card => card.id === cardId)
    }

    closeCardDetails = ev => {
        const { onCloseCardDetails } = this.props
        const { className } = ev.target
        if (className === "window-overlay" ||
            className === "btn-close-card-details") {
            onCloseCardDetails()
        }
    }

    render() {
        const { onEditCard, onRemoveCard, currBoard, onUpdateBoard } = this.props
        const { newTitle, isEditTitleMode, currLabel, isEditLabelsModal,
            isEditDescMode, isAddingTodo, checklistProgress, newTodoTitle,
            isAddingChecklist, isEditingMember, isEditCoverModal, newDesc } = this.state
        const group = this.getCurrGroup()
        const card = this.getCurrCard()

        if (!card) return <span></span>
        return (
            <main>
                <div className="window-overlay" onClick={(ev) => this.closeCardDetails(ev)}>
                    <section className="card-details-container">
                        <CardDetailsHeader
                            onCloseCardDetails={this.closeCardDetails}
                            onChangeCardTitle={this.onChangeCardTitle}
                            card={card}
                            onEditCardTitleMode={this.onToggleEditCardTitle}
                            isEditTitleMode={isEditTitleMode}
                            newTitle={newTitle}
                            onHandleChangeCardTitle={this.onHandleChangeCardTitle}
                            group={group}
                        />
                        {card.dueDate &&
                            <CardDetailsDateSec
                                card={card}
                                onAddDueDate={this.onAddDueDate}
                                onRemoveDueDate={this.onRemoveDueDate}
                            />
                        }
                        {isEditLabelsModal &&
                            <CardEditLabels
                                onEditLabelColor={this.onEditLabelColor}
                                onEditCard={onEditCard}
                                card={card}
                                currLabel={currLabel}
                                onToggleCardLabel={this.onToggleCardLabel}
                                groupId={group.id}
                            />
                        }
                        {isEditingMember &&
                            <ModalEditMembers
                                members={currBoard.members}
                                onToggleMembersModal={this.onToggleMembersModal}
                                onToggleMember={this.onToggleCardMember}
                                assignMembers={card.members}
                                originCmp="card-details-cmp"
                            />
                        }
                        {(card.coverUrl || card.coverColor) &&
                            <CardDetailsCoverSec
                                card={card}
                                onToggleCoverModal={this.onToggleCoverModal}
                            />
                        }
                        <CardDetailsCompletedSec
                            isCompleted={card.isCompleted}
                            onToggleIsCardCompleted={this.onToggleIsCardCompleted}
                        />
                        {card.members &&
                            <CardDetailsMemberSec
                                card={card}
                                onToggleMembersModal={this.onToggleMembersModal}
                            />
                        }
                        {card.labels &&
                            <CardDetailsLabelsSec
                                card={card}
                                onEditLabelColor={this.onEditLabelColor}
                            />
                        }
                        <section className="card-details-main-col">
                            <CardDetailsDescSec
                                handleSubmit={this.onChangeCardTitle}
                                onEditDescription={this.onEditDescription}
                                onChangeEditDesc={this.onChangeEditDesc}
                                card={card}
                                isEditDescMode={isEditDescMode}
                                newDesc={newDesc}
                            />
                            {card.checklist &&
                                <CardDetailsChecklistSec
                                    card={card}
                                    onRemoveCheckList={this.onRemoveCheckList}
                                    doneTodoToggle={this.doneTodoToggle}
                                    onAddTodo={this.onAddTodo}
                                    onAddTodoTitle={this.onAddTodoTitle}
                                    onToggleTodoInput={this.onToggleTodoInput}
                                    isAddingTodo={isAddingTodo}
                                    checklistProgress={checklistProgress}
                                    newTodoTitle={newTodoTitle}
                                />
                            }
                        </section>
                        <CardSideBar
                            onEditCard={onEditCard}
                            group={group}
                            card={card}
                            onToggleChecklistAcc={this.onToggleChecklistAcc}
                            isAddingChecklist={isAddingChecklist}
                            onToggleMembersModal={this.onToggleMembersModal}
                            onToggleCardLabel={this.onToggleCardLabel}
                            onToggleTodoInput={this.onToggleTodoInput}
                            onRemoveCard={onRemoveCard}
                            getChecklistProgress={this.getChecklistProgress}
                            onAddDueDate={this.onAddDueDate}
                            onUpdateBoard={onUpdateBoard}
                            isEditCoverModal={isEditCoverModal}
                            onToggleCoverModal={this.onToggleCoverModal}
                        />
                    </section>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        currBoard: state.board.currBoard
    }
}

export const CardDetails = connect(mapStateToProps, null)(_CardDetails);