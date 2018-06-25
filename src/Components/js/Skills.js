import React from 'react';
import './../css/Skills.css';
import NavBar from './NavBar';
import { Grid, Row, Col } from 'react-bootstrap';

class Skills extends React.Component{
    render(){
        return(
            <Grid fluid>
                <Row >
                    <NavBar/>
                    <Col xs={12} md={10} className="default-background skills-section">
                        <Row>
                            <Col xs={12} md={12} className="title-section">
                                <h1>Skills</h1>
                            </Col>
                        </Row>
                        <Row className="align-center">
                            <Col xs={10} md={10}>
                                <Row>
                                    <Col xs={12} md={3}>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Bootstrap 3 & 4</li>
                                            <li>Materialize</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <ul>
                                            <li>ECMA 5 & 6 </li>
                                            <li>Javascript</li>
                                            <li>jQuery</li>
                                            <li>React</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <ul>
                                            <li>Firebase</li>
                                            <li>API Requests</li>
                                            <li>GitHub</li>
                                            <li>NPM</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <ul>
                                            <li>Yarn</li>
                                            <li>Google Analytics</li>
                                            <li>Omniture</li>
                                            <li>Social Media Analytics</li>
                                        </ul>
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


export default Skills;