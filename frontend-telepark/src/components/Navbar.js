import React from 'react';
import Logo from './Logo';
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
                                <a class="nav-link active" aria-current="page" href="#">Conoce al Paciente</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Informacion al Paciente</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cartilla de Taller</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >Novedades</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Iniciar Sesion</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
export default Navbar;