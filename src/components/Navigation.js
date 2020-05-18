import React,{Component} from "react";
import {Nav, Navbar} from "react-bootstrap";

class Navigation extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/location">Donde Estamos</Nav.Link>
                        <Nav.Link href="/products">Productos</Nav.Link>
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }

}
export default Navigation;