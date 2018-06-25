import React from 'react';
import './../css/Contact.css';
import NavBar from './NavBar';
import { Grid, Row, Col } from 'react-bootstrap';

class Contact extends React.Component{
    render(){
        return(
            <Grid fluid>
                <Row>
                    <NavBar/>
                    <Col className="default-background" xs={12} md={10}>
                        <Row className="align-center">
                            <Col xs={12} md={10} className="title-section">
                                <h1>Contáctame</h1> 
                            </Col>
                        </Row>
                        <Row className="align-center">
                            <Col xs={8} md={10}> 
                                <Row className="text-center">
                                    <Col xs={12} md={3}>
                                        <a href="https://api.whatsapp.com/send?phone=5215531130239" target="_blank" target="_blank"><i class="icon fab fa-whatsapp"></i></a>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <a href="https://www.linkedin.com/in/gabriela-lf/"><i class="icon fab fa-linkedin"></i></a>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <a href="https://github.com/G4br13l4"><i class="icon fab fa-github"></i></a>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <a href="mailto:gab_lop@live.com.mx" target="_blank"><i class="icon far fa-envelope"></i></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
            );
        }
    }


export default Contact;