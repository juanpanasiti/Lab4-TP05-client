import React,{Component} from "react";
import Navigation from "./Navigation";

import {Container, Row} from "react-bootstrap";

class DondeEstamos extends Component{
    constructor() {
        super();
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return(
            <React.Fragment>
                <Navigation/>
                <div style={{ height: '100vh', width: '100%', paddingTop:'30px' }}>
                    <Container>
                        <Row>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1150.8437217906621!2d-68.83885181202166!3d-32.886040371207955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1589426537688!5m2!1ses!2sar"
                                width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""
                                aria-hidden="false" tabIndex="0">
                            </iframe>
                        </Row>
                        <Row>
                            Estamos en: Av. Las Heras y Av. San Martin, Ciudad de Mendoza
                        </Row>
                    </Container>

                </div>
            </React.Fragment>
        )
    }

}
export default DondeEstamos;