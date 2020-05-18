import React, {Component} from "react";

import Image from "react-bootstrap/Image";
import NumberFormat from 'react-number-format';
import {Button, Col, Container, Row} from "react-bootstrap";
import Navigation from "./Navigation";
import axios from "axios";
import  { Redirect } from 'react-router-dom'

class Producto extends Component{
    constructor() {
        super();
        this.state = {
            db: [],
        }
    }//constructor

    handleClick = id => {
        axios.delete('http://localhost:9002/api/v1/instrumento/'+id)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.props.history.push('/products')
            })
    }

    componentDidMount() {
        this._isMounted = true;
        this.getInstrumentoServer(this.props.match.params.id);
    }

    getInstrumentoServer(id){
        fetch('http://localhost:9002/api/v1/instrumento/'+id)
            .then((response) => response.json())
            .then((responseJson)=>{
                this.setState({db:responseJson});
            })

    }//getInstrumentosServer()

    render() {
        //const paramId = this.props.match.params.id;
        const instrumento = this.state.db//instrumentos.filter(inst => inst.id === paramId);

        var envio;
        if(instrumento.costoEnvio === 0.0){
            envio = <p className="envioGratis">
                <Image src={require(`../assets/img/camion.png`)} />
                Envío gratis
            </p>
        } else {
            envio = <p className="envioPago">Costo de Envio interior de Argentina: ${instrumento.costoEnvio}</p>
        }

        return(
            <React.Fragment>
                <Navigation/>
                <Container>
                    <Row>
                        <Col md={8}>
                            <Row>
                                <Image
                                    className="imagenProduct"
                                    variant="top"
                                    //src={require(`../assets/img/${instrumento.imagen.toLowerCase()}`)}
                                    style={{float: "" }}
                                    href="#"
                                />
                            </Row>
                            <Row>
                                <p className="descriptionContainer">
                                    Descripción: <br/>
                                    {instrumento.descripcion}
                                </p>
                            </Row>
                        </Col>

                        <Col>
                            <div className="descripcionContainer">
                                <h6 className="vendidos">
                                    {instrumento.cantidadVendida} vendidos
                                </h6>
                                <h2>{instrumento.instrumento}</h2>
                                <br/>
                                <h1>
                                    <NumberFormat value={instrumento.precio} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$'} />
                                </h1>
                                <br/>
                                <p>
                                    Marca: {instrumento.marca}
                                    <br/>
                                    Modelo: {instrumento.modelo}
                                </p>
                                Costo Envio: <br/>
                                {envio}
                                <br/>
                                <br/>
                                <Button variant="outline-primary" size="lg">Agregar al carrito</Button>
                                <br/>
                                <br/>
                                <button id={instrumento.id} onClick={() => this.handleClick(instrumento.id)}>Eliminar producto</button>
                            </div>
                        </Col>
                    </Row>
                </Container>




            </React.Fragment>


    )
    }//render()

}//class
export default Producto;