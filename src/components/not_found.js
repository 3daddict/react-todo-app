import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    const container = {
        height: '100vh',
        display: 'flex'
    }

    const content = {
        margin: 'auto',
        textAlign: 'center'
    }

    return (
        <div style={container}>
            <div style={content}>
                <h1>404 Page Not Found</h1>
                <Link to="/" >Back to Home</Link>
            </div>
        </div>
    )
}