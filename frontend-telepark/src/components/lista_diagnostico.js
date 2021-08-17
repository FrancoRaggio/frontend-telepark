import React from 'react';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class ListaDiagnostico extends React.Component {

    constructor(props) {
        super(props);

        // Defino los estados locales 
        this.state = {
            show:false,
            showNuevo:false,
            nomEnfermedad:'',
            fechaEnfermedad:'',
            currentIndex:'',
            indexAgregar:6,
            arrayEnfermedades:[{id:1,enfermedad:'Diabetes',fecha:'05/09/2021'},{id:2,enfermedad:'Asma',fecha:'15/12/2018'},
                                {id:3,enfermedad:'Parkinson',fecha:'19/07/2011'},{id:4,enfermedad:'Cancer',fecha:'17/02/2010'},
                                {id:5,enfermedad:'Asperger',fecha:'05/07/2007'},{id:6,enfermedad:'Alzheimer',fecha:'05/09/2005'},
                                ],
            
            campo:{
                enfermedad:'',
                fecha:''
                }
        }
    }

    editar(enfermedad, fecha, index){
        this.setState({show:true, showNuevo:false, nomEnfermedad:enfermedad, fechaEnfermedad:fecha, currentIndex:index});
    }

    guardar(){
        let nomEnfermedad=this.state.campo.enfermedad;
        let fechaEnfermedad=this.state.campo.fecha;
        let index=this.state.currentIndex;
        if(nomEnfermedad!='' & fechaEnfermedad!='' ){
        var vectorEnfermedades = this.state.arrayEnfermedades;
        vectorEnfermedades[index].enfermedad=nomEnfermedad;
        vectorEnfermedades[index].fecha=fechaEnfermedad;
        this.setState({arrayEnfermedades:vectorEnfermedades,
                        campo:{enfermedad:'',
                        fecha:''},
                        show:false
                });
        }    
    }

    cancelar(){
        this.setState({show:false, showNuevo:false})
    }

    detectarCambio(field, e){
        let campo=this.state.campo;
        campo[field]=e.target.value;
        this.setState({
            campo
        });
        console.log(campo);
    }

    agregar(){
        this.setState({showNuevo:true, show:false})
    }

    cargarNuevo(){
        let nomEnfermedad=this.state.campo.enfermedad;
        let fechaEnfermedad=this.state.campo.fecha;
        let index=this.state.indexAgregar;
        if(nomEnfermedad!='' & fechaEnfermedad!='' ){
        var vectorEnfermedades = this.state.arrayEnfermedades;
        vectorEnfermedades.push({id:index+1,enfermedad:nomEnfermedad, fecha:fechaEnfermedad})
        this.setState({arrayEnfermedades:vectorEnfermedades,
                        campo:{enfermedad:'',
                        fecha:''},
                        showNuevo:false,
                        indexAgregar:index+1
                });
        }  
    }

    eliminar(index){
        const vectorEnfermedades=this.state.arrayEnfermedades.filter(enfermedad=>enfermedad.id!==(index));
        this.setState({arrayEnfermedades:vectorEnfermedades, show:false})
    }

    render() {
            const {arrayEnfermedades}=this.state;
            const paciente='Hernan Gutierrez';
            const {show, showNuevo}=this.state;
        return (
            <main class="border-top-sm m-0 row justify-content-center form-paciente m-md-3 rounded shadow container-lg mx-md-auto" style={{paddingTop:20}}>
                <div class="mb-4 col-12 col-md-9 col-lg-12 col-xl-10">
                    <h3 class="mt-4">Diagnostico de Enfermadades</h3>
                <hr />
                <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                    <a><b>Nombre y Apellido:</b> {paciente}</a>
                </div>
                <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                <button type="button" class="btn btn-primary" onClick={() => this.agregar()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                    </svg>Agregar</button>
                </div>
                
                <span>
                {showNuevo ? (
                <div class="border-top-sm m-0 row justify-content-center form-paciente m-md-3 rounded shadow container-lg mx-md-auto">
                    <h4 class="mt-4">Nuevo Diagnostico</h4>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Nombre de Enfermedad</label>
                        <input type="text" class="form-control" placeholder="Ingrese enfermedad..." id="enfermedad" onChange={this.detectarCambio.bind(this, "enfermedad")}/>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Fecha de Diagnostico</label>
                        <input type="date" class="form-control" id="fecha" onChange={this.detectarCambio.bind(this, "fecha")}/>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3" style={{textAlign:'center', paddingTop:38}}>
                        <button type="submit" class="btn btn-success" style={{width:'40%'}} onClick={() => this.cargarNuevo()}>Confirmar</button>
                        <button type="submit" class="btn btn-danger" style={{width:'40%', marginLeft:10}} onClick={() => this.cancelar()}>Cancelar</button>
                    </div>
                </div>
                ):('')}
                </span>

                <span>
                {show ? (
                <div class="border-top-sm m-0 row justify-content-center form-paciente m-md-3 rounded shadow container-lg mx-md-auto">
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Nombre de Enfermedad</label>
                        <input type="text" class="form-control" placeholder="Ingrese enfermedad..." id="enfermedad" onChange={this.detectarCambio.bind(this, "enfermedad")}/>
                        <span style={{ color: "red", paddingLeft:10 }}>{this.state.nomEnfermedad}</span>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3">
                        <label class="col-form-label">Fecha de Diagnostico</label>
                        <input type="date" class="form-control" id="fecha" onChange={this.detectarCambio.bind(this, "fecha")}/>
                        <span style={{ color: "red", paddingLeft:10 }}>{this.state.fechaEnfermedad}</span>
                    </div>
                    <div class="mb-4 col-12 col-md-6 col-lg-4 col-xl-3" style={{textAlign:'center', paddingTop:38}}>
                        <button type="submit" class="btn btn-success" style={{width:'40%'}} onClick={() => this.guardar()}>Confirmar</button>
                        <button type="submit" class="btn btn-danger" style={{width:'40%', marginLeft:10}} onClick={() => this.cancelar()}>Cancelar</button>
                    </div>
                </div>
                ):('')}
                </span>
                
                <table class="table table-bordered table-hover shadow" style={{marginTop:10}}>
                <thead>
                    <tr>
                    <th scope="col">Nombre de Enfermedad</th>
                    <th scope="col">Fecha de Diagnostico</th>
                    <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody style={{verticalAlign:'middle'}}>
                    
                    {arrayEnfermedades &&
                                    arrayEnfermedades.map((enfermedad, index) => (
                                        <tr>
                                        <td>{enfermedad.enfermedad}</td>
                                        <td>{enfermedad.fecha}</td>
                                        <td><button type="button" class="btn btn-success" style={{marginRight:10}} onClick={() => this.editar(enfermedad.enfermedad, enfermedad.fecha, index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                </svg>Editar</button>
                                            <button type="button" class="btn btn-danger" onClick={() => this.eliminar(enfermedad.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg>Eliminar</button>
                                        </td>
                                        </tr>
                                    ))}
                </tbody>
                </table>
                </div>

                
            </main>
        )
    }
}

export default ListaDiagnostico;
