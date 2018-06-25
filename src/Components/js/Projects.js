import React from 'react';
import './../css/Projects.css';
import NavBar from './NavBar';
import { Grid, Row, Col } from 'react-bootstrap';

class Projects extends React.Component{
    render(){
        return(
            <Grid fluid>
                <Row>
                    <NavBar/>
                    <Col className="default-background height-auto" xs={12} md={10}>
                        <Row className="align-center">
                            <Col xs={12} md={10} className="title-section">
                                <h1>Proyectos</h1> 
                            </Col>
                        </Row>
                        <Row className="align-center">
                            <Col xs={12} md={11}>
                                <Row className="equal-height space-a">
                                    <Col className="projects_1" xs={11} md={3}>
                                        <h3>Pokedex</h3>
                                        <p>CSS, Bootstrap 3, Javascript, jQuery, PokeApi</p>
                                        <div>
                                            <button className="projects_btn --cod"><a href="https://github.com/G4br13l4/pokedex">Código</a></button>
                                            <button className="projects_btn --dem"><a href="https://g4br13l4.github.io/pokedex/">Demo</a></button>
                                        </div>
                                    </Col>    
                                    <Col className="projects_2" xs={11} md={3}>
                                        <h3>Ecommerce</h3>
                                        <p>Javascript, jQuery, Firebase, LocalStorage, Paypal & Mercado Libre APIs</p>
                                        <div>
                                            <button className="projects_btn --cod"><a href="https://github.com/G4br13l4/s5-e-commerce">Código</a></button>
                                            <button className="projects_btn --dem"><a href="https://g4br13l4.github.io/s5-e-commerce/">Demo</a></button>
                                        </div>
                                    </Col>
                                    <Col className="projects_3" xs={11} md={3}>
                                        <h3>Foodmap</h3>
                                        <p>CSS, Bootstrap 4, Javascript, jQuery</p>
                                        <div>
                                            <button className="projects_btn --cod"><a href="https://github.com/G4br13l4/foodmap">Código</a></button>
                                            <button className="projects_btn --dem"><a href="https://g4br13l4.github.io/foodmap/">Demo</a></button>
                                        </div>    
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


export default Projects;