import React, {Component} from 'react';
import Home from './components/Home';
import DondeEstamos from './components/DondeEstamos';
import Productos from './components/Productos';
import Producto from "./components/Producto";
import FormInstrumento from "./components/FormInstrumento";
import Formulario from "./components/Formulario";
import {Switch, Route} from 'react-router-dom';
import './assets/css/App.css';

class App extends Component{
  render() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/location" component={DondeEstamos} />
            <Route exact path="/products" component={Productos} />
            <Route exact path="/product/:id" component={Producto}/>
            <Route exact path="/products/new" component={FormInstrumento}/>
            <Route exact path="/formulario" component={Formulario}/>
        </Switch>
    )
  }
}

export default App;
