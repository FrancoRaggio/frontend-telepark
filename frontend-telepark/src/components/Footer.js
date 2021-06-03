import React from 'react';

import Logo from './Logo';
import './styles/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Logo />
                <p>Sobre Telepark</p>
                <p>Informacion Adicional</p>
                <p>Contacto</p>
            </footer>
        )
    }
}
export default Footer;