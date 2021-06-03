import React from 'react';

import logo from '../images/logo.png';
import './styles/logo.css';

class Logo extends React.Component {
    render() {
        return (
            <img className="logo" src={logo} alt="logo de telepark" />
        )
    }
}
export default Logo;