import React from 'react';
import './../css/NavBar.css';

class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="https://g4br13l4.github.io/portfolio/">Home</a></li>
                    <li><a href="https://g4br13l4.github.io/portfolio/about">About me</a></li>
                    <li><a href="https://g4br13l4.github.io/portfolio/skills">Skills</a></li>
                    <li><a href="https://g4br13l4.github.io/portfolio/projects">Projects</a></li>
                    <li><a href="https://g4br13l4.github.io/portfolio/contact">Contact</a></li>
                    <li><a href="https://g4br13l4.github.io/portfolio/places">Places</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
                   