import React from 'react'
import Logo from './Logo/Logo'
import { Link } from 'react-router-dom'

function Navigation({ logIn, onClickSignOut }) {
    return (

        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div><Logo /></div>

            {
                logIn ?
                    <div className="d-flex d-row">
                        <p className="welcome">Welcome!</p>
                        <p onClick={onClickSignOut}>Sign Out</p>
                    </div>
                    :
                    <div className="d-flex d-row">
                        <Link to="/signIn" className="text-dark"><p>Sign In</p></Link>
                        <Link to="/register" className="text-dark"><p>Register</p></Link>
                    </div>
            }

        </nav>

    )
}

export default Navigation
