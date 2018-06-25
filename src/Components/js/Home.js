import React from 'react';
import './../css/Home.css';
import NavBar from './NavBar';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends React.Component{
    render(){
        return(
            <Grid fluid>
                <Row>
                    <NavBar/>            
                    <Col className="default-background home-section" xs={12} md={10}>
                        <Row>
                            <Col className="home_title" xs={10} md={12}>
                                <h1>¡Hola!, soy Gabriela López Fuentes,</h1>
                                <span>Frontend developer & digital marketing analyst</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
            );
        }
    }


export default Home;