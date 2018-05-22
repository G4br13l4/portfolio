import React from 'react';
import './../css/NavBar.css';

class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/about">About me</a></li>
                    <li><a href="http://localhost:3000/skills">Skills</a></li>
                    <li><a href="http://localhost:3000/projects">Projects</a></li>
                    <li><a href="http://localhost:3000/contact">Contact</a></li>
                    <li><a href="http://localhost:3000/places">Places</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
                   