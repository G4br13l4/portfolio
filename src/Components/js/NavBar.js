import React from 'react';
import './../css/NavBar.css';
import { Row, Col} from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return(
            <Col className="nav-container" xs={12} md={2}>
                <nav>
                    <ul>
                        <li><a href="https://g4br13l4.github.io/portfolio/">Home</a></li>
                        <li><a href="https://g4br13l4.github.io/portfolio/about">About me</a></li>
                        <li><a href="https://g4br13l4.github.io/portfolio/skills">Skills</a></li>
                        <li><a href="https://g4br13l4.github.io/portfolio/projects">Projects</a></li>
                        <li><a href="https://g4br13l4.github.io/portfolio/contact">Contact</a></li>    
                    </ul>
                </nav>
            </Col>
        );
    }
}

export default NavBar;
                   