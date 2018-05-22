import React from 'react';
import './../css/Home.css';
import NavBar from './NavBar';

class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <section>
                    <div className="home_title">
                        <h1>¡Hola!, so Gabriela López Fuentes,</h1>
                        <span>Frontend developer & digital marketing analyst</span>
                    </div>
                </section>
            </div>
            );
        }
    }


export default Home;