import React from 'react';
import './../css/Projects.css';
import NavBar from './NavBar';

class Projects extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <section className="projects">
                    <div className="projects_row">
                        <div className="projects_1">
                            <h3>Pokedex</h3>
                            <p>CSS, Bootstrap 3, Javascript, jQuery, PokeApi</p>
                            <div>
                                <button className="projects_btn --cod"><a href="https://github.com/G4br13l4/pokedex">Código</a></button>
                                <button className="projects_btn --dem"><a href="https://g4br13l4.github.io/pokedex/">Demo</a></button>
                            </div>
                        </div>
                        <div className="projects_2">
                            <h3>Ecommerce</h3>
                            <p>Javascript, jQuery, Firebase, LocalStorage, Paypal & Mercado Libre APIs</p>
                            <div>
                                <button className="projects_btn --cod"><a href="https://github.com/G4br13l4/s5-e-commerce">Código</a></button>
                                <button className="projects_btn --dem"><a href="https://g4br13l4.github.io/s5-e-commerce/">Demo</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="projects_row">
                    <div className="projects_3">
                        <h3>Foodmap</h3>
                        <p>CSS, Bootstrap 4, Javascript, jQuery</p>
                        <div>
                            <button className="projects_btn --cod"><a href="https://github.com/G4br13l4/foodmap">Código</a></button>
                            <button className="projects_btn --dem"><a href="https://g4br13l4.github.io/foodmap/">Demo</a></button>
                        </div>    
                    </div>
                    </div>
                </section>
            </div>
            );
        }
    }


export default Projects;