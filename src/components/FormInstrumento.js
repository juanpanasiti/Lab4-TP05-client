import React,{Component} from "react";
import axios from 'axios';
import Navigation from "./Navigation";
import Formulario from "./Formulario";


class FormInstrumento extends Component{
    constructor() {
        super();

    }//constructor


    render() {
        const instr = this.state
        return(
            <React.Fragment>
                <Navigation/>
                <h1>Agregar Instrumento</h1>
                <Formulario id={this.props.id} />

            </React.Fragment>

        )
    }

}
export default FormInstrumento;