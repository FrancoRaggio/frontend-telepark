import React from 'react';

import "./styles/Badge.css";
import logo from '../images/logo.png';
class Badge extends React.Component {
    render() {
        return <div>
            <div>
                <img src={logo} alt="logo de telepark" />
            </div>

            <div>
                <h1>Telepark</h1>
            </div>

            <div>
                <p>Frontend telepark</p>
            </div>
            <div className="footer">
                <p>footer</p>
            </div>
        </div>
    }
}

export default Badge;