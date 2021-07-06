import { Alert } from 'bootstrap';
import React from 'react';
import Swal from 'sweetalert2';

class Form extends React.Component {

    constructor(props) {
        super(props);

        // Defino los estados locales 
        this.state = {
            campo: {},
            error: {},
            enviado: false
        }
    }

    // Valido los campos del formulario 
    validarFormulario() {
        let campo = this.state.campo;
        let error = {};
        let formularioValido = true;

        //Datos de Paciente con Parkinson
        // Nombre de EP 
        if (!campo["nombreEP"]) {
            formularioValido = false;
            error["nombreEP"] = "Por favor, ingresa el nombre del paciente.";
        }

        // Apellido de EP 
        if (!campo["apellidoEP"]) {
            formularioValido = false;
            error["apellidoEP"] = "Por favor, ingresa el apellido del paciente.";
        }

        // Sexo de EP 
        if (!campo["sexoEP"]) {
            formularioValido = false;
            error["sexoEP"] = "Por favor, selecciona el sexo del paciente.";
        }

        // Fecha de Nacimiento de EP 
        if (!campo["nacimientoEP"]) {
            formularioValido = false;
            error["nacimientoEP"] = "Por favor, ingresa la fecha de nacimiento del paciente.";
        }

        // Telefono de EP 
        if (!campo["telefonoEP"]) {
            formularioValido = false;
            error["telefonoEP"] = "Por favor, ingresa el telefono del paciente.";
        }

        // Provincia de EP 
        if (!campo["provinciaEP"]) {
            formularioValido = false;
            error["provinciaEP"] = "Por favor, selecciona la provincia del paciente.";
        }

        // Localidad de EP 
        if (!campo["localidadEP"]) {
            formularioValido = false;
            error["localidadEP"] = "Por favor, selecciona la localidad del paciente.";
        }

        // Municipio de EP 
        if (!campo["municipioEP"]) {
            formularioValido = false;
            error["municipioEP"] = "Por favor, selecciona el municipio del paciente.";
        }

        // Ocupacion previa de EP 
        if (!campo["ocupacionPEP"]) {
            formularioValido = false;
            error["ocupacionPEP"] = "Por favor, selecciona la ocupación previa del paciente.";
        }

        // Ocupacion actual de EP 
        if (!campo["ocupacionAEP"]) {
            formularioValido = false;
            error["ocupacionAEP"] = "Por favor, selecciona la ocupacion actual del paciente.";
        }
        
        //Datos Referente
        // Nombre de R 
        if (!campo["nombreR"]) {
            formularioValido = false;
            error["nombreR"] = "Por favor, ingresa el nombre del referente.";
        }

        // Apellido de R 
        if (!campo["apellidoR"]) {
            formularioValido = false;
            error["apellidoR"] = "Por favor, ingresa el apellido del referente.";
        }

        // Sexo de R
        if (!campo["sexoR"]) {
            formularioValido = false;
            error["sexoR"] = "Por favor, selecciona el sexo del referente.";
        }

        // Fecha de Nacimiento de R 
        if (!campo["nacimientoR"]) {
            formularioValido = false;
            error["nacimientoR"] = "Por favor, ingresa la fecha de nacimiento del referente.";
        }

        // Telefono de R
        if (!campo["telefonoR"]) {
            formularioValido = false;
            error["telefonoR"] = "Por favor, ingresa el telefono del referente.";
        }
        

        // Seteo el estado de error 
        this.setState({
            error: error
        });

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
            title: 'Formulario enviado con éxito!',
            showConfirmButton: false,
            timer: 1500,
        });
        setTimeout('window.location.reload(true)', 1500);
    }

    errorSend() {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Formulario incompleto',
            text: 'Campos vacíos o incorrectos.',
            confirmButtonText: 'OK',
        });
    }

    render() {
        return (
            <form onSubmit={this.enviarFormulario.bind(this)}>
                <main class="border-top-sm m-0 row justify-content-center form-paciente m-md-3 rounded shadow container-lg mx-md-auto">

                    <h1 class="mt-4 mt-md-2 text-center">Persona con EP</h1>
                    <h3 class=" mt-4">Datos Personales</h3>
                    <hr />
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" id="nombreEP" aria-describedby="nombreEPHelp" onChange={this.detectarCambio.bind(this, "nombreEP")} value={this.state.campo["nombreEP"] || ''} />
                        <span style={{ color: "red" }}>{this.state.error["nombreEP"]}</span>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class=" col-form-label">Apellido</label>
                        <input type="text" class="form-control" placeholder="Apellido" id="apellidoEP" aria-describedby="apellidoEPHelp" onChange={this.detectarCambio.bind(this, "apellidoEP")} value={this.state.campo["apellidoEP"] || ''} />
                        <span style={{ color: "red" }}>{this.state.error["apellidoEP"]}</span>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class=" col-form-label">Sexo</label>
                        <select className="form-select" id="sexoEP" onChange={this.detectarCambio.bind(this, "sexoEP")} value={this.state.campo["sexoEP"] || ''}>
                            <option value="">Sexo</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                            <option value="3">Otro</option>
                        </select>
                        <span style={{ color: "red" }}>{this.state.error["sexoEP"]}</span>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class=" col-form-label">Fecha de Nacimiento</label>
                        <input type="date" class="form-control" placeholder="Fecha de Nacimiento" id="nacimientoEP" aria-describedby="nacimientoEPHelp" onChange={this.detectarCambio.bind(this, "nacimientoEP")} value={this.state.campo["nacimientoEP"] || ''} />
                        <span style={{ color: "red" }}>{this.state.error["nacimientoEP"]}</span>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3 ">
                        <label class=" col-form-label ">Telefono</label>
                        <input type="number" class="form-control" placeholder="Telefono" id="telefonoEP" aria-describedby="telefonoEPHelp" onChange={this.detectarCambio.bind(this, "telefonoEP")} value={this.state.campo["telefonoEP"] || ''} />
                        <span style={{ color: "red" }}>{this.state.error["telefonoEP"]}</span>
                    </div>

                    <div class="w-100"></div>

                    <div class="mb-4 mx-3  d-flex justify-content-between justify-content-md-around col-12 col-md-4 mx-md-0">
                        <label for="vive_solo">Vive Solo</label>
                        <div class="form-check">
                            <input class="form-check-input " type="checkbox" value="" id="vive_solo" />
                        </div>
                    </div>

                    <div class="mb-4 mx-3 d-flex justify-content-between justify-content-md-around col-12 col-md-4 mx-md-0">
                        <label for="tiene_cuidador">Tiene Cuidador</label>
                        <div class="form-check">
                            <input class="form-check-input " type="checkbox" value="" id="tiene_cuidador" />
                        </div>
                    </div>

                    <div class="mb-3 mx-3 d-flex justify-content-between justify-content-md-around col-12 col-md-4 mx-md-0">
                        <label for="tiene_acompañante_terapeutico">Tiene Acompañante Terapeutico</label>
                        <div class="form-check">
                            <input class="form-check-input " type="checkbox" value="" id="tiene_acompañante_terapeutico" />
                        </div>
                    </div>
                    <h3 class="mt-4">Vivienda</h3>
                    <hr />
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Provincia</label>
                        <div>
                            <select class="form-select" id="provinciaEP" onChange={this.detectarCambio.bind(this, "provinciaEP")} value={this.state.campo["provinciaEP"] || ''}>
                                <option value="">Provincia</option>
                                <option value="1">Buenos Aires</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["provinciaEP"]}</span>
                        </div>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Localidad</label>
                        <div>
                            <select class="form-select" id="localidadEP" onChange={this.detectarCambio.bind(this, "localidadEP")} value={this.state.campo["localidadEP"] || ''}>
                                <option value="">Localidad</option>
                                <option value="1">Los Hornos</option>
                                <option value="2">La Plata</option>
                                <option value="3">Ensenada</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["localidadEP"]}</span>
                        </div>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Municipio</label>
                        <div>
                            <select class="form-select" id="municipioEP" onChange={this.detectarCambio.bind(this, "municipioEP")} value={this.state.campo["municipioEP"] || ''}>
                                <option value="">Municipio</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["municipioEP"]}</span>
                        </div>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Calle</label>
                        <div>
                            <input type="number" class="form-control" placeholder="Calle" id="calleEP" aria-describedby="calleEPHelp" onChange={this.detectarCambio.bind(this, "calleEP")} value={this.state.campo["calleEP"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["calleEP"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Numero</label>
                        <div>
                            <input type="number" class="form-control" placeholder="Numero" id="numeroEP" aria-describedby="numeroEPHelp" onChange={this.detectarCambio.bind(this, "numeroEP")} value={this.state.campo["numeroEP"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["numeroEP"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Vivienda</label>
                        <div>
                            <select class="form-select" id="viviendaEP" onChange={this.detectarCambio.bind(this, "viviendaEP")} value={this.state.campo["viviendaEP"] || ''}>
                                <option value="">Vivienda</option>
                                <option value="1">Casa</option>
                                <option value="2">Departamento</option>
                                <option value="3">Otro</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["viviendaEP"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Piso</label>
                        <div>
                            <input type="text" class="form-control" placeholder="Piso" id="pisoEP" aria-describedby="pisoEPHelp" onChange={this.detectarCambio.bind(this, "pisoEP")} value={this.state.campo["pisoEP"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["pisoEP"]}</span>
                        </div>
                    </div>

                    <h3 class="mt-4">Datos Academicos</h3>
                    <hr />
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-lg-4 col-lg-4 col-xl-3">
                        <label class="col-form-label">Maxima Escolaridad</label>
                        <div>
                            <select class="form-select" id="escolaridadEP" onChange={this.detectarCambio.bind(this, "escolaridadEP")} value={this.state.campo["escolaridadEP"] || ''}>
                                <option value="">Escolaridad </option>
                                <option value="1">Primario </option>
                                <option value="2">Secundario</option>
                                <option value="3">Terciario</option>
                                <option value="4">Univercitario</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["escolaridadEP"]}</span>
                        </div>
                    </div>

                    <h3 class="mt-4">Ocupación</h3>
                    <hr />
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-lg-4 col-xl-3">
                        <label class="col-form-label">Ocupacion Previa</label>
                        <div>
                            <select class="form-select" id="ocupacionPEP" onChange={this.detectarCambio.bind(this, "ocupacionPEP")} value={this.state.campo["ocupacionPEP"] || ''}>
                                <option value="">Profesion</option>
                                <option value="1">Desocupado</option>
                                <option value="2">Ocupado</option>
                                <option value="3">Subocupado</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["ocupacionPEP"]}</span>
                        </div>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-lg-4 col-xl-3">
                        <label class="col-form-label">Ocupacion Actual</label>
                        <div>
                            <select class="form-select" id="ocupacionAEP" onChange={this.detectarCambio.bind(this, "ocupacionAEP")} value={this.state.campo["ocupacionAEP"] || ''}>
                                <option value="">Profesion</option>
                                <option value="1">Desocupado</option>
                                <option value="2">Ocupado</option>
                                <option value="3">Subocupado</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["ocupacionAEP"]}</span>
                        </div>
                    </div>
                    <hr />
                    <h1 class="mt-4 mt-md-2 text-center">Referente</h1>
                    <h3 class=" mt-4">Datos Personales</h3>
                    <hr />
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Nombre</label>
                        <div>
                            <input type="text" class="form-control" placeholder="Nombre" id="nombreR" aria-describedby="nombreRHelp" onChange={this.detectarCambio.bind(this, "nombreR")} value={this.state.campo["nombreR"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["nombreR"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Apellido</label>
                        <div>
                            <input type="text" class="form-control" placeholder="Apellido" id="apellidoR" aria-describedby="apellidoRHelp" onChange={this.detectarCambio.bind(this, "apellidoR")} value={this.state.campo["apellidoR"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["apellidoR"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3 ">
                        <label class="col-form-label">Sexo</label>
                        <div>
                            <select className="form-select" id="sexoR" onChange={this.detectarCambio.bind(this, "sexoR")} value={this.state.campo["sexoR"] || ''}>
                                <option value="">Sexo</option>
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                                <option value="3">Otro</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["sexoR"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Fecha de Nacimiento</label>
                        <div>
                            <input type="date" class="form-control" placeholder="Fecha de Nacimiento" id="nacimientoR" aria-describedby="nacimientoRHelp" onChange={this.detectarCambio.bind(this, "nacimientoR")} value={this.state.campo["nacimientoR"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["nacimientoR"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label ">Telefono</label>
                        <div>
                            <input type="number" class="form-control" placeholder="Telefono" id="telefonoR" aria-describedby="telefonoRHelp" onChange={this.detectarCambio.bind(this, "telefonoR")} value={this.state.campo["telefonoR"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["telefonoR"]}</span>
                        </div>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-5 col-xl-4">
                        <label class="col-form-label">Parentesco en referencia a la persona con EP</label>
                        <div>
                            <select class="form-select" id="parentescoR" onChange={this.detectarCambio.bind(this, "parentescoR")} value={this.state.campo["parentescoR"] || ''}>
                                <option value="">Parentesco</option>
                                <option value="1">Familiar</option>
                                <option value="2">Empleado</option>
                                <option value="3">Conocido</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["parentescoR"]}</span>
                        </div>
                    </div>
                    <h3 class="mt-4">Vivienda</h3>
                    <hr />
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Provincia</label>
                        <div>
                            <select class="form-select" id="provinciaR" onChange={this.detectarCambio.bind(this, "provinciaR")} value={this.state.campo["provinciaR"] || ''}>
                                <option value="">Provincia</option>
                                <option value="1">Buenos Aires</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["provinciaR"]}</span>
                        </div>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Localidad</label>
                        <div>
                            <select class="form-select" id="localidadR" onChange={this.detectarCambio.bind(this, "localidadR")} value={this.state.campo["localidadR"] || ''}>
                                <option value="">Localidad</option>
                                <option value="1">Los Hornos</option>
                                <option value="2">La Plata</option>
                                <option value="3">Ensenada</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["localidadR"]}</span>
                        </div>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Municipio</label>
                        <div>
                            <select class="form-select" id="municipioR" onChange={this.detectarCambio.bind(this, "municipioR")} value={this.state.campo["municipioR"] || ''}>
                                <option value="">Municipio</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["municipioR"]}</span>
                        </div>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Calle</label>
                        <div>
                            <input type="number" class="form-control" placeholder="Calle" id="calleR" aria-describedby="calleRHelp" onChange={this.detectarCambio.bind(this, "calleR")} value={this.state.campo["calleR"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["calleR"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Numero</label>
                        <div>
                            <input type="number" class="form-control" placeholder="Numero" id="numeroR" aria-describedby="numeroRHelp" onChange={this.detectarCambio.bind(this, "numeroR")} value={this.state.campo["numeroR"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["numeroR"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Vivienda</label>
                        <div>
                            <select class="form-select" id="viviendaR" onChange={this.detectarCambio.bind(this, "viviendaR")} value={this.state.campo["viviendaR"] || ''}>
                                <option value="">Vivienda</option>
                                <option value="1">Casa</option>
                                <option value="2">Departamento</option>
                                <option value="3">Otro</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.error["viviendaR"]}</span>
                        </div>
                    </div>

                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Piso</label>
                        <div>
                            <input type="text" class="form-control" placeholder="Piso" id="pisoR" aria-describedby="pisoRHelp" onChange={this.detectarCambio.bind(this, "pisoR")} value={this.state.campo["pisoR"] || ''} />
                            <span style={{ color: "red" }}>{this.state.error["pisoR"]}</span>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <button type="submit" class="mb-3 col-6 btn btn-success col-md-3 col-xl-2" >Confirmar</button>
                </main>
            </form>

        )
    }
}
//onClick={this.send}
export default Form;

