import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logout } from '../../store/actions/userActions';
import { HeaderUserMenu } from './HeaderUserMenu'
import { withRouter } from "react-router-dom";

class _Header extends Component {
    state = {
        isUserMenuOpen: false
    }

    toggleUserMenu = () => {
        this.setState(prevState => ({ isUserMenuOpen: !prevState.isUserMenuOpen }));
    }

    logUser = () => {
        const { loggedInUser, logout, history } = this.props
        if (loggedInUser) logout()
        history.push("/login");
        this.toggleUserMenu()
    }

    render() {
        const { isUserMenuOpen } = this.state
        const { loggedInUser } = this.props
        const logoURL = require('../../assets/imgs/logo5.png')

        return (
            <nav className="main-header flex justify-center align-center">
                <div className="logo-container">
                    <NavLink to="/" >
                        <img src={logoURL} alt="Tasko Logo" />
                    </NavLink>
                </div>
                <div className="header-right-sec flex">
                    <button className="header-btn btn-user shine btnToPrevent flex justify-center align-center" onClick={this.toggleUserMenu}>
                        {loggedInUser?.username[0].toUpperCase() || 'U'}
                    </button>
                    {isUserMenuOpen && <HeaderUserMenu
                        loggedInUser={loggedInUser}
                        logUser={this.logUser}
                        toggleUserMenu={this.toggleUserMenu}
                    />}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser
    }
}

const mapDispatchToProps = {
    logout,
}

export const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(_Header))