import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadBoard, updateBoard, removeBoard, loadBoards } from '../store/actions/boardActions'
import { GroupList } from '../cmps/board/GroupList'
import { CardDetails } from '../cmps/cardDetails/CardDetails'
import { BoardHeader } from '../cmps/board/BoardHeader'
import socketService from '../services/socketService';
import { BoardSideBar } from '../cmps/boardSideBar/BoardSideBar'
import { CSSTransition } from 'react-transition-group';
import eventBus from '../services/event-bus-service'

class _Board extends Component {

    state = {
        currCardId: null,
        isCardDetailsOpen: false,
        currGroupId: null,
        isSideBarOpen: false,
    }

    unsubscribe;
    componentDidMount() {
        this.unsubscribe = eventBus.on('editCard', ({ newCard, groupId }) => {
            this.onEditCard(newCard, groupId)
        })
        const currBoardId = this.props.match.params.id
        const { loadBoards, loadBoard } = this.props
        loadBoard(currBoardId)
        loadBoards()
        this.updateSocket(currBoardId)
        this.listenToUrlChanges()
    }
    
    listenToUrlChanges() {
        this.unlistenToUrl = this.props.history.listen((location) => {
            const newBoardId = location.pathname.split('/')[2]
            this.props.loadBoard(newBoardId)
            this.updateSocket(newBoardId)
        })
    }

    updateSocket(currBoardId) {
        socketService.setup();
        socketService.emit('boardId', currBoardId);
        socketService.on('updatedBoardServer', this.loadBoard);
    }

    componentWillUnmount() {
        socketService.off('updatedBoardServer', this.loadBoard);
        socketService.terminate();
        this.unsubscribe();
        this.unlistenToUrl();
    }

    loadBoard = updatedBoardId => {
        this.props.loadBoard(updatedBoardId)
    }

    onUpdateBoard = updatedBoard => {
        this.props.updateBoard(updatedBoard)
    }

    onAddGroup = newGroup => {
        const { currBoard, updateBoard } = this.props
        const newBoard = {
            ...currBoard, groups: [...currBoard.groups, newGroup]
        }
        updateBoard(newBoard)
    }

    onRemoveBoard = () => {
        const { boards, currBoard, removeBoard, history } = this.props
        const nextBoard = boards.filter(board => board._id !== currBoard._id)[0]
        if (!nextBoard || boards.length <= 1) return
        history.push(`/board/${nextBoard._id}`)
        removeBoard(currBoard._id)
    }

    onRemoveGroup = id => {
        const { currBoard, updateBoard } = this.props
        const newGroups = currBoard.groups.filter(group => group.id !== id)
        const newBoard = { ...currBoard, groups: newGroups }
        updateBoard(newBoard)
    }

    onEditGroup = editedGroup => {
        const { currBoard, updateBoard } = this.props
        const newGroups = currBoard.groups.map(group => {
            if (group.id === editedGroup.id) return editedGroup
            return group
        })
        const newBoard = { ...currBoard, groups: newGroups }
        updateBoard(newBoard)
    }

    onAddCard = (newCard, groupId) => {
        const { currBoard, updateBoard } = this.props
        const newGroups = currBoard.groups.map(group => {
            if (group.id === groupId) return { ...group, cards: [...group.cards, newCard] }
            return group
        })
        const newBoard = { ...currBoard, groups: newGroups }
        updateBoard(newBoard)
    }

    onRemoveCard = (groupId, cardId) => {
        const { currBoard, updateBoard } = this.props
        const newGroups = currBoard.groups.map(group => {
            if (group.id === groupId) {
                const newCards = group.cards.filter(card => card.id !== cardId)
                return { ...group, cards: newCards }
            }
            return group
        })
        const newBoard = { ...currBoard, groups: newGroups }
        updateBoard(newBoard)
        this.setState({ currCard: null })
    }

    onEditCard = (editedCard, groupId) => {
        const { currBoard, updateBoard } = this.props
        const newGroups = currBoard.groups.map(group => {
            if (group.id === groupId) {
                const newCards = group.cards.map(card => {
                    if (card.id === editedCard.id) return editedCard
                    return card
                })
                return { ...group, cards: newCards }
            }
            return group
        })
        const newBoard = { ...currBoard, groups: newGroups }
        updateBoard(newBoard)
    }

    onCardDetails = (cardId, groupId) => {
        this.setState({ isCardDetailsOpen: !this.state.isCardDetailsOpen })
        this.setState({ currCardId: cardId, currGroupId: groupId })
    }

    sideBarToggle = () => {
        this.setState(prevState => ({ isSideBarOpen: !prevState.isSideBarOpen }))
    }

    render() {
        const { currBoard } = this.props
        const { currCardId, currGroupId, isSideBarOpen, isCardDetailsOpen } = this.state
        if (!currBoard || currBoard.length === 0) return ''
        return (
            <main>
                {isCardDetailsOpen &&
                    <CardDetails
                        cardId={currCardId}
                        groupId={currGroupId}
                        onRemoveCard={this.onRemoveCard}
                        onCloseCardDetails={this.onCardDetails}
                        onEditCard={this.onEditCard}
                        onUpdateBoard={this.onUpdateBoard}
                    />
                }
                <section className="board-container" style={{ backgroundImage: `url(${currBoard.bgImgUrl})` }}>
                    <div className="board-content">
                        <BoardHeader
                            currBoard={currBoard}
                            onUpdateBoard={this.onUpdateBoard}
                            openSideBar={this.sideBarToggle}
                        />
                        <GroupList
                            currBoard={currBoard}
                            onAddCard={this.onAddCard}
                            onAddGroup={this.onAddGroup}
                            onCardDetails={this.onCardDetails}
                            onRemoveGroup={this.onRemoveGroup}
                            onEditGroup={this.onEditGroup}
                        />
                        <CSSTransition
                            in={isSideBarOpen}
                            timeout={350}
                            classNames="display"
                            unmountOnExit
                        >
                            <BoardSideBar
                                board={currBoard}
                                closeSideBar={this.sideBarToggle}
                                onUpdateBoard={this.onUpdateBoard}
                                removeBoard={this.onRemoveBoard}
                            />
                        </CSSTransition>
                    </div>
                </section>
            </main >
        )
    }
}

const mapStateToProps = state => {
    return {
        currBoard: state.board.currBoard,
        boards: state.board.boards,
    }
}

const mapDispatchToProps = {
    loadBoard,
    updateBoard,
    removeBoard,
    loadBoards
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)

