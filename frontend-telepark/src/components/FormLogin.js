import { Alert } from 'bootstrap';
import React from 'react';
import Swal from 'sweetalert2';
import Register from '../pages/Register';
import {Redirect} from 'react-router-dom';

class FormLogin extends React.Component {

    constructor(props) {
        super(props);

        // Defino los estados locales 
        this.state = {
            campo: {},
            enviado: false,
            referrer: null,
        }
    }

    // Valido los campos del formulario 
    validarFormulario() {
        let campo = this.state.campo;
        let formularioValido = true;

        // Email 
        if (!campo["email"]) {
            formularioValido = false;
        }

        // Pass 
        if (!campo["pass"]) {
            formularioValido = false;
        }

        return formularioValido;
    }

    // Una vez que los campos del formulario han sido llenado correctamente 
    // Mostramos un mensaje al usuario diciendo: 'Mensaje Enviado Satisfactoriamente !'
    enviarFormulario(e) {
        e.preventDefault();

        // Si la validación de los campos del formulario ha sido realizada 
        if (this.validarFormulario()) {

            // Cambio el estado de 'enviado' a 'true'
            this.setState({ enviado: true });

            // Muestro el mensaje que se encuentra en la función mensajeEnviado()
            return this.send();
        }
        else {
            return this.errorSend();
        }

    }


    // Detectamos cuando un campo del formulario es llenado y por ende cambia de estado 
    detectarCambio(field, e) {

        let campo = this.state.campo;
        campo[field] = e.target.value;

        // Cambio de estado de campo 
        this.setState({
            campo
        });

    }

    send() {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Acceso Permitido',
            showConfirmButton: false,
            timer: 1500,
        });
        
        setTimeout(this.setState({referrer: '/'}), 1500);
        
    }

    errorSend() {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No se permite el acceso',
            text: 'El correo electrónico o la contraseña ingresada son incorrectos.',
            confirmButtonText: 'OK',
        });

    }

    render() {
        const {referrer} = this.state;
        if (referrer) return <Redirect to={referrer} />;

        return (
            <form onSubmit={this.enviarFormulario.bind(this)}>
                <main class="border-top-sm m-0 row justify-content-center form-paciente m-md-3 rounded shadow container-lg mx-md-auto">

                    <h2 class="mt-4 mt-md-2 text-center">Login</h2>
                    <hr />
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Usuario</label>
                        <input type="email" class="form-control" placeholder="Ingrese su Correo Electronico" id="email" aria-describedby="email" onChange={this.detectarCambio.bind(this, "email")} value={this.state.campo["email"] || ''}/>
                    </div>
                    <div class="w-100"></div>  
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Contraseña</label>
                        <input type="password" class="form-control"  placeholder="Ingrese su Contraseña" id="pass" aria-describedby="pass" onChange={this.detectarCambio.bind(this, "pass")} value={this.state.campo["pass"] || ''}/>
                    </div>
                    <div class="w-100"></div>               
                        <button type="submit" class="mb-3 col-6 btn btn-primary col-md-3 col-xl-2" to >Iniciar Sesión</button>
                </main>
            </form>
        )
    }
}

export default FormLogin;

