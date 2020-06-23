import React from 'react'

function Navigation({ children }) {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{children}</div>
            {/* <p>Sign Out</p> */}
        </nav>
    )
}

export default Navigation
