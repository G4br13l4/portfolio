import React from 'react';
import './../css/NavBar.css';
import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <Col className="nav-container" xs={12} md={2}>
                <nav>
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/about">Acerca de mí</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Proyectos</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>    
                    </ul>
                </nav>
            </Col>
        );
    }
}

export default NavBar;
                   