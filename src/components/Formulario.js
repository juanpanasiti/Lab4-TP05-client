import React,{Component} from "react";
import Axios from 'axios';
import Navigation from "./Navigation";
import { Link } from "react-router-dom";


export default class Formulario extends Component{
    constructor() {
        super();
        this.state = {
            instrumento: "",
            marca:"",
            modelo:""
        }
    }//constructor

    handleChange = (e)=>{
        this.setState({
            instrumento:'',
            marca:'',
            modelo:'',
            imagen:'',
            precio:'',
            costoEnvio:'',
            cantidadVendida:'',
            descripcion:'',
            edit:false,
            _id: ''
        });
    }//handleChange()

    async componentDidMount(){
        if(this.props.match.params.id){
            const res = await Axios.get(
                'http://localhost:9002/api/v1/instrumento/'+this.props.match.params.id
            );
            this.setState({
                instrumento: res.data.instrumento,
                marca:res.data.marca,
                modelo:res.data.modelo,
                imagen:res.data.imagen,
                precio:res.data.precio,
                costoEnvio:res.data.costoEnvio,
                cantidadVendida:res.data.cantidadVendida,
                descripcion:res.data.descripcion,
                edit: true,
                _id: this.props.params.id
            })
        }
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = async e => {
        e.preventDefault();
        const newProduct = {
            instrumento:this.state.instrumento,
            marca:this.state.marca,
            modelo:this.state.modelo,
            imagen:this.state.imagen,
            precio:this.state.precio,
            costoEnvio:this.state.costoEnvio,
            cantidadVendida:this.state.cantidadVendida,
            descripcion:this.state.descripcion
        };
        if(this.state.edit){
            await Axios.put('http://localhost:9002/api/v1/instrumento/'+ this.state.id, newProduct);
        } else {
            await Axios.post('http://localhost:9002/api/v1/instrumento/', newProduct);
        }
        window.location.href = "/products";
    }

    render() {
        return(
            <React.Fragment>
                <Navigation/>
                <div className="container w-50 pt-3">
                    <h2>Formulario de Productos</h2>
                    <form onSubmit={this.onSubmit} className="form-group">
                        <label className="col-form-label col-form-label-sm">
                            Instrumento:
                        </label>
                        <input type="text"
                               className="form-control form-control-sm"
                               name="instrumento"
                               onChange={this.handleInputChange}
                               value={this.state.instrumento || ""}/>


                        <label className="col-form-label col-form-label-sm">
                            Marca:
                        </label>
                        <input type="text"
                               className="form-control form-control-sm"
                               name="marca"
                               onChange={this.handleInputChange}
                               value={this.state.marca || ""}/>

                        <label className="col-form-label col-form-label-sm">
                            Modelo:
                        </label>
                        <input type="text"
                               className="form-control form-control-sm"
                               name="modelo"
                               onChange={this.handleInputChange}
                               value={this.state.modelo || ""} />

                        <label className="col-form-label col-form-label-sm">
                            Precio:
                        </label>
                        <input type="number"
                               className="form-control form-control-sm"
                               name="precio"
                               onChange={this.handleInputChange}
                               value={this.state.precio || ""} />

                        <label className="col-form-label col-form-label-sm">
                            Costo de Envío:
                        </label>
                        <input type="number"
                               className="form-control form-control-sm"
                               name="costoEnvio"
                               onChange={this.handleInputChange}
                               value={this.state.costoEnvio || ""} />

                        <label className="col-form-label col-form-label-sm">
                            Cantidad Vendida:
                        </label>
                        <input type="number"
                               className="form-control form-control-sm"
                               name="cantidadVendida"
                               onChange={this.handleInputChange}
                               value={this.state.cantidadVendida || ""} />

                        <label className="col-form-label col-form-label-sm">
                            Imagen:
                        </label>
                        <input type="file"
                               className=""
                               name="imagen"
                               onChange={this.handleInputChange}
                               value={this.state.imagen || ""} />

                        <label className="col-form-label col-form-label-sm">
                            Descripción:
                        </label>
                        <input type="text"
                               className="form-control form-control-sm"
                               name="descripcion"
                               onChange={this.handleInputChange}
                               value={this.state.descripcion || ""} />



                        <button type="submit" className="btn btn-success w-100 m-1">
                            Guardar
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
