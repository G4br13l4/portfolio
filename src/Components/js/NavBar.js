import React from 'react';
import './../css/NavBar.css';
import { Row, Col} from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return(
            <Col className="nav-container" xs={12} md={2}>
                <nav>
                    <ul>
                        <li><a href="https://g4br13l4.github.io/portfolio/">Menu</a></li>
                        <li><a href="https://g4br13l4.github.io/portfolio/about">Acerca de mí</a></li>
                        <li><a href="https://g4br13l4.github.io/portfolio/skills">Skills</a></li>
                        <li><a href="https://g4br13l4.github.io/portfolio/projects">Proyectos</a></li>
                        <li><a href="https://g4br13l4.github.io/portfolio/contact">Contacto</a></li>    
                    </ul>
                </nav>
            </Col>
        );
    }
}

export default NavBar;
                   