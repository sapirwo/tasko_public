import React from 'react';
import { Link } from 'react-router-dom';
import OutsideAlerter from '../OutsideAlerter'

export function HeaderUserMenu({ loggedInUser, logUser, toggleUserMenu }) {
    const defaultUserImg = require('../../assets/imgs/user-default-img.jpg')
    return (
        <section className="user-menu-container">
            <OutsideAlerter onClose={toggleUserMenu} btnToPrevent="btnToPrevent">
                <div className="user-menu-content">
                    <h2>Account</h2>
                    <div className="user-menu-details-sec flex">
                        <div className="user-menu-profile-pic-container">
                            {loggedInUser?.imgUrl
                                ?
                                <img src={loggedInUser.imgUrl} alt="userImg" />
                                :
                                <img src={defaultUserImg} alt="U" />
                            }
                        </div>
                        {loggedInUser
                            ?
                            <div className="user-menu-user-details">
                                <p>{loggedInUser.fullName}</p>
                                <p>{loggedInUser.email}</p>
                            </div>
                            :
                            <div className="user-menu-user-details">
                                <p>Welcome Guest!</p>
                                <p>You're using our trial version</p>
                            </div>
                        }
                    </div>
                    <div className="user-menu-log-sec">
                        {loggedInUser ?
                            <p onClick={logUser}>Log Out</p> :
                            <p onClick={logUser}>Log In</p>}
                        <Link to="/login"><p onClick={toggleUserMenu}>My Profile</p></Link>
                    </div>
                </div>
            </OutsideAlerter>
        </section>
    )
}