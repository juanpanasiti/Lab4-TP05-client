import React, {Component} from "react";
import Item from "./Item";
import Navigation from "./Navigation";
import Button from "react-bootstrap/Button";

class Productos extends Component{
    constructor() {
        super();
        this.state = {
            db: [],
        }
    }//constructor

    componentDidMount() {
       this._isMounted = true;
       this.getInstrumentosServer();
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    getInstrumentosServer(){
        fetch('http://localhost:9002/api/v1/instrumento/')
            .then((response) => response.json())
            .then((responseJson)=>{
                this.setState({db:responseJson});
            })
    }//getInstrumentosServer()


    render() {
        const instrumentos = this.state.db.map((instrumento,i)=> {
            return (
                <Item
                    id={instrumento.id}
                    instrumento={instrumento.instrumento}
                    marca={instrumento.marca}
                    modelo={instrumento.modelo}
                    imagen={instrumento.imagen}
                    precio={instrumento.precio}
                    costoEnvio={instrumento.costoEnvio}
                    cantidadVendida={instrumento.cantidadVendida}
                    descripcion={instrumento.descripcion}
                >

                </Item>
            )
        })
        return (
          <React.Fragment>
              <Navigation/>
              {/*<Button variant="success" href={'/products/new'}>Agregar Instrumento</Button>*/}
              <Button variant="success" href={'/formulario'}>Agregar Instrumento</Button>
              {instrumentos}

          </React.Fragment>
        );
    }
}
export default Productos;