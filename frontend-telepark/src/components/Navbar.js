import React from 'react';
import Logo from './Logo';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        
        return (
          
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <Logo />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav text-center text-md-start ps-md-3">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Conoce al paciente</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Información al paciente</Link>                                
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Cartilla de taller</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Novedades</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Contacto</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/FormLogin">Iniciar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
              
            
        )
    }
}

export default Navbar;
