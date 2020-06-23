import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css';
import logo from './face.png'
function Logo() {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-2 ml-4" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img src={logo} alt="face" /></div>
            </Tilt>
        </div>
    )
}

export default Logo
