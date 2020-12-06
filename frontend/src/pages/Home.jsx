import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadBoards } from '../store/actions/boardActions'

export class _Home extends Component {

    componentDidMount() {
        this.props.loadBoards()
    }

    render() {
        const { loggedInUser } = this.props
        const { boards } = this.props
        const boardId = `${boards.length > 0 ? boards[0]._id : '5f6b77100f2d4a30fcfb81de'}`
        return (
            <section className="home-container">
                <div className="home-content">
                    <section className="hero-section flex align-center justify-center">
                        <div className="home-description-txt-container flex align-center justify-center">
                            <div className="home-description-txt">
                                <h1>With Tasko teams achieve their goals!</h1>
                                <h2>Tasko’s boards, groups, and cards enable everyone to
                                organize and prioritize projects in a fun, flexible,
                        and rewarding way.</h2>
                                <div className="btn-try-it-now-container">
                                    <Link to={`/board/${boardId}`}><button>{loggedInUser ? 'My Board' : 'Try it now'}</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="hero-img-container">
                            <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" className="home-hero-img" alt="main" />
                        </div>
                    </section>
                    <section className="before-tasko-section flex justify-center align-center">
                        <div className="notes-img-container"></div>
                        <div className="home-description-txt flex">
                            <h2>Once upon a time, before Tasko was invented, it wasn't so easy to manage big projects. Thanks to Tasko, now things have changed!</h2>
                        </div>
                    </section>
                </div>
            </section >
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
        boards: state.board.boards
    };
};
const mapDispatchToProps = {
    loadBoards
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
