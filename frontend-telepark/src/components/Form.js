import React from 'react';

import './styles/form.css';

class Form extends React.Component {
    render() {
        return (
            <main class=" m-0 row justify-content-center form-paciente w-100">
                <hr />
                <h1 class="mt-4 mt-md-2 text-center">Paciente con EP</h1>
                <h3 class=" mt-4">Datos Personales</h3>
                <hr />
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Nombre</label>
                    <input type="text" class="form-control" placeholder="Nombre" />
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class=" col-form-label">Apellido</label>
                    <input type="text" class="form-control" placeholder="Apellido" />
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class=" col-form-label">Sexo</label>
                    <select class="form-select">
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                        <option value="3">Otro</option>
                    </select>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class=" col-form-label">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" placeholder="Fecha de Nacimiento" />
                </div>

                <div class="mb-4 col-12 col-md-6 ">
                    <label class=" col-form-label ">Telefono</label>
                    <input type="text" class="form-control" placeholder="Telefono" />
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
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Provincia</label>
                    <div>
                        <select class="form-select">
                            <option selected>Provincia</option>
                            <option value="1">Buenos Aires</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Localidad</label>
                    <div>
                        <select class="form-select">
                            <option selected>Localidad</option>
                            <option value="1">Los Hornos</option>
                            <option value="2">La Plata</option>
                            <option value="3">Ensenada</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Municipio</label>
                    <div>
                        <select class="form-select">
                            <option selected>Municipio</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Calle</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Calle" />
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Numero</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Numero" />
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Vivienda</label>
                    <div>
                        <select class="form-select">
                            <option selected>Vivienda</option>
                            <option value="1">Casa</option>
                            <option value="2">Departamento</option>
                            <option value="3">Otro</option>

                        </select>
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Piso</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Piso" />
                    </div>
                </div>

                <h3 class="mt-4">Datos Academicos</h3>
                <hr />
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Maxima Escolaridad</label>
                    <div>
                        <select class="form-select">
                            <option selected>Primario </option>
                            <option value="1">Secundario</option>
                            <option value="2">Terciario</option>
                            <option value="3">Univercitario</option>
                        </select>
                    </div>
                </div>

                <h3 class="mt-4">Ocupación</h3>
                <hr />
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Ocupacion Previa</label>
                    <div>
                        <select class="form-select">
                            <option selected>Profesion</option>
                            <option value="1">Desocupado</option>
                            <option value="2">Ocupado</option>
                            <option value="3">Subocupado</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Ocupacion Actual</label>
                    <div>
                        <select class="form-select">
                            <option selected>Profesion</option>
                            <option value="1">Desocupado</option>
                            <option value="2">Ocupado</option>
                            <option value="3">Subocupado</option>
                        </select>
                    </div>
                </div>
                <hr />
                <h1 class="mt-4 mt-md-2 text-center">Referente</h1>
                <h3 class=" mt-4">Datos Personales</h3>
                <hr />
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Nombre</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Nombre" />
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Apellido</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Apellido" />
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6 ">
                    <label class="col-form-label">Sexo</label>
                    <div>
                        <select class="form-select">
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                            <option value="3">Otro</option>
                        </select>
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Fecha de Nacimiento</label>
                    <div>
                        <input type="date" class="form-control" placeholder="Fecha de Nacimiento" />
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label ">Telefono</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Telefono" />
                    </div>
                </div>
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Parentesco en referencia a la persona con EP</label>
                    <div>
                        <select class="form-select">
                            <option selected>Parentesco</option>
                            <option value="1">Familiar</option>
                            <option value="2">Empleado</option>
                            <option value="3">Conocido</option>
                        </select>
                    </div>
                </div>
                <h3 class="mt-4">Vivienda</h3>
                <hr />
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Provincia</label>
                    <div>
                        <select class="form-select">
                            <option selected>Provincia</option>
                            <option value="1">Buenos Aires</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Localidad</label>
                    <div>
                        <select class="form-select" >
                            <option selected>Localidad</option>
                            <option value="1">Los Hornos</option>
                            <option value="2">La Plata</option>
                            <option value="3">Ensenada</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Municipio</label>
                    <div>
                        <select class="form-select">
                            <option selected>Municipio</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Calle</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Calle" />
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Numero</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Numero" />
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Vivienda</label>
                    <div>
                        <select class="form-select">
                            <option selected>Vivienda</option>
                            <option value="1">Casa</option>
                            <option value="2">Departamento</option>
                            <option value="3">Otro</option>
                        </select>
                    </div>
                </div>

                <div class="mb-4 col-12 col-md-6">
                    <label class="col-form-label">Piso</label>
                    <div>
                        <input type="text" class="form-control" placeholder="Piso" />
                    </div>
                </div>

            </main>
        )
    }
}
export default Form;