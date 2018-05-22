import React from 'react';
import './../css/Skills.css';
import NavBar from './NavBar';

class Skills extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <section className="skills">
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap 3 & 4</li>
                        <li>Materialize</li>
                        <li>ECMA 5 & 6 </li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>API Requests</li>
                        <li>GitHub</li>
                        <li>NPM</li>
                        <li>Yarn</li>
                        <li>Google Analytics</li>
                        <li>Omniture</li>
                        <li>Social Media Analytics</li>
                    </ul>
                </section>
            </div>
            );
        }
    }


export default Skills;