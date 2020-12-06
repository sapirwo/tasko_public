import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeUser, login, logout, signup } from '../store/actions/userActions';
import { addBoard, loadBoards } from '../store/actions/boardActions'
import { LoginSection } from '../cmps/loginAndSignUp/LoginSection';
import { SignupSection } from '../cmps/loginAndSignUp/SignupSection';
import { Link } from 'react-router-dom'
import utillsService from '../services/utillsService'

class _LoginAndSignUp extends Component {
  state = {
    isLoginMode: true,
    msg: '',
  };

  componentDidMount() {
    const { loggedInUser, loadBoards } = this.props
    if (loggedInUser) loadBoards()
  }

  doLogin = async loginCred => {
    const { email, password } = loginCred;
    const userCreds = { email, password };
    const { login, loadBoards } = this.props
    await login(userCreds);
    loadBoards()
  };

  doSignup = async signupCred => {
    const { email, password, username } = signupCred
    const signupCreds = { email, password, username };
    const { signup, addBoard } = this.props
    await signup(signupCreds);
    this.setState({ signupCred: { email: '', password: '', username: '' } });
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const newBoard = utillsService.getEmptyBoard('My Board', newUser)
    addBoard(newBoard)
  };

  removeUser = userId => {
    this.props.removeUser(userId);
  };

  toggleLoginSignup = (ev) => {
    ev.target.name === 'signup' ?
      this.setState({ ...this.state, isLoginMode: false }) :
      this.setState({ ...this.state, isLoginMode: true })
  }

  render() {
    const { loggedInUser, boards } = this.props;
    const { isLoginMode, loginCred, signupCred } = this.state
    const flexStyle = 'flex column justify-center align-center'
    const boardId = `${boards.length > 0 ? boards[0]._id : ''}`
    return (
      <section className={`login-and-signup-container ${flexStyle}`}>
        {loggedInUser
          ?
          <div className="loggedin-container">
            <h1>Welcome {loggedInUser.username}!</h1>
            <button ><Link to={`/board/${boardId}`}>Board</Link></button>
            <button className="logout-btn" onClick={this.props.logout}>Logout</button>
          </div>
          :
          <div className="login-and-signup-content">
            {<LoginSection
              doLogin={this.doLogin}
              isLoginMode={isLoginMode}
              loginCred={loginCred}
              loginHandleChange={this.loginHandleChange}
              flexStyle={flexStyle}
            />}
            {<SignupSection
              doSignup={this.doSignup}
              isLoginMode={isLoginMode}
              signupCred={signupCred}
              loginHandleChange={this.loginHandleChange}
              flexStyle={flexStyle}
            />}
            <div className={isLoginMode ? 'hidden' : 'block'}>
              <small>{isLoginMode ? 'Aren\'t you member yet?' : 'Already member?'}</small>
              <button
                name={isLoginMode ? 'signup' : 'login'}
                className="action-btn"
                onClick={this.toggleLoginSignup} >
                {isLoginMode ? 'Sign Up' : 'Login'}
              </button>
            </div>
          </div >}
      </section >
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.user.loggedInUser,
    boards: state.board.boards
  };
};
const mapDispatchToProps = {
  login,
  logout,
  signup,
  removeUser,
  addBoard,
  loadBoards
};

export const LoginAndSignUp = connect(mapStateToProps, mapDispatchToProps)(_LoginAndSignUp);
