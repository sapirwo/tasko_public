import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../../store/actions/userActions'
import { ModalEditMembers } from '../cardDetails/modals/ModalEditMembers'
import Swal from 'sweetalert2'

export class _BoardHeader extends Component {

    state = {
        users: [],
        isMemberModalShown: false
    }

    componentDidMount = () => {
        const { loadUsers, users } = this.props
        loadUsers()
        this.setState({ users })
    }

    onToggleMembersModal = () => {
        this.setState(prevState => ({ isMemberModalShown: !prevState.isMemberModalShown }))
    }

    onToggleBoardMember = memberToToggle => {
        const { currBoard, onUpdateBoard, loggedInUser } = this.props
        const memberInBoard = currBoard.members.find(member => member._id === memberToToggle._id)
        if ((loggedInUser?._id === memberToToggle._id && memberInBoard)) {
            Swal.fire({
                title: 'Failed ',
                text: "You cannot delete yourself from your board",
                icon: 'error'
            })
            return
        }
        let newBoard;
        if (!memberInBoard) {
            newBoard = { ...currBoard, members: [...currBoard.members, memberToToggle] }
        } else {
            newBoard = {
                ...currBoard,
                members: currBoard.members.filter(member => member._id !== memberToToggle._id)
            }
        }
        onUpdateBoard(newBoard)
    }

    render() {
        const { currBoard, openSideBar, users } = this.props
        const { isMemberModalShown } = this.state
        return (
            <header className="board-header-container flex space-between">
                <section className="board-header-left-section">
                    <div className="board-title-container">
                        <h2>{currBoard.title}</h2>
                    </div>
                    <div className="board-members-imgs">
                        {currBoard.members && currBoard.members.map(member => {
                            return (
                                <img className="shine btnToPrevent" onClick={this.onToggleMembersModal} key={member._id} src={member.imgUrl} alt={member.fullName} />
                            )
                        })}
                    </div>
                    <div
                        className="btn-add-members btnToPrevent"
                        title="Add members"
                        onClick={this.onToggleMembersModal}>
                    </div>
                </section>
                <section className="board-header-right-section flex">
                    <div onClick={openSideBar} className="board-menu-humburger">&#9776;</div>
                </section>
                {isMemberModalShown &&
                    <ModalEditMembers
                        members={users}
                        onToggleMembersModal={this.onToggleMembersModal}
                        onToggleMember={this.onToggleBoardMember}
                        assignMembers={currBoard.members}
                        originCmp="board-header-cmp"
                    />}
            </header>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.user.users,
        loggedInUser: state.user.loggedInUser,
    }
}

const mapDispatchToProps = {
    loadUsers
}

export const BoardHeader = connect(mapStateToProps, mapDispatchToProps)(_BoardHeader)