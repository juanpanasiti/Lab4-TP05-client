import React, {Component} from "react";
import Image from "react-bootstrap/Image";
import NumberFormat from 'react-number-format';
import axios from 'axios';

class Item extends Component{
    constructor() {
        super();

    }

    handleClick = id => {
        axios.delete('http://localhost:9002/api/v1/instrumento/'+id)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload(false);
            })
    }

    render() {
        var envio;
        if(this.props.costoEnvio === 0.0){
            envio = <p className="envioGratis">
                <Image src={require(`../assets/img/camion.png`)} />
                Envío gratis a todo el país
                </p>
        } else {
            envio = <p className="envioPago">Costo de Envio interior de Argentina: ${this.props.costoEnvio}</p>
        }
        return(
            <div className="itemContainer">
                <a href={`product/${this.props.id}`}>
                    <Image
                        className="imagenItem"
                        variant="top"
                        //src={require(`../assets/img/${this.props.imagen}`)}
                        style={{float: "" }}
                        href="#"
                    />
                </a>

                    <div className="descripcionItem">
                        <h2>{this.props.instrumento}</h2>
                        <h3>
                            <NumberFormat value={this.props.precio} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$'} />
                        </h3>
                        {envio}
                        <p>
                            {this.props.cantidadVendida} vendidos
                        </p>
                    </div>
                <button id={this.props.id} onClick={() => this.handleClick(this.props.id)}>Borrar</button>
            </div>
        )
    }//render()
}
export default Item;